import { useState } from 'react';

let userSession = () => {
  const [username, setUsername] = useState("");

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
    setUsername(name);
  }

  return {
    getUsername: getName,
    setUsername: setName,
  }
}

export default userSession;