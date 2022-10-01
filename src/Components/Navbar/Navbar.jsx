import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Header>Logo</Header>
      <SearchOutlined />
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    </nav>
  );
};

export default Navbar;
