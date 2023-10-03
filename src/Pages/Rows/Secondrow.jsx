import React from 'react'
import Linechart from '../Charts/Linechart'
import Barchart from '../Charts/Barchart';

const Secondrow = () => {
    const chartData = [5, 7, 19, 15, 49, 35, 45];
    
  return (
 

    <div>
      <div className="container  ">
        <div className="row">
          
            <div className="col-lg-6">
                <Barchart/>
            </div>
            <div className="col-lg-3 p-0 ">
            <Linechart color={'#8D318D'} data={chartData}/>
            </div>
            <div className="col-lg-3 p-0 ">
            <Linechart color={'#318D5F'} data={chartData}/>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Secondrow
