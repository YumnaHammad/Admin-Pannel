import React, { useState } from "react";
import { BsThreeDotsVertical, BsInfoCircle } from "react-icons/bs";
import { PiHandWaving } from "react-icons/pi";
const colorOptions = {
  option1: "red",
  option2: "blue",
  option3: "green",
  option4: "purple",
  option5: "orange",
};

const RadioOption = ({ option, selectedOption, onOptionChange }) => {
    const isActive = selectedOption === option;
  
    const labelStyle = {
      textDecoration: isActive ? "line-through" : "none",
      color: isActive ? "#CDC9CD" : "black",
    };
  
    const descriptionStyle = {
      color: colorOptions[option],
    };
  
    return (
      <div className="form-check ">
        <div className="d-flex align-items-center">
          <input
            className="form-check-input"
            type="radio"
            value={option}
            checked={isActive}
            onChange={onOptionChange}
          />
          <label className="form-check-label">
            <div style={labelStyle} >
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisic
              </p>
            </div>
            <div style={descriptionStyle}>
              <p>Debitis deserunt distinctio</p>
            </div>
          </label>
        </div>
       
      </div>
    );
  };
  
  

const Radio = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const options = ["option1", "option2", "option3", "option4", "option5"];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row bg-white ">
        <div className="col-lg-12 ">
          <div>
            <hr />
            {options.map((option) => (
              <div key={option} className="d-flex align-items-center">
                <div>
                  <RadioOption
                    option={option}
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                  />
                  <hr />
                </div>
                <div className="col-lg d-flex justify-content-end ml-auto">
                  <BsInfoCircle className="text-grey mx-1" />
                  <PiHandWaving className="text-grey mx-1" />
                  <BsThreeDotsVertical className="text-grey mx-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radio;
