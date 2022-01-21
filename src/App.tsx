import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";

import BlogPost from "./BlogPost/BlogPost";

import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import Main from "BlogPage/main/main";
import { Navbar } from "blog_template3/Navbar/Component";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

interface Props {
  className?: string;
}

const App: React.FC<Props> = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/template">
              <BlogPost />
            </Route>
            <Route path="/blogpost">
              <Main />
            </Route>
            <Route path="/navbar">
              <Navbar/>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default App;
