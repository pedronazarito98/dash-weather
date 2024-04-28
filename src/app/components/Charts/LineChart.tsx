import { Line } from "react-chartjs-2";
import {
  Title,
  Filler,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
} from "chart.js";

ChartJS.register(
  Title,
  Filler,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale
);

export const LineChart = () => {
  const labels = ["January", "February", "March", "April", "May"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: "#53F0B8",
        backgroundColor: "#2B4A3F",
        tension: 0.5,
      },
    ],
  };

  return (
    <Line
      style={{ height: "250px" }}
      height={250}
      data={data}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};
