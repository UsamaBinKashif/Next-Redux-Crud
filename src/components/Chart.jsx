import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart() {
  const myData = useSelector((state) => state.data.data);

  const data = {
    labels: ["USER DATA"],
    datasets: [
      {
        label: ["TASKS CAPACITY"],
        data: [myData.length,100],
        backgroundColor: ["#07bc0c", "#FFFFFF"],
        borderColor: ["#FFFFFF", "#FFFFFF"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-[400px] self-center">
      <h1 className="sm:text-2xl text-xl font-medium text-center  text-white mb-4">
        CHART
      </h1>
      <Doughnut data={data} />
    </div>
  );
}
