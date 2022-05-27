import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { WrapperPie } from "./pieChart.styles";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ chart }) => {
  const data = {
    labels: Object.keys(chart),
    datasets: [
      {
        data: Object.values(chart),
        backgroundColor: ["#A259FF", "#FFC107", "#F24E1E", "#6497B1"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };
  return (
    <WrapperPie>
      <Doughnut data={data} />
    </WrapperPie>
  );
};
export default PieChart;
