import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [

  {
    name: 'Bank',
    uv: 2.5,
    pv: 2400,
    fill: '#F3BA2F',
  },
  {
    name: 'Token',
    uv: 2,
    pv: 4567,
    fill: '#54C2C1',
  },
  {
    name: 'Stock',
    uv: 1.5,
    pv: 1398,
    fill: '#0F0F3F',
  },
  {
    name: 'Cash',
    uv: 0.8,
    pv: 9800,
    fill: '#9020E9',
  },
 
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

class MoneyAllocation extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

  render() {
    return (
      <ResponsiveContainer width="50%" height={550} >
        <RadialBarChart startAngle={90} endAngle={450} cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" barSize={20} data={data}>
          <RadialBar
            minAngle={15}
            // label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10}  layout="vertical" verticalAlign="bottom" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
export default MoneyAllocation;
