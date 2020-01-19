import React from "react";

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <div className="profile_img">
        <img alt="profile_img" width="100%" height="100%" />
      </div>
      <div className="title">Portfolio</div>
      <div className="noti">Template by W3.CSS</div>
      <div>
        <ul>
          <li>
            <span>
              <img alt="side_menu_ico" width="100%" height="100%" />
            </span>
            <span>
              PORTFOLIO
            </span>
          </li>
          <li>
            <span>
              <img alt="side_menu_ico" width="100%" height="100%" />
            </span>
            <span>
              ABOUT
            </span>
          </li>
          <li>
            <span>
              <img alt="side_menu_ico" width="100%" height="100%" />
            </span>
            <span>
              CONTACT
            </span>
          </li>
        </ul>
      </div>
      <div className="sns_list">
        <span><img alt="" width="100%" height="100%" /></span>
        <span><img alt="" width="100%" height="100%" /></span>
        <span><img alt="" width="100%" height="100%" /></span>
      </div>
    </div>
  );
};

export default SideMenu;