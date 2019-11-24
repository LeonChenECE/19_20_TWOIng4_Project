import React, { Component } from 'react';
import {
  LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line,
} from 'recharts';

const data = [
  {
    "name": "9. Sep",
    "Bronze": 0.93,
    "Argent": 0.55,
    "Or": 0.54,
    "Platine": 0.65 ,
    "Diamant": 0.66,
    "Maître": 0.96,
    "Grand-Maître": 0.5,
    "amt": 2400
  },
  {
    "name": "23. Sep",
    "Bronze": 0.9,
    "Argent": 0.52,
    "Or": 0.67,
    "Platine": 0.71,
    "Diamant": 0.74,
    "Maître": 0.95,
    "Grand-Maître": 0.8,    
    "amt": 2210
  },
  {
    "name": "7. Oct",
    "Bronze": 0.61,
    "Argent": 0.68,
    "Or": 0.69,
    "Platine": 0.8,
    "Diamant": 1.02,
    "Maître": 0.92,
    "Grand-Maître": 0.49,
    "amt": 2290
  },
  {
    "name": "21. Oct",
    "Bronze": 1.51,
    "Argent": 1.32,
    "Or": 1.69,
    "Platine": 2.08,
    "Diamant": 2.58,
    "Maître": 2.97,
    "Grand-Maître": 2.78,
    "amt": 2000
  },
  {
    "name": "4. Nov",
    "Bronze": 1.03,
    "Argent": 0.96,
    "Or": 1.34,
    "Platine": 1.49,
    "Diamant": 2.09,
    "Maître": 2.15,
    "Grand-Maître": 2.52,
    "amt": 2181
  },
  {
    "name": "18. Nov",
    "Bronze": 0.96,
    "Argent": 1.08,
    "Or": 1.24,
    "Platine": 1.47,
    "Diamant": 1.68,
    "Maître": 1.42,
    "Grand-Maître": 2.17,
    "amt": 2500
  }
]

export default class LineDemo extends React.Component {
	render(){
		return (
			<LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend/>
  <Line type="monotone" dataKey="Bronze" stroke="#D9805F" />
  <Line type="monotone" dataKey="Argent" stroke="#8C8B88" />
  <Line type="monotone" dataKey="Or" stroke="#FFCC59" />
  <Line type="monotone" dataKey="Platine" stroke="#D9D9D9" />
  <Line type="monotone" dataKey="Diamant" stroke="#4EE6DE" />
  <Line type="monotone" dataKey="Maître" stroke="#FFB40C" />
  <Line type="monotone" dataKey="Grand-Maître" stroke="#FFE9BD" />
</LineChart>
			);
	}
}