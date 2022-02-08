import React, { FC } from "react";
import { LayoutProps } from "./types";
import { navData } from "Templates/Temp4/TemplateData";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar";

export const Layout: FC<LayoutProps> = ({ children, navHeader }) => {
  return (
    <>
      <NavBar navHeader={navHeader} navData={navData} />
      {children}
      <Footer />
    </>
  );
};
