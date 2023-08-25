import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkB } from "react-scroll";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="navbar d-flex justify-content-between sticky-top">
        <div className="sidebar-logo d-flex justify-content-start align-items-center">
          <Link to="/">
            <img
              src="https://cdn.discordapp.com/attachments/1135924428300099595/1135924968241250464/image.png"
              alt="logo-medic"
              className="nav-logo"
            />
            <img
              src="https://cdn.discordapp.com/attachments/1135924428300099595/1135925130900545546/image.png"
              alt="logo-alive"
              className="nav-logo2"
            />
          </Link>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          {screenWidth < 768 ? (
            <img
              src="https://cdn.discordapp.com/attachments/1135924428300099595/1135967189917249577/image.png"
              alt="nav-arrow"
              className="nav-arrow"
            />
          ) : (
            <img
              src="https://cdn.discordapp.com/attachments/1135924428300099595/1135925201960452126/image.png"
              alt="nav-arrow"
              className="nav-arrow"
            />
          )}
          <Link className="menu-bars menu-click">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
      </div>
      <nav
        className={
          sidebar ? "nav-menu active sticky-top" : "nav-menu sticky-top"
        }
      >
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle d-flex justify-content-end align-items-center">
            <Link
              className="menu-bars"
              style={{ textDecoration: "none !important" }}
            >
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, i) => (
            <li key={i} className={item.cName}>
              {item.title === "GALLERY" || item.title === "CONTACT" ? (
                location.pathname === "/" ? (
                  <LinkB to={item.path} smooth={true} duration={0}>
                    <span>{item.title}</span>
                  </LinkB>
                ) : (
                  <Link to="/">
                    <span>{item.title}</span>
                  </Link>
                )
              ) : (
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
