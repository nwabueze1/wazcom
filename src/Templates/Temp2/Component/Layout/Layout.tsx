import React, {FC} from "react";
import { LayoutProps } from "./types";
import NavBar from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

const Layout: FC<LayoutProps> = ({ children, navheader}) => {
  return (
    <>
      <NavBar navheader={navheader} />
      <main>{children}</main>
      <Footer navheader={navheader} />
    </>
  );
};
export default Layout;
