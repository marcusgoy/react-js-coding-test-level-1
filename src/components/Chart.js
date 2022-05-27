import React from "react";
import classes from "./Chart.module.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PureComponent } from "react";

function chart(props) {
    const data = props.data
    const xAxis = props.xAxis
    const yAxis = props.yAxis

  return (
    <div className={classes.chart}>
      <ResponsiveContainer width="100%" aspect={3}>
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
          {/* <Legend /> */}
          <Bar dataKey="name" fill="#8884d8" />
          <Bar dataKey="stat" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default chart;
