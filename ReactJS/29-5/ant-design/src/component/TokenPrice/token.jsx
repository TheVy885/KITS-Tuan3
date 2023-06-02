import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
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
    name: "12:00",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "1:00",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2:00",
    uv: 2000,
    pv: 9850,
    amt: 2290,
  },
  {
    name: "3:00",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "4:00",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "5:00",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "6:00",
    uv: 3490,
    pv: 9300,
    amt: 2100,
  },
  {
    name: "7:00",
    uv: 3490,
    pv: 6900,
    amt: 2100,
  },
  {
    name: "8:00",
    uv: 3490,
    pv: 6300,
    amt: 2100,
  },
  {
    name: "9:00",
    uv: 3490,
    pv: 3000,
    amt: 2100,
  },
  {
    name: "10:00",
    uv: 3490,
    pv: 7000,
    amt: 2100,
  },
  {
    name: "11:00",
    uv: 3490,
    pv: 5500,
    amt: 2100,
  },
];

class TokenPrice extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart width={500} height={300} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor="#9747FF" stopOpacity={0.5} />
              <stop offset="100%"  stopColor="#14F4C9" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3 " />
          <XAxis dataKey="name" />
          <YAxis axisLine={0} />
          <Tooltip />
          <Legend />

          <Line
            dot={0}
            strokeWidth={6}
            type="monotone"
            dataKey="pv"
            stroke="url(#colorUv)"
            
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default TokenPrice;
