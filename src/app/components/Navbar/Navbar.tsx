import * as stylex from "@stylexjs/stylex";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div {...stylex.props($.container)}>
      <Link {...stylex.props($.linkStyle)} href="#">
        Home
      </Link>
    </div>
  );
};
const $ = stylex.create({
  container: {
    background: "#212121",
    display: "flex",
    flexDirection: "column",
    width: "180px",
    padding: "8px 10px",
  },
  linkStyle: {
    background: "#51e7b042",
    padding: "8px 10px",
  },
});
