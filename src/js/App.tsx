import CssBaseline from "@material-ui/core/CssBaseline";
import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { create } from "jss";
import jssPluginExtend from "jss-plugin-extend";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
<<<<<<< HEAD
import { Home } from "./pages";
import { Tab } from "./pages/Tab/Tab";
=======

import Toggle from "./pages/Toggle/Toggle";

import Home from "./pages/Home";
import Selector from "./pages/Selector/Selector";
import ButtonGuide from "./pages/ButtonGuide/ButtonGuide";
import TextField from "./pages/Textfield/TextField";
import { StyleGuide } from "./pages/StyleGuide/StyleGuide";
import { Typography } from "../js/pages/Typography/Typography";
import ZxBreadCrumb from "./pages/ZxBreadcrumbs/ZxBreadCrumb";
import { paths } from "./pages/ZxBreadcrumbs/mock";
import Page from "../js/pages/Page/Page";
>>>>>>> develop

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginExtend()],
});

interface Props {
  className?: string;
}

const App: React.FC<Props> = () => {
<<<<<<< HEAD
  const arr = ["a", "b", "c", "d", "e", "f"];
=======
  const taskList = ["Reaxt", "Recta", "RAect"];
>>>>>>> develop
  return (
    <CssBaseline>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
<<<<<<< HEAD
              <Route path="/">
=======
              <Route exact path="/">
>>>>>>> develop
                <Home />
              </Route>
              <Route exact path="/textfields">
                <TextField />
              </Route>
              <Route exact path="/pagination">
                <Page />
              </Route>
              <Route exact path="/buttonguide">
                <ButtonGuide />
              </Route>
              <Route exact path="/toggle">
                <Toggle />
              </Route>
              <Route exact path="/breadcrumb">
                <ZxBreadCrumb paths={paths} />
              </Route>
            </Switch>
<<<<<<< HEAD
            <Route path="/tabs">
              <Tab label="Solo" arr={arr} />
=======
            <Route path="/selector">
              <Selector
                items={taskList}
                styles={{ borderRadius: "10px", width: "200px" }}
              />
              <Selector
                items={taskList}
                styles={{ borderRadius: "10px", width: "200px" }}
              />
            </Route>
            <Route path="/styleguide/colors">
              <StyleGuide />
            </Route>
            <Route path="/styleguide/typography">
              <Typography />
>>>>>>> develop
            </Route>
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </CssBaseline>
  );
};
export default App;
