import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Gauge } from "@ant-design/plots";

export const GaugeChart = ({ percent,colorChart }) => {
  const config = {
    percent: 0.85,
    // percent: "${(props)=>props.percent}",
    range: {
      color: "l(0) 0:#5F27CD ",
      // color:${prop=},
      // color:${(props)=>props.colorChart},
      // color: "${percent}",
     
    },
    // color: "red",
    // startAngle: Math.PI,
    startAngle:Math.PI/30,
    endAngle: 4.1 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        // offsetY: -36,
        // offsetY: 20,
        style: {
          fontSize: "12px",
          color: "#4B535E",
        },
        // formatter: () => "Current Customers",
      },
      content: {
        style: {
          fontSize: "20px",
          lineHeight: "20px",
          color: "#4B535E",
        },
        // formatter: () => "Current Customers",
      },
    },
  };
  return <Gauge {...config} style={{ width: "90%", paddingTop:"10px" ,height:"130px" }} />;
};

// ReactDOM.render(<DemoGauge />, document.getElementById('container'));
