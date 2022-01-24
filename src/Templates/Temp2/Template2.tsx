import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import { Hero } from "./Component/Hero/Hero";
import HomePage from "./Pages/HomePage/HomePage";
import { Categories } from "./Pages/Categories/Categories";

const Template2 = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/template2/categories">
            <Layout navheader={"Yumchef Recipes"}>
              <Categories />
            </Layout>
          </Route>
          <Route path="/template2/">
            <Layout navheader={"Yumchef Recipes"}>
              <HomePage />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Template2;
