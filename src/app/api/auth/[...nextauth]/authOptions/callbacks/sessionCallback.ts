export async function sessionCallback({ session, token, user }: any) {
  // console.log("-------------------------------");
  // console.log("session() session: ", session);
  // console.log("- - - - - - - - - - - - - - - -");
  // console.log("session() token: ", token);
  // console.log("- - - - - - - - - - - - - - - -");
  // console.log("session() user: ", user);
  // console.log("-------------------------------");

  // session.user = token;
  return session;
}
