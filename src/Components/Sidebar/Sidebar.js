import React, { useState } from "react";
import "./Sidebar.css";
import Home from "../Home/Home";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "../Chatbots/ActionProvider";
import MessageParser from "../Chatbots/MessageParser";
import Config from "../Chatbots/Config";
import "react-chatbot-kit/build/main.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  // Sidebar expansion condition expression
  const [expandSidebar, setExpandSidebar] = useState(true);

  // arrow function for side functionality
  const handleExpandClick = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>
        <div className="icon-for-sidebar-expand">
          <p onClick={handleExpandClick}>
            {/* if expand click is true show the left react icon else show right */}
            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}
          </p>
        </div>
        <SidebarList expandSidebar={expandSidebar} />
      </div>

      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default Sidebar;
