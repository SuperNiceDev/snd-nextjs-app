import axios from "axios";

const DOMAIN = process.env.NEXT_PUBLIC_CMS_DOMAIN;

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
        // token.jwt = strapiAuthData?.jwt;
        token.strapiJwt = strapiAuthData?.jwt;
        token.strapiUser = strapiAuthData?.user;

        const strapiUsersMeRes = await axios({
          method: "PUT",
          url: `${DOMAIN}/api/users/me`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${strapiAuthData.jwt}`,
          },
          data: JSON.stringify({
            lastLogin: new Date().getTime(),
          }),
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
