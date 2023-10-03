import React from "react";
import Navbar from '../Pages/Navbar'
import ThirdRow from "../Pages/Rows/ThirdRow";
import Charts from "../Pages/Charts/Charts";
import Secondrow from "../Pages/Rows/Secondrow";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Charts />
      <Secondrow />
      <ThirdRow />
    </>
  );
};
export default Dashboard;
