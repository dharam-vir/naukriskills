import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};
const LineChart = () => {
    return (
        <div>
            <Chart
                chartType="LineChart"
                width="100%"
                height="100%"
                data={data}
                options={options}
                legendToggle
            />
        </div>
    )
}

export default LineChart