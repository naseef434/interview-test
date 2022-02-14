import React from "react";
import './style.css';
import Table from "./Table";
export default function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          <a class="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
     <Table />
    </div>
  );
}
