import React from "react";
import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "view/Layout";
import theme from "./theme";
import routes from "./routes";
import "./index.css";
import { AlertContextProvider } from "core";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const App: React.FC = () => {
  // const getMbmcBlocks = useGetMbmcBlocks();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              {routes.map(({ key, path, component: Component }) => {
                return <Route key={key} path={path} element={<Component />} />;
              })}
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default App;
