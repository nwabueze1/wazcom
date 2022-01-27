import React, {FC} from "react";
import { LayoutProps } from "./types";
import NavBar from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

const Layout: FC<LayoutProps> = ({ children, navHeader}) => {
  return (
    <>
      <NavBar navheader={navHeader} />
      <main>{children}</main>
      <Footer navheader={navHeader} />
    </>
  );
};
export default Layout;
