import React, { useState } from "react";
import Login from "./Login";

export default function Index() {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  //handle login event
  const handleLogin = (event) => {
    const { name, value } = event.target;
    setlogin({ ...login, [name]: value });
  };

  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
}
