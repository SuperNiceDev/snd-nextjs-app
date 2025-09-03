import axios from "axios";

const DOMAIN = process.env.NEXT_PUBLIC_CMS_DOMAIN;
// const API_TOKEN_FULL_ACCESS = process.env.API_TOKEN_FULL_ACCESS as string;

const log = (mthd: "log" | "warn" | "error" | "log", ...args: any) => {
  // console?.[mthd](...args);
};

export async function jwtCallback(args: any) {
  const { account, token } = args;

  log("log", "-------------------------------");
  log("warn", "------------------------------- jwtCallback() - start");
  log("log", "-------------------------------");
  log("log", "jwtCallback() args: ", args);
  log("log", "- - - - - - - - - - - - - - - -");
  log("log", "jwtCallback() account: ", account);
  log("log", "- - - - - - - - - - - - - - - -");
  log("log", "jwtCallback() token: ", token);
  log("log", "- - - - - - - - - - - - - - - -");

  try {
    if (account) {
      const { provider, access_token } = account;

      token.accessToken = access_token;

      const strapiAuthUrl = `${DOMAIN}/api/auth/${provider}/callback?access_token=${access_token}`;
      log("log", "jwtCallback() strapiAuthUrl: ", strapiAuthUrl);

      const strapiAuthRes = await axios(strapiAuthUrl).catch((err) => {
        log("error", "jwtCallback() /api/auth/ error: ", err);
      });

      const strapiAuthData = strapiAuthRes?.data;
      log("log", "jwtCallback() strapiAuthData.jwt: ", strapiAuthData?.jwt);
      log("log", "jwtCallback() trapiAuthData.user: ", strapiAuthData?.user);
      log("log", "- - - - - - - - - - - - - - - -");

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
          log("error", "jwtCallback() /api/users/me error: ", err);
        });

        log(
          "log",
          "jwtCallback() strapiUsersMeRes?.data: ",
          strapiUsersMeRes?.data,
        );
        log("log", "- - - - - - - - - - - - - - - -");
      } else {
        token.strapiJwt = null;
        token.strapiUser = null;
      }
    }
  } catch (err) {
    log("error", "jwtCallback() error: ", err);
  }

  log("log", "-------------------------------");
  log("warn", "------------------------------- jwtCallback() - end");
  log("log", "-------------------------------");

  return token;
}
