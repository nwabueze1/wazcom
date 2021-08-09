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
import ZxBreadCrumb from "./pages/ZxBreadcrumbs/ZxBreadCrumb";
import Selector from "./pages/Selector/Selector";
import { path } from "./pages/ZxBreadcrumbs/mock";

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginExtend()],
});

interface Props {
  className?: string;
}

const App: React.FC<Props> = () => {
  const taskList = ["Reaxt", "Recta", "RAect"];
  return (
    <CssBaseline>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/">{/* <Home /> */}</Route>
            </Switch>

            <Route exact path="/breadcrumb">
              <ZxBreadCrumb path={path} />
            </Route>
            <Route path="/selector">
              <Selector
                items={taskList}
                styles={{ borderRadius: "10px", width: "200px" }}
              />
              <Selector
                items={taskList}
                styles={{ borderRadius: "10px", width: "200px" }}
              />
              ;
            </Route>
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </CssBaseline>
  );
};
export default App;
