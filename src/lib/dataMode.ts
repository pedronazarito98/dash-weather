import iconCalories from "../app/assets/iconCalories.svg";
import iconCarbs from "../app/assets/iconCarbs.svg";
import iconFat from "../app/assets/iconFat.svg";
import iconProtein from "../app/assets/iconProtein.svg";

export const DataCards = [
  {
    id: 1,
    title: "Avg Calories",
    value: Math.floor(Math.random() * 3000 + 1000),
    percent: parseFloat((Math.random() * 15 + 5).toFixed(2)),
    icon: iconCalories,
  },
  {
    id: 2,
    title: "Avg Proteins",
    value: Math.floor(Math.random() * 3000 + 1000),
    percent: parseFloat((Math.random() * 15 + 5).toFixed(2)),
    icon: iconProtein,
  },
  {
    id: 3,
    title: "Avg Carbs",
    value: Math.floor(Math.random() * 3000 + 1000),
    percent: parseFloat((Math.random() * 15 + 5).toFixed(2)),
    icon: iconCarbs,
  },
  {
    id: 4,
    title: "Avg Fat",
    value: Math.floor(Math.random() * 3000 + 1000),
    percent: parseFloat((Math.random() * 15 + 5).toFixed(2)),
    icon: iconFat,
  },
];
