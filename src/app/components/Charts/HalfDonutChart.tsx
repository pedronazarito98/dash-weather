import * as stylex from "@stylexjs/stylex";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
interface HalfDonutChartProps {
  current: number;
  goal: number;
}

export const HalfDonutChart = ({ current, goal }: HalfDonutChartProps) => {
  const data = {
    datasets: [
      {
        data: [current, goal - current],
        backgroundColor: ["#00cc99", "#2B4A3F"],
        borderColor: ["#00cc99", "#2B4A3F"],
        borderWidth: 1,
        circumference: 180,
        rotation: 270,
      },
    ],
  };
  const plugins = [
    {
      id: "text",
      afterDatasetsDraw: (chart: any) => {
        const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        console.log("🚀 ~ HalfDonutChart ~ height:", height);

        ctx.restore();
        let fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        const text = `${current} lb / ${goal} lb`,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height;

        ctx.fillText(text, textX, textY);

        ctx.fillStyle = "red";
        fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";

        const subtext = `Keep it up 👍 You are on track to lose ${
            goal - current
          } lb`,
          subtextX = Math.round((width - ctx.measureText(subtext).width) / 2),
          subtextY = height; // Adjust this value as needed

        ctx.fillText(subtext, subtextX, subtextY);
        ctx.save();
      },
    },
  ];
  return (
    <div {...stylex.props(styles.container)}>
      <Doughnut
        data={data}
        plugins={plugins}
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
              text: `${current} kg / ${goal} kg`,
              color: "#53F0B8",
              font: {
                size: 18,
              },
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};

const styles = stylex.create({
  container: {
    position: "relative",
  },
});
