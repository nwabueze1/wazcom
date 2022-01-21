import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Temp1/Components/Layout/Layout";
import Contact from "./Temp1/Pages/Contact-us/Contact";
import DishesPage from "./Temp1/Pages/DishesPage/DishesPage";
import { HomePage } from "./Temp1/Pages/HomePage/HomePage";

const Templates = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/templates/">
            <Layout navheader={"Rebase Chef"}>
              <HomePage />
            </Layout>
          </Route>
          <Route path="/templates/menu">
            <Layout  navheader={"Rebase Chef"}>
              <DishesPage />
            </Layout>
          </Route>
          <Route path="/templates/contact">
            <Layout  navheader={"Rebase Chef"}>
              <Contact />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Templates;
