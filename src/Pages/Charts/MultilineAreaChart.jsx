import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MultilineAreaChart = ({ chartColor, ChartTitle, ChartSubtitle, hideSeries }) => {
  const chartOptions = {
    chart: {
      type: 'area',
      height: 200,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    legend : {
        show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      colors: [chartColor || 'blue']
    },
    xaxis: {
      type: 'datetime',
      categories: [
        1609459200000,
        1609545600000,
        1609632000000,
        1609718400000,
        1609804800000,
        1609891200000
      ],
      labels: {
        padding: 0,
        show: false
      },
    },
    yaxis: {
      labels: {
        padding: 0,
        margin: 0,
        show: false
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      },
    },
    fill: {
      colors: [chartColor || 'blue'],
    },
    title: {
      text: ChartTitle,
      align: 'left',
    },
    subtitle: {
      text: ChartSubtitle,
      align: 'left',
     
    },
  };

  const series =[
        {
          name: 'Series 1',
          data: [30, 40, 35, 50, 49, 52]
          
        },
        {
          name: 'Series 2',
          data: [40, 35, 50, 20, 30, 10]
        }
      ];

  return (
    <div id="chart">
      <ReactApexChart options={chartOptions} series={series} type="area" height={210} />
    </div>
  );
};

export default MultilineAreaChart;
