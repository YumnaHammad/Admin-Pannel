import React from "react";
import ReactApexChart from "react-apexcharts";
const Barchart = () => {
  const chartData = {
    series: [
      {
        name: "ID",
        data: [10, 25, 15, 32, 50],
      },
      {
        name: "ID",
        data: [20, 35, 45, 52, 60],
      },
      {
        name: "ID",
        data: [15, 20, 40, 28, 80],
      },
    ],
    options: {
      indexAxis: "y",
      chart: {
        type: "bar",
        height: 240,
        background: "white",
        borderRadius: 5,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      legend: {
        enabled: true,
        labels: {
          colors: "white",
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Bar Chart",
        align: "left",
        style: {
          color: "white",
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          dataLabels: {
            enabled: false,
            show: false,
          },
        },
      },
      xaxis: {
        labels: {
          style: {
            colors: "white",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "white",
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={210}
      />
    </div>
  );
};

export default Barchart;
