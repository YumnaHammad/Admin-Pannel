import React from "react";
import ProgressContent from "./ProgressContent";

const Progress = ({
  percentage,
  heading,
  inside,
  color,
  backgroundColor,
  headingColor,
}) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  const textStyle = {
    fontSize: "20px",
    fill: "#000",
    fontWeight: "bold",
    dominantBaseline: "middle",
    textAnchor: "middle",
  };

  const circleStyle = {
    stroke: color || "#fff",
    strokeWidth: "10",
    strokeDasharray: circumference,
    strokeDashoffset: progress,
    fill: "transparent",
  };

  const containerStyle = {
    backgroundColor: backgroundColor || "white",
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "16px",
  };

  const headingStyle = {
    textAlign: "left",
    color: headingColor || "black",
    fontWeight: "bold",
  };

  return (
    <div className="col-lg-4" style={containerStyle}>
      <h6 style={headingStyle}>{heading}</h6>
      <div className="text-center">
        <div className="progress-container">
          <svg width="100" height="100">
            <circle r={radius} cx="50%" cy="50%" style={circleStyle} />
            <text x="25%" y="40%" style={{ fontSize: "13px" }}>
              {inside}
            </text>
            <text x="50%" y="60%" style={textStyle}>
              {`${percentage}%`}
            </text>
          </svg>
          <ProgressContent title={"Net profit"} up={"2.8k"} down={"568"} />
          <ProgressContent title={"Net profit"} up={"2.8k"} down={"568"} />
        </div>
      </div>
    </div>
  );
};

export default Progress;
