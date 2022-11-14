import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Blaise } from "templates";
import { useGetMbmcBlocks } from "templates/mbmc/mbmc";
import { Valour } from "templates/Navs";
import { Asta } from "templates/restaurant/Asta/Asta";
import { Mbmc } from "templates/restaurant/Mbmc/Mbmc";
import { Browser } from "view/Browser";
import { Templates } from "view/Templates";
import theme from "./theme";
declare module "@mui/styles/defaultTheme" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}
interface Props {
    className?: string;
}

const links = [
    { text: "About us", url: "" },
    { text: "About us", url: "" },
    { text: "About us", url: "" },
    { text: "About us", url: "" },
    { text: "About us", url: "" },
    { text: "About us", url: "" },
];

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

const App: React.FC<Props> = () => {
    const getMbmcBlocks = useGetMbmcBlocks();

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Browser />
                        </Route>
                        {getMbmcBlocks()
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
                                    exact
                                    path={`/templates/:uuid/${name.split("").join("")}`}
                                >
                                    {React.cloneElement(<Comp />, props)}
                                </Route>
                            ))}
                        <Route exact path="/nour">
                            <Valour
                                {...navProps}
                                mode="edit"
                                socials={[
                                    { type: "FACEBOOK", url: "wwww" },
                                    { type: "TWITTER", url: "wwww" },
                                ]}
                            />
                        </Route>
                        <Route path="/sevyn">
                            <Blaise mode="edit" {...navProps} />
                        </Route>
                        <Route exact path="/asta">
                            <Asta />
                        </Route>
                        <Route exact path="/mbmc">
                            <Mbmc />
                        </Route>
                        <Route exact path="/blocks">
                            <Templates />
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};
export default App;
