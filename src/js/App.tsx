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

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginExtend()],
});

interface Props {
  className?: string;
}

const App: React.FC<Props> = () => {
  return (
    <CssBaseline>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path={"/"}>
                <ZxBreadCrumb
                  path={[
                    { label: "Home", path: "/abcd" },
                    { label: "Pricing", path: "./" },
                    { label: "Pricing", path: "./" },
                    { label: "Pricing", path: "./" },
                  ]}
                />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </CssBaseline>
  );
};
export default App;
