import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import { Hero } from "./Component/Hero/Hero";
import HomePage from "./Pages/HomePage/HomePage";

const Template2 = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/templates2/">
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
