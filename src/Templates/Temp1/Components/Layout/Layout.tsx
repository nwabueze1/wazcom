import React, {FC} from "react";
import { LayoutProps } from "./types";
import NavBar from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

const Layout: FC<LayoutProps> = ({ children, navHeader}) => {
  return (
    <>
      <NavBar navHeader={navHeader} />
      <main>{children}</main>
      <Footer navHeader={navHeader} />
    </>
  );
};
export default Layout;
