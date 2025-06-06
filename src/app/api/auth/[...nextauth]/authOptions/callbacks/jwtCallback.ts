import axios from "axios";

const DOMAIN = process.env.NEXT_PUBLIC_CMS_DOMAIN;

export async function jwtCallback(args: any) {
  const { account, token } = args;

  console.log("-------------------------------");
  console.log("------------------------------- jwt() - start");
  console.log("-------------------------------");
  console.log("jwt() args: ", args);
  console.log("- - - - - - - - - - - - - - - -");
  console.log("jwt() account: ", account);
  console.log("- - - - - - - - - - - - - - - -");
  console.log("jwt() token: ", token);
  console.log("- - - - - - - - - - - - - - - -");

  // if (account) {
  //   const { provider, access_token } = account;

  //   const strapiAuthRes = await axios.get(
  //     `${DOMAIN}/api/auth/${provider}/callback?access_token=${access_token}`,
  //   );

  //   console.log(
  //     "jwt() strapi /api/auth/ strapiAuthRes.data: ",
  //     strapiAuthRes.data,
  //   );
  //   console.log("- - - - - - - - - - - - - - - -");
  //   const strapiJwt = strapiAuthRes.data?.jwt;
  //   console.log("jwt() strapi /api/auth/ strapiJwt: ", strapiJwt);
  //   console.log("- - - - - - - - - - - - - - - -");

  //   if (strapiJwt) {
  //     // token.jwt = strapiJwt;

  //     const strapiUsersMeRes = await axios({
  //       method: "PUT",
  //       url: `${DOMAIN}/api/users/me`,
  //       data: JSON.stringify({
  //         lastLogin: new Date().getTime(),
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${strapiJwt}`,
  //       },
  //     });
  //     console.log("jwt() strapi /api/users/me : ", strapiUsersMeRes?.data);
  //     console.log("- - - - - - - - - - - - - - - -");
  //   }
  // }

  console.log("-------------------------------");
  console.log("------------------------------- jwt() - end");
  console.log("-------------------------------");
  return token;
}
