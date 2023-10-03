import React from "react";
import images from "../assets/images.jpeg";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlinePrinter } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        {" "}
        <div className="d-flex align-items-center">
          <BsThreeDotsVertical className="text-grey mx-1" />
          <img
            src={images}
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle "
          />
          <div className="mx-2">
            <p
              className="mb-1"
              style={{ fontSize: "14px", fontWeight: "bold" }}
            >
              Abrilay Khtaun
            </p>
            <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
              abrilakh@gmail.com
            </p>
          </div>
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div className="d-lg-flex align-items-center ml-auto">
          <div
            style={{
              width: "45px",
              height: "45px",
              textAlign: "center",
            }}
            className="rounded-circle mx-auto "
          >
            <TfiWorld
              className=" mt-2 text-primary mx-auto "
              style={{ fontSize: "25px" }}
            />
          </div>
          <div
            style={{
              width: "45px",
              height: "45px",
              textAlign: "center",
            }}
            className="rounded-circle mx-auto "
          >
            <AiOutlinePrinter
              className=" mt-2 text-primary  mr-2 mx-auto"
              style={{ fontSize: "25px" }}
            />
          </div>
          <div className="">
            <p
              className="mb-1 d-flex justify-content-center"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              20:05
            </p>
            <p
              className="text-muted mb-0 d-flex justify-content-center "
              style={{ fontSize: "12px" }}
            >
              Thu,28 September 2023
            </p>
          </div>
          <div className=" d-flex justify-content-center ">
          <button
            type="button"
            className="btn btn-primary rounded-sm mx-2 text-wrap d-flex justify-content-center  "
          >
            Pending Tasks
          </button></div>
          <div
            style={{
              width: "45px",
              height: "45px",
              textAlign: "center",
              backgroundColor: "rgb(242, 242, 242)",
            }}
            className="rounded-circle mx-2 mx-auto"
          >
            <BsSearch
              className=" mt-2 text-primary mx-auto "
              style={{ fontSize: "22px" }}
            />
          </div>
          <div
            style={{
              width: "45px",
              height: "45px",
              textAlign: "center",
              backgroundColor: "rgb(242, 242, 242)",
            }}
            className="rounded-circle mx-auto "
          >
            <FaRegCommentDots
              className=" mt-2 text-primary mx-auto "
              style={{ fontSize: "25px" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
