"use client";

import Image from "next/image";
import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../globalCSS.stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import iconSetting from "../../assets/iconSettings.svg";

interface CardGlobalInterface {
  title?: string;
  edit?: boolean;
  children?: ReactNode;
  style?: StyleXStyles;
}

export const CardGlobal = ({
  edit,
  title,
  children,
  style,
}: CardGlobalInterface) => {
  return (
    <div {...stylex.props($.container, style)}>
      <div {...stylex.props($.grid)}>
        {title && <p {...stylex.props($.titleStyle)}>{title}</p>}
        {edit && (
          <div {...stylex.props($.icon)}>
            <Image alt="" src={iconSetting} {...stylex.props($.image)} />
          </div>
        )}
      </div>
      {children && children}
    </div>
  );
};

const $ = stylex.create({
  container: {
    padding: "16px",
    display: "flex",
    borderRadius: "10px",
    flexDirection: "column",
    backgroundColor: "#212121",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleStyle: {
    color: colors.secondaryText,
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  },

  image: {
    width: "20px",
    height: "20px",
  },

  icon: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    cursor: {
      ":hover": "pointer",
    },

    backgroundColor: {
      default: "transparent",
      ":hover": "#41414196",
    },
  },
});
