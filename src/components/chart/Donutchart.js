import React, { Fragment, useState } from 'react'
import { Chart } from 'react-google-charts'

const descriptions = {
  Work: "You work 9 hours per day.",
  Eat: "Time for meals.",
  Commute: "Daily commute time.",
  "Watch TV": "Leisure time watching TV.",
  Sleep: "Sleep duration.",
};

const Donutchart = () => {
      const [selected, setSelected] = useState(null);
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

    const options = {
        // title: "My Daily Activities",
        pieHole: 0.4, // Creates a Donut Chart. Does not do anything when is3D is enabled
        is3D: true, // Enables 3D view
        // slices: {
        //   1: { offset: 0.2 }, // Explodes the second slice
        // },
        pieStartAngle: 100, // Rotates the chart
        sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
        legend: {
            position: "bottom",
            alignment: "center",
            textStyle: {
                color: "#233238",
                fontSize: 14,
            },
        },
        colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"],
    };
    return (
        <Fragment>
            <div style={{ maxWidth: 900, margin: "auto", textAlign: "center" }}>
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"515px"}
                />
                {selected && (
                    <div style={modalStyles.overlay}>
                        <div style={modalStyles.modal}>
                            <h2>{selected}</h2>
                            <p>{descriptions[selected]}</p>
                            <button onClick={() => setSelected(null)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default Donutchart

const modalStyles = {
  title: "My Daily Activities",
  is3D: true, // Enables 3D view
  pieHole: 0.4, // Will be ignored if is3D is set to true
  slices: {
    1: { offset: 0.2 }, // Explodes the second slice
  },
  pieStartAngle: 10, // Rotates the chart
  sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
  legend: {
    position: "bottom",
    alignment: "center",
  },
  colors: ["#AFCBFF", "#C2E0C6", "#D8A7B1", "#FFC107", "#D3D3D3"],
};