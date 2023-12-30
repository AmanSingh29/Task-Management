import React, { useState } from "react";
import styles from "../Styles/Sidebar.module.css";
import { Link } from "react-router-dom";
import { IoLogoXing } from "react-icons/io";
import { BsDatabaseFill } from "react-icons/bs";
import { RiAddBoxLine } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <div
        className={isCollapse ? styles.sideCollapse : styles.sidebarContainer}
      >
        <div className={styles.upside}>
          <div className={styles.logo}>
            <span>
              <IoLogoXing />
            </span>
            <span className={isCollapse && styles.hide}>Logo</span>
          </div>
          <hr />
          <div className={styles.upDetails}>
            <Link to={"/"} onClick={() => setActivePage("home")}>
              <div
                className={styles.sideOptions}
                id={activePage == "home" ? styles.active : ""}
              >
                <span>
                  <BsDatabaseFill />
                </span>
                <span className={isCollapse && styles.hide}>My Projects</span>
              </div>
            </Link>
            <Link to={"/add"} onClick={() => setActivePage("add")}>
              <div
                className={styles.sideOptions}
                id={activePage == "add" ? styles.active : ""}
              >
                <span>
                  <RiAddBoxLine />
                </span>
                <span className={isCollapse && styles.hide}>
                  Create Project
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.downside}>
          <div className={styles.downDetails}>
            <div className={styles.sideOptions}>
              <span>
                <IoMdHelpCircleOutline />
              </span>
              <span className={isCollapse && styles.hide}>Help & Support</span>
            </div>
            <div className={styles.sideOptions}>
              <span>
                <MdOutlineFeedback />
              </span>
              <span className={isCollapse && styles.hide}>Feedback</span>
            </div>
            <div
              onClick={() => setIsCollapse(!isCollapse)}
              className={styles.sideOptions}
            >
              <span>
                <TbLayoutSidebarLeftCollapseFilled />
              </span>
              <span className={isCollapse && styles.hide}>Collapse</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
