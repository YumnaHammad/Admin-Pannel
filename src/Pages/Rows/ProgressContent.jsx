import React from 'react'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const ProgressContent = ({title , up , down }) => {
  return (
    <div>
      <div>
              <p
                className="mb-1 d-flex justify-content-start"
                style={{ fontSize: "14px" }}
              >
                {title}
                <span className='mx-1' >
                  <AiFillCaretUp  className='text-success'/>
                  {up}
                </span>
                <span>
                  <AiFillCaretDown  className='text-danger'/>
                 {down}
                </span>
              </p>
              
            </div>
    </div>
  )
}

export default ProgressContent
