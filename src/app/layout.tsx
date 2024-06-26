import "./globals.css";

import * as stylex from "@stylexjs/stylex";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { registerNumeralLocale } from "../lib/registerNumeralLocale";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  registerNumeralLocale();

  return (
    <html lang="en">
      <body {...stylex.props(styles.TemplateStyles)}>
        <Navbar />
        <div {...stylex.props(styles.TemplateFrame)}>
          <div {...stylex.props(styles.AppContainer)}>
            <Header />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

const styles = stylex.create({
  TemplateStyles: {
    display: "flex",
    position: "relative",
    height: "100%",
    background: "#1A1A1A",
  },
  TemplateFrame: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    height: "100vh",
    position: "static",
  },
  AppContainer: {
    flex: "1 1 0",
    display: "flex",
    flexDirection: "column",
  },
});
