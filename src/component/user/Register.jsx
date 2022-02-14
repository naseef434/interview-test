import React, { useState } from "react";
import "./style_login.css";
import { Form, Button } from "react-bootstrap";
import { Axios } from "axios";
export default function Register() {
  const [register, setregister] = useState({});
  //handle register Event
  const handleRegister = (event) => {
    const { name, value } = event.target;
    setregister({ ...register, [name]: value });
  };

  const handleRegisterButton = async() => {
    const response = await Axios.post('http://localhost:8000/api/create',{register});
    console.log(response);

  };
  console.log(register);
  return (
    <>
      <div class="login">
        <div class="login-triangle"></div>

        <h2 class="login-header">Register</h2>

        <form class="login-container">
          <p>
            <input
              type="text"
              placeholder="Name"
              onChange={handleRegister}
              name="name"
              required
            />
          </p>
          <p>
            <input
              type="email"
              placeholder="email"
              onChange={handleRegister}
              name="email"
              required
            />
          </p>
          <p>
            <input
              type="number"
              placeholder="Mobile"
              onChange={handleRegister}
              name="mobile"
              required
            />
          </p>
          <p>
            <input
              type="file"
              placeholder="upload Your cv"
              onChange={handleRegister}
              name="file"
              required
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Job Title"
              onChange={handleRegister}
              name="job_title"
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Company Name"
              onChange={handleRegister}
              name="company_name"
            />
          </p>
          <p>
            <label>date started</label>
            <input
              type="date"
              placeholder="date started"
              onChange={handleRegister}
              name="date_started"
            />
          </p>
          <p>
            <label for="cars">industry:</label>
            <select
              name="industry"
              id="industry"
              onChange={handleRegister}
              name="industry"
            >
              <option value="Hospitality">Hospitality</option>
              <option value="Engineering">Engineering</option>
              <option value="Others">Others</option>
            </select>
          </p>
          <p>
            <input
              type="text"
              placeholder="Highest Level Education"
              onChange={handleRegister}
              name="education"
            />
          </p>
          <p>
            <input
              type="date"
              placeholder="date of compleeted"
              onChange={handleRegister}
              name="date_Of_Compleeted"
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="SKills"
              onChange={handleRegister}
              name="skills"
            />
          </p>

          <p>
            <input
              type="submit"
              onClick={handleRegisterButton}
              value="Register"
            />
          </p>
        </form>
      </div>
    </>
  );
}
