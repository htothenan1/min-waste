"use client"

import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart({ wastedCounter, itemsCounter }) {
  const data = {
    labels: ["Fully Consumed", "With Waste"],
    datasets: [
      {
        label: "# of Items",
        data: [itemsCounter, wastedCounter],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  }
  return <Pie data={data} />
}
