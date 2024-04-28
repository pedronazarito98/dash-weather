import Image from "next/image";
import * as stylex from "@stylexjs/stylex";

export const Header = () => {
  return (
    <nav {...stylex.props($.container)}>
      <Image src={""} alt="" />
      <ul {...stylex.props($.listStyle)}>
        <li {...stylex.props($.listItem)}>
          <a href="">Home</a>
        </li>
      </ul>
    </nav>
  );
};

const $ = stylex.create({
  container: {
    background: "#1A1A1A",
    display: "flex",
    width: "100%",
    padding: "8px 10px",
    marginBottom: 16,
  },

  listStyle: {
    marginLeft: "auto",
  },
  listItem: {
    display: "inline",
  },
});
