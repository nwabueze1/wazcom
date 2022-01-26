import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import { Categories } from "./Pages/Categories/Categories";
import { ArticlePage } from "./Pages/ArticlePage/ArticlePage";

const Template2 = () => {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/template2/article">
            <Layout navheader={"Yumchef Recipes"}>
              <ArticlePage />
            </Layout>
          </Route>
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
