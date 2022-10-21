import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Blaise, Noir } from "templates/footers";
import { Asta } from "templates/restaurant/Asta/Asta";
import { Browser } from "view/Browser";
import theme from "./theme";
declare module "@mui/styles/defaultTheme" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}
interface Props {
    className?: string;
}

// items: [
//     {
//         title: "Company",
//         links: [
//             { text: "About us", url: "" },
//             { text: "About us", url: "" },
//             { text: "About us", url: "" },
//             { text: "About us", url: "" },
//         ],
//     },
//     {
//         title: "Services",
//         links: [
//             { text: "About us", url: "" },
//             { text: "About us", url: "" },
//             { text: "About us", url: "" },
//             { text: "About us", url: "" },
//         ],
//     },
//     {
//         title: "Contact Us",
//         links: [
//             { text: "About us", url: "" },
//             { text: "About us", url: "" },
//             { text: "About us", url: "" },
//             { text: "About us", url: "" },
//         ],
//     },
// ],

const navProps = {
    links: [
        { text: "Gallery", url: "/" },
        { text: "Categories", url: "http://www.leke.com" },
        { text: "About", url: "/" },
    ],
    logo: {
        src: "https://ik.imagekit.io/uwaknajbdrm/https:/img.vt.co/2022/10/GrandmaFOI-1024x534.jpg?ik-sdk-version=react-1.1.0&tr=w-288",
        url: "https://www.facebook.com",
        text: "the heart of tech",
    },
    handleClick: (route: string) => {
        // alert(route);
    },
    items: [
        { text: "Info", url: "" },
        { text: "Support", url: "" },
        { text: "Marketing", url: "" },
        { text: "Contact Us", url: "" },
        { text: "Privacy Policy", url: "" },
    ],
    socials: [
        { type: "FACEBOOK", url: "https://www.facebook.com" },
        { type: "TWITTER", url: "https://www.twitter.com" },
        { type: "YOUTUBE", url: "https://www.twitter.com" },
        { type: "LINKEDIN", url: "https://www.twitter.com" },
    ],
};

const App: React.FC<Props> = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Browser />
                        </Route>
                        <Route exact path="/noir">
                            <Blaise
                                {...navProps}
                                mode="edit"
                                socials={[
                                    { type: "FACEBOOK", url: "https://www.facebook.com" },
                                    { type: "TWITTER", url: "https://www.twitter.com" },
                                    { type: "YOUTUBE", url: "https://www.twitter.com" },
                                    { type: "LINKEDIN", url: "https://www.twitter.com" },
                                    { type: "INSTAGRAM", url: "https://www.twitter.com" },
                                ]}
                            />
                        </Route>
                        <Route exact path="/asta">
                            <Asta />
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};
export default App;
