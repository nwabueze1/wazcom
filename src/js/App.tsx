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
import theme from "../theme";
import Toggle from "../components/Toggle/Toggle";
import ZxBreadCrumb from "../components/ZxBreadcrumbs/ZxBreadCrumb";
import { paths } from "../components/ZxBreadcrumbs/mock";

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
              <Route exact path="/toggle">
                <Toggle />
              </Route>
              <Route exact path="/breadcrumb">
                <ZxBreadCrumb paths={paths} />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </CssBaseline>
  );
};
export default App;
