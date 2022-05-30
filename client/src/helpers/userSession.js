let UserSession = () => {
  let username = "";

  const getName = () => {
    if (username === "") {
      // check local storage

      return "guest";
    }
    else {
      return username;
    }
  }

  const setName = (name) => {
    username = name;
  }

  return {
    getName: getName,
    setName: setName,
  }
}

export default UserSession;