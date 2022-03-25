import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import { Categories } from "./Pages/Categories/Categories";
import { ArticlePage } from "./Pages/ArticlePage/ArticlePage";
import { articleData } from "./Pages/Template2Data";

const Template2 = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/template2/article">
            <Layout navHeader={"Yumchef Recipes"}>
              <ArticlePage articleProps={articleData} />
            </Layout>
          </Route>
          <Route path="/template2/categories">
            <Layout navHeader={"Yumchef Recipes"}>
              <Categories />
            </Layout>
          </Route>
          <Route path="/template2/">
            <Layout navHeader={"Yumchef Recipes"}>
              <HomePage />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Template2;
