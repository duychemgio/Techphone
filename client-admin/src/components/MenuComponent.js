import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import { Link } from "react-router-dom";
import "./Menu.css";

class Menu extends Component {
  static contextType = MyContext;

  componentDidMount() {
    const menuToggle = document.getElementById("menu-toggle");
    const menuContent = document.querySelector(".menu-content");

    menuToggle.addEventListener("change", function () {
      if (this.checked) {
        menuContent.classList.add("open");
      } else {
        menuContent.classList.remove("open");
      }
    });
  }

  lnkLogoutClick() {
    this.context.setToken("");
    this.context.setUsername("");
  }

  render() {
    return (
      <div className="menu-container">
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-toggle-label">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav className="menu-content">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/admin/home">Trang chủ</Link>
            </li>
            <li className="menu-item">
              <Link to="/admin/category">Danh mục</Link>
            </li>
            <li className="menu-item">
              <Link to="/admin/product">Sản phẩm</Link>
            </li>
            <li className="menu-item">
              <Link to="/admin/order">Đơn hàng</Link>
            </li>
            <li className="menu-item">
              <Link to="/admin/customer">Khách hàng</Link>
            </li>
            <li className="menu-item">
              <span className="greeting">Xin chào, admin</span>
            </li>
            <li className="menu-item">
              <span className="logout" onClick={() => this.lnkLogoutClick()}>
                Đăng xuất
              </span>
            </li>
          </ul>
        </nav>
        <div className="menu-right">
          <span className="username">{this.context.username}</span>
        </div>
      </div>
    );
  }
}

export default Menu;
