import React, { useState } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import {
  AiOutlineAreaChart,
  AiOutlinePrinter,
  AiOutlinePlus,
} from "react-icons/ai";
import { SiPinboard } from "react-icons/si";
import { TbChartPieFilled, TbFileInvoice } from "react-icons/tb";
import { BsMailbox2 } from "react-icons/bs";
import { IoIosChatbubbles } from "react-icons/io";
import { MdViewList, MdPermContactCalendar } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      icon: <SiPinboard  style={{ color: 'blue' }}/>,
      className:"app",
    },
    {
      name: "Main",
      // fontSize: '24px'
      className:"bold",
    },
    {
      name: "Dashboard",
      icon: <TbChartPieFilled   style={{ color: 'blue' }} />,
      className:"app",
    },

    {
      name: "Ecommerce",
      icon: <FaShoppingCart />,
      sign: <AiOutlinePlus className="d-flex justify-content-end"/>,
      className:"remain",
    },
    {
      name: "Soical Media Analytics",
      icon: <AiOutlineAreaChart />,
      className:"remain",
    },
    {
      name: "Apps",
      className:"bold"
      
    },
    {
      name: "Email",
      icon: <BsMailbox2 />,
      sign: <AiOutlinePlus />,
      className:"remain",
    },
    {
      name: "Chat",
      icon: <IoIosChatbubbles />,
      className:"remain",
    },
    {
      name: "To Do list",
      icon: <MdViewList />,
      sign: <AiOutlinePlus />,
      className:"remain",
    },
    {
      name: "Calendar",
      icon: <FaRegCalendarDays />,
      className:"remain",
    },
    {
      name: "invoice",
      icon: <TbFileInvoice />,
      sign: <AiOutlinePlus />,
      className:"remain",
    },
    {
      name: "contact",
      icon: <MdPermContactCalendar />,
      sign: <AiOutlinePlus />,
      className:"remain",
    },
    {
      name: "project manager",
      icon: <FaRegCalendarDays />,
      sign: <AiOutlinePlus />,
      className:"remain",
    },
    {
      name: "file manager",
      icon: <AiOutlinePrinter />,
      sign: <AiOutlinePlus />,
      className:"remain",
    },
    {
      name: "UI Elements",
      className:"bold"
    },
    {
      name: "Widgets",
      icon: <BsMailbox2 />,
      className:"remain",
    },
    {
      name: "Icons (Aniloan)",
      icon: <IoIosChatbubbles />,
      sign: <AiOutlinePlus />,
      className:"remain",
    },
    {
      name: "color",
      icon: <MdViewList />,
      className:"remain",
    },
    {
      name: "extra Component",
      icon: <FaRegCalendarDays />,
      className:"remain",
    },
    {
      name: "Dashboard",
      icon: <TbChartPieFilled  style={{ color: 'blue' }} />,
      className:"app"
    },
    {
      name: "Ecommerce",
      icon: <FaShoppingCart />,
      sign: <AiOutlinePlus />,
      className:"remain",
    },
    {
      name: "Soical Media Analytics",
      icon: <AiOutlineAreaChart />,
      className:"remain",
    },
    {
      name: "Apps",
      className:"bold"
    },
    {
      name: "Email",
      icon: <BsMailbox2 />,
      sign: <AiOutlinePlus />,
      className:"remain",
    },
    {
      name: "Chat",
      icon: <IoIosChatbubbles />,
      className:"remain",
    },
    {
      name: "To Do list",
      icon: <MdViewList />,
      sign: <AiOutlinePlus />,
      className:"remain",
    },
    {
      name: "Calendar",
      icon: <FaRegCalendarDays />,
      className:"remain",
    },
    {
      name: "invoice",
      icon: <TbFileInvoice />,
      sign: <AiOutlinePlus />,
      className:"remain",
    },
  ];
  return (
    <div className={  `container-fluid p-0 d-flex ${isOpen ? 'open' : 'closed'}`}>
    <div className="sidebar text-black bg-white  mx-3">
      <div className="top_section d-flex align-items-center">
        <div className="bars mt-1 d-flex">
          <FaBars onClick={toggle} />
        </div>
        <h1 className="logo " style={{ display: isOpen ? "block" : "none" }}>
          Dashmin
        </h1>
      </div>

      {menuItem.map((item, index) => (
        <NavLink key={index} className="link d-flex " data-name={item.className}>
          <div className="icon mr-1">{item.icon}</div>
          <div className="link_text " style={{ display: isOpen ? "block" : "none" }}>
            {item.name}
          </div>
          <div className="sign ml-auto" style={{ display: isOpen ? "block" : "none" }}>
            {item.sign}
          </div>
        </NavLink>
      ))}
    </div>
    <main >{children}</main>
  </div>
  );
};

export default Sidebar;


