import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Layout } from "Templates/Temp4/Component/Layout";
import { Menu } from "./Pages/Menu/Menu";
import { categoriesTab, DishesData } from "./TemplateData";
import { ContactUs } from "./Pages/ContactUs/ContactUs";
import { AboutUs } from "./Pages/AboutUs/AboutUs";

export const Template4 = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/template4">
            <Layout navHeader={"Logo"}>
              <HomePage />
            </Layout>
          </Route>
          <Route path="/template4/menu">
            <Layout navHeader={"Logo"}>
              <Menu categoriesTabs={categoriesTab} dishesData={DishesData}/>
            </Layout>
          </Route>
          <Route path="/template4/contact-us">
            <Layout navHeader={"Logo"}>
              <ContactUs/>
            </Layout>
          </Route>
          <Route path="/template4/about-us">
            <Layout navHeader={"Logo"}>
              <AboutUs/>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
