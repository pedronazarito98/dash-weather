"use client";

import Image from "next/image";
import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../globalCSS.stylex";
import numeral from "numeral";

export interface CardInterface {
  id?: string;
  icon?: string;
  title?: string;
  value?: number;
  percent?: number;
  children?: ReactNode;
}

export const Card = ({
  title,
  value,
  percent,
  children,
  icon,
}: CardInterface) => {
  return (
    <div {...stylex.props($.container)}>
      {!children && (
        <>
          <p {...stylex.props($.titleStyle)}>{title}</p>
          <p {...stylex.props($.subTitleStyle)}>
            {numeral(value).format("0[,]0")}
          </p>
          <p {...stylex.props($.staticStyle)}>
            <span {...stylex.props($.spanStyle)}>
              {" "}
              {numeral(percent).format("0[,]0")}%{" "}
            </span>
            last day
          </p>
          {icon && <Image alt="" src={icon} {...stylex.props($.icon)} />}
        </>
      )}

      {children && children}
    </div>
  );
};

const $ = stylex.create({
  container: {
    width: "300px",
    padding: "8px 16px",
    display: "flex",
    borderRadius: "10px",
    position: "relative",
    flexDirection: "column",
    backgroundColor: "#212121",
  },

  titleStyle: {
    color: colors.primaryText,
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  subTitleStyle: {
    fontSize: "18px",
    marginBottom: "8px",
    color: colors.secondaryText,
  },
  staticStyle: {
    fontSize: "10px",
    marginBottom: "8px",
    color: colors.primaryText,
  },
  spanStyle: {
    color: " #31A643",
  },
  icon: {
    top: 16,
    right: 16,
    width: "30px",
    height: "30px",
    position: "absolute",
  },
});
