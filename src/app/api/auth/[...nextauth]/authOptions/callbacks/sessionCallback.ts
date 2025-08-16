export async function sessionCallback({ session, token, user }: any) {
  // console.log("-------------------------------");
  // console.log("session() session: ", session);
  // console.log("- - - - - - - - - - - - - - - -");
  // console.log("session() token: ", token);
  // console.log("- - - - - - - - - - - - - - - -");
  // console.log("session() user: ", user);

  // session.user = token;

  session.accessToken = token.accessToken;
  session.strapiJwt = token.strapiJwt;
  session.strapiUser = token.strapiUser;

  // console.log("- - - - - - - - - - - - - - - -");
  // console.log("session() session: ", session);
  // console.log("session() session.accessToken: ", session.accessToken);
  // console.log("-------------------------------");

  return session;
}
