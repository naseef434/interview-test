import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style_login.css";
export default function Login({handleLogin}) {
  return (
    <>
      <div class="login">
        <div class="login-triangle"></div>

        <h2 class="login-header">Log in</h2>

        <form class="login-container">
          <p>
            <input type="email" onChange={handleLogin} name="email" placeholder="Email" />
          </p>
          <p>
            <input type="password" onChange={handleLogin} name="password" placeholder="Password" />
          </p>
          <p>
            <input type="submit" value="Log in" />
          </p>
          <Link to="/register">
            <p>Dont have account pls register first </p>
          </Link>
        </form>
      </div>
    </>
  );
}
