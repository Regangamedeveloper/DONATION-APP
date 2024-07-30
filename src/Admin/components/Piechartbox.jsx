import React from 'react'
import './piechart.scss';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const data = [
  { name: "Housing", value: 400, color: "#0088FE" },
  { name: "Food", value: 300, color: "#00C49F" },
  { name: "Security", value: 200, color: "#FF8042" },
];

const Piechartbox = () => {
  return (
    <div className="pieChartBox">
      <h1 style={{
        fontSize:'18px',
      }}>Campaigns</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={200}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Piechartbox;