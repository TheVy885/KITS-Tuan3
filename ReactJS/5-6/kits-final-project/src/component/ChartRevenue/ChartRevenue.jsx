import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";

export const ChartRevenue = () => {
  const data = [
    {
      month: "Jan",
      type: "Predict",
      value: 0,
    },
    {
      month: "Jan",
      type: "Reality",
      value: 8500,
    },
    {
      month: "Feb",
      type: "Predict",
      value: 10000,
    },
    {
      month: "Feb",
      type: "Reality",
      value: 7000,
    },
    {
      month: "Mar",
      type: "Predict",
      value: 10000,
    },
    {
      month: "Mar",
      type: "Reality",
      value: 7000,
    },
    {
      month: "Apr",
      type: "Predict",
      value: 10000,
    },
    {
      month: "Apr",
      type: "Reality",
      value: 7000,
    },
    {
      month: "May",
      type: "Predict",
      value: 10000,
    },
    {
      month: "May",
      type: "Reality",
      value: 7000,
    },
    {
      month: "Jun",
      type: "Predict",
      value: 10000,
    },
    {
      month: "Jun",
      type: "Reality",
      value: 7000,
    },
    {
      month: "July",
      type: "Predict",
      value: 10000,
    },
    {
      month: "July",
      type: "Reality",
      value: 7000,
    },
    {
      month: "Aug",
      type: "Predict",
      value: 10000,
    },
    {
      month: "Aug",
      type: "Reality",
      value: 7000,
    },
    {
      month: "Sep",
      type: "Predict",
      value: 10000,
    },
    {
      month: "Sep",
      type: "Reality",
      value: 7000,
    },
    {
      month: "Oct",
      type: "Predict",
      value: 10000,
    },
    {
      month: "Oct",
      type: "Reality",
      value: 7000,
    },
    {
      month: "Nov",
      type: "Predict",
      value: 10000,
    },
    {
      month: "Nov",
      type: "Reality",
      value: 7000,
    },
    {
      month: "Dec",
      type: "Predict",
      value: 10000,
    },
    {
      month: "Dec",
      type: "Reality",
      value: 7000,
    },
  ];

  const config = {
    data,
    xField: "month",
    yField: "value",
// yField:null,
    seriesField: "type",
    isGroup: true,

    columnStyle: {
      radius: [20, 20, 0, 0],
      //   strokeSetX: "red",
      //   strokeSetY: "gray",
      colorField: "type", // or seriesField in some cases
      color: ["#19CDD7", "#DDB27C"],
    },
  };

  return <Column {...config} style={{ width: "900px" }} />;
};
