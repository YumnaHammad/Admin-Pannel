import React from "react";
import Todolist from "./Todolist";
import Progress from "./Progress";

const ThirdRow = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-1">
          <div className="col-lg-6 d-flex justify-content-center ">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <Progress
                  percentage={66}
                  heading={"Registrations"}
                  inside={"increase"}
                  headingColor={"#24D4E0"}
                  backgroundColor={"#CCF5F8"}
                  color={"#24D4E0"}
                />
                <Progress
                  percentage={31}
                  heading={"Sales"}
                  inside={"increase"}
                  headingColor={"#C593FF"}
                  backgroundColor={"#FEE7FF"}
                  color={"#C593FF"}
                />
                <Progress
                  percentage={62}
                  heading={"Company Growth"}
                  inside={"increase"}
                  headingColor={"#8280FD"}
                  backgroundColor={"#E9E7FF"}
                  color={"#8280FD"}
                />
              </div>
            </div>
          </div>

          <div className="col-lg bg-primary mx-1 p-0">
            <Todolist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdRow;
