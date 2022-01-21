import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { BlogPage } from "./Pages/BlogPage/BlogPage";
import Contact from "./Pages/Contact-us/Contact";
import DishesPage from "./Pages/DishesPage/DishesPage";
import { HomePage } from "./Pages/HomePage/HomePage";
import { RebaseStory } from "./Pages/ReBaseStory/RebaseStory";
import { BlogImage, BlogText, BlogTitle } from "./TemplateData";

const Template1 = () => {
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
            <Layout navheader={"Rebase Chef"}>
              <DishesPage />
            </Layout>
          </Route>
          <Route path="/templates/contact">
            <Layout navheader={"Rebase Chef"}>
              <Contact />
            </Layout>
          </Route>
          <Route path="/templates/blog">
            <Layout navheader={"Rebase Chef"}>
              <BlogPage
                title={BlogTitle}
                content={BlogText}
                image={{
                  src: BlogImage.src,
                  alt: BlogImage.alt,
                }}
              />
            </Layout>
          </Route>
          <Route path="/templates/story">
            <Layout navheader={"Rebase Chef"}>
              <RebaseStory />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Template1;
