import React, { Component } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Tooltip, LabelList,
} from 'recharts';

const data = [
  {
    "name": "Support",
    "value": 37.24
  },
  {
    "name": "Tank",
    "value": 25.89
  },
  {
    "name": "DPS",
    "value": 36.88
  }
];

export default class LineDemo extends React.Component {
  render(){
    return (
      <PieChart width={350} height={250}>
      <Tooltip />
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#f8932b" label={{ fill: '#fff'}} paddingAngle >
        </Pie>
      </PieChart>
      );
  }
}