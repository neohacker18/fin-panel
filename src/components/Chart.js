import React from 'react'
import { LineChart, Line,CartesianGrid,XAxis,YAxis } from 'recharts';


const Chart = () => {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
  return (
    <div style={{backgroundColor:"white"}}>
        <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    </div>
  )
}

export default Chart