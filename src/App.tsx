import React from "react";
import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Blaise } from "templates";
import { Valour } from "templates/Navs";
import { Asta } from "templates/restaurant/Asta/Asta";
import { Layout } from "view/Layout";
import theme from "./theme";
import routes from "./routes";
import "./index.css";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const navProps: any = {
  linksss: [
    { text: "Gallery", url: "/" },
    { text: "Categories", url: "http://www.leke.com" },
    { text: "About", url: "/" },
  ],
  logo: {
    src: "https://ik.imagekit.io/uwaknajbdrm/https:/img.vt.co/2022/10/GrandmaFOI-1024x534.jpg?ik-sdk-version=react-1.1.0&tr=w-288",
    url: "https://www.facebook.com",
    text: "the heart of tech",
  },
  handleClick: () =>
    // route: string
    {
      // alert(route);
    },
  items: [
    {
      name: "Company",
      links: [
        { text: "About us", url: "" },
        { text: "About us", url: "" },
        { text: "About us", url: "" },
      ],
    },
    {
      name: "Services",
      links: [
        { text: "About us", url: "" },
        { text: "About us", url: "" },
        { text: "About us", url: "" },
      ],
    },
    {
      name: "Contact Us",
      links: [
        { text: "About us", url: "" },
        { text: "About us", url: "" },
        { text: "About us", url: "" },
      ],
    },
  ],
  // items: links,
  socials: [
    { type: "FACEBOOK", url: "https://www.facebook.com" },
    { type: "TWITTER", url: "https://www.twitter.com" },
    { type: "YOUTUBE", url: "https://www.twitter.com" },
    { type: "LINKEDIN", url: "https://www.twitter.com" },
  ],
};

const App: React.FC = () => {
  // const getMbmcBlocks = useGetMbmcBlocks();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              {routes.map(({ key, path, component: Component }) => (
                <Route key={key} path={path} element={<Component />} />
              ))}
              {/* {getMbmcBlocks()
                .sort(({ name: aName }, { name: bName }) =>
                  aName.toLowerCase() < bName.toLowerCase()
                    ? -1
                    : aName.toLowerCase() > bName.toLowerCase()
                    ? 1
                    : 0,
                )
                .map(({ name, component: Comp, props }, index) => (
                  <Route
                    key={index}
                    path={`/templates/:uuid/${name.split("").join("")}`}
                    element={React.cloneElement(<Comp />, props)}
                  />
                ))} */}
              <Route
                path="/nour"
                element={
                  <Valour
                    {...navProps}
                    mode="edit"
                    socials={[
                      { type: "FACEBOOK", url: "wwww" },
                      { type: "TWITTER", url: "wwww" },
                    ]}
                  />
                }
              />
              <Route path="/sevyn" element={<Blaise mode="edit" {...navProps} />} />
              <Route path="/asta" element={<Asta />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default App;
