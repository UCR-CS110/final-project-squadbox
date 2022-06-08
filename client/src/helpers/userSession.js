
export function isLoggedIn() {
  let username = localStorage.getItem("username");
  // console.log("Logged in with username: " + username);
  return username ? username : false;
}