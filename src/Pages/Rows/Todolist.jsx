import React from "react";

import { BsThreeDotsVertical, BsPlus } from "react-icons/bs";
import Radio from "./Radio";

const Todolist = () => {
  return (
    <div>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" href="#">
            {" "}
            <div className="d-flex align-items-center">
              <div className="mx-2">
                <p
                  className="mb-1"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Today To Do List
                </p>
                <p
                  className="text-muted mb-0 d-flex justify-content-start "
                  style={{ fontSize: "12px" }}
                >
                  Saturday,
                </p>

                <p
                  className="text-muted mb-0 d-flex justify-content-start "
                  style={{ fontSize: "12px" }}
                >
                  12 October 2019
                </p>
              </div>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-lg-flex align-items-center ml-auto">
              <div className=" d-flex justify-content-center "></div>
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  textAlign: "center",
                  backgroundColor: "#5353EA",
                }}
                className="rounded-circle mx-2 mx-auto"
              >
                <BsPlus
                  className=" mt-2 text-white mx-auto "
                  style={{ fontSize: "28px" }}
                />
              </div>
              <div>
                <BsThreeDotsVertical className="text-grey mx-1" />
              </div>
            </div>
          </div>
        </nav>
        
       <Radio/>
      </div>
    </div>
  );
};

export default Todolist;
