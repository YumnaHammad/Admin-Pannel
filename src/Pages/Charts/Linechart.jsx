import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Linechart = (props) => {
  const { color, data } = props;

  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false  // Hide the toolbar which includes the zoom toggle button
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      colors: [color] // Use the color prop for the line color
    },
   
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };

  const seriesData = [{
    name: "Desktops",
    data: data // Use the data prop for the series data
  }];

  return (
    <div id="chart" className='bg-white p-0'>
      <ReactApexChart options={chartOptions} series={seriesData} type="line" height={210} />
    </div>
  );
};

export default Linechart;
