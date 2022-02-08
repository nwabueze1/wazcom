import React, {FC} from "react";
import { LayoutProps } from "./types";
import NavBar from "../NavBar/NavBar";
import { navData } from "Templates/Temp2/Pages/Template2Data";
import { Footer } from "../Footer/Footer";

const Layout: FC<LayoutProps> = ({ children, navHeader}) => {
  return (
    <>
      <NavBar navHeader={navHeader} navData={navData}/>
      <main>{children}</main>
      <Footer navHeader={navHeader} />
    </>
  );
};
export default Layout;
