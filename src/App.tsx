import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BlogArticle004 } from "Templates/Blog/Articles/BlogArtcle004/BlogArticle004";
import { BlogArticle003 } from "Templates/Blog/Articles/BlogArticle003/BlogArticle003";
import { articleData } from "utilities/data";
import { Browser } from "view/Browser";
import theme from "./theme";
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
            <Route exact path="/temp1">
              <BlogArticle003 article={articleData} domain="" />
            </Route>
            <Route exact path="/temp">
              <BlogArticle004 article={articleData} domain="" />
            </Route>
            <Route exact path="/">
              <Browser />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default App;
