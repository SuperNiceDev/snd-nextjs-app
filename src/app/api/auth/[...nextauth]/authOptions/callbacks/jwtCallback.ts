import axios from "axios";

const DOMAIN = process.env.NEXT_PUBLIC_CMS_DOMAIN;
// const API_TOKEN_FULL_ACCESS = process.env.API_TOKEN_FULL_ACCESS as string;

export async function jwtCallback(args: any) {
  const { account, token } = args;

  console.log("-------------------------------");
  console.warn("------------------------------- jwtCallback() - start");
  console.log("-------------------------------");
  console.log("jwtCallback() args: ", args);
  console.log("- - - - - - - - - - - - - - - -");
  console.log("jwtCallback() account: ", account);
  console.log("- - - - - - - - - - - - - - - -");
  console.log("jwtCallback() token: ", token);
  console.log("- - - - - - - - - - - - - - - -");

  try {
    if (account) {
      const { provider, access_token } = account;

      token.accessToken = access_token;

      const strapiAuthUrl = `${DOMAIN}/api/auth/${provider}/callback?access_token=${access_token}`;
      console.log("jwtCallback() strapiAuthUrl: ", strapiAuthUrl);

      const strapiAuthRes = await axios(strapiAuthUrl).catch((err) => {
        console.error("jwtCallback() /api/auth/ error: ", err);
      });

      const strapiAuthData = strapiAuthRes?.data;
      console.log("jwtCallback() strapiAuthData.jwt: ", strapiAuthData?.jwt);
      console.log("jwtCallback() trapiAuthData.user: ", strapiAuthData?.user);
      console.log("- - - - - - - - - - - - - - - -");

      if (strapiAuthData) {
        token.strapiJwt = strapiAuthData?.jwt;
        const addData = {
          lastLogin: new Date().toISOString(),
          name: strapiAuthData?.user?.name || token.name,
        };
        token.strapiUser = { ...strapiAuthData?.user, ...addData };

        const strapiUsersMeRes = await axios({
          method: "PUT",
          url: `${DOMAIN}/api/users/me`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${strapiAuthData.jwt}`,
            // Authorization: `Bearer ${API_TOKEN_FULL_ACCESS}`,
          },
          data: JSON.stringify(addData),
        }).catch((err) => {
          console.error("jwtCallback() /api/users/me error: ", err);
        });

        console.log(
          "jwtCallback() strapiUsersMeRes?.data: ",
          strapiUsersMeRes?.data,
        );
        console.log("- - - - - - - - - - - - - - - -");
      }
    }
  } catch (err) {
    console.error("jwtCallback() error: ", err);
  }

  console.log("-------------------------------");
  console.warn("------------------------------- jwtCallback() - end");
  console.log("-------------------------------");

  return token;
}
