import React from "react";
import cong from "../../assets/cong.png";

import AreaChart from './AreaChart'
import MultilineAreaChart from "./MultilineAreaChart";

const Charts = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div
            className="col-lg m-1"
            style={{ paddingLeft: "0", paddingRight: "0" }}
          >
            <div className="card ">
              <div className="card-body d-flex">
                <div>
                  <h1 className="card-title">86%</h1>
                  <h6 className="card-subtitle  text-muted">increased</h6>
                  <h5 className="card-title">Congratulations!</h5>
                  <p className="card-text">
                    You've finished all of your tasks for this week
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img src={cong} alt="..." className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 bg-white m-1 ">
            <AreaChart
              chartColor="purple"
              ChartSubtitle="increase in Average"
              ChartTitle="income 50%"
            />
          </div>
          <div className="col-lg-2 bg-white m-1">
            <AreaChart
              chartColor="blue"
              ChartSubtitle="Decrease in Average"
              ChartTitle="profit Report 15%"
            />
          </div>
          <div className="col-lg-2 bg-white  m-1">
            <AreaChart
              chartColor="pink"
              ChartSubtitle="Hover to see detail"
              ChartTitle="Impression"
            />
          </div>
          <div className="col-lg-2 bg-white m-1">
            {/* <AreaChart
              chartColor="green"
              ChartSubtitle="Hover to see detail"
              ChartTitle="Activity"
            /> */}
            <MultilineAreaChart chartColor="green"
              ChartSubtitle="Hover to see detail"
              ChartTitle="Activity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
