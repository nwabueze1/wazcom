import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage } from "Templates/Temp5/Pages/About/About";
import { CategoryPage } from "Templates/Temp5/Pages/Categories/Post";
import IndexPage from "Templates/Temp5/Pages/Jaden's Blog/IndexPage";
import { Gallery } from "./Pages/Gallery/GalleryPage";
const Template5 = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/template5">
            <IndexPage />
          </Route>
          <Route path="/template5/gallery">
            <Gallery />
          </Route>
          <Route path="/template5/categories">
            <CategoryPage />
          </Route>
          <Route path="/template5/about">
            <AboutPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Template5;
