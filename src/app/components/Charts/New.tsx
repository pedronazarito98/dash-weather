import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

export const WeightLossGoal = ({ current, goal }) => {
  const data = {
    datasets: [
      {
        data: [current, goal - current],
        backgroundColor: ["#00cc99", "#ddd"],
        borderColor: ["#00cc99", "#ddd"],
        borderWidth: 1,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  // Plugin to add additional text inside the chart
  const plugins = [
    {
      id: "text",
      beforeDraw: (chart) => {
        const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;

        ctx.restore();
        let fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        const text = `${current} lb / ${goal} lb`,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

        ctx.fillText(text, textX, textY);

        ctx.fillStyle = "red";
        fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";

        const subtext = `Keep it up 👍 You are on track to lose ${
            goal - current
          } lb`,
          subtextX = Math.round((width - ctx.measureText(subtext).width) / 2),
          subtextY = height * 0.65; // Adjust this value as needed

        ctx.fillText(subtext, subtextX, subtextY);
        ctx.save();
      },
    },
  ];

  return (
    <div style={{ position: "relative", width: "250px", height: "125px" }}>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          cutout: "70%",
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },

            subtitle: {
              display: true,
              text: `${current} lb / ${goal} lb`,
              color: "black",
              font: {
                size: 24,
                family: "Helvetica Neue",
              },
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};
