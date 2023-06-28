import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const data = [
  {
    name: "06 March",
    uv: 4,
    pv: 24,
    amt: 2400,
  },
  {
    name: "07 March",
    uv: -3,
    pv: 138,
    amt: 2210,
  },
  {
    name: "08 March",
    uv: -2,
    pv: -98,
    amt: 2290,
  },
  {
    name: "09 March",
    uv: 2,
    pv: 39,
    amt: 2000,
  },
//   {
//     name: "Page E",
//     uv: -1,
//     pv: 48,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2,
//     pv: -38,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3,
//     pv: 43,
//     amt: 2100,
//   },
];

class Profit extends PureComponent {
 
  render() {
    return (
      <ResponsiveContainer width="50%" height="50%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#4FB5C9" />
          <Bar dataKey="uv" fill="#F05D5E" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default Profit