import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useHaloStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        cursor: "pointer",
        marginBottom: theme.spacing(4),
        fontFamily: "Inter, sans-serif",
    },
    defaultAvatar: {
        height: 32,
        width: 32,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: theme.typography.fontSize + 4,
        color: theme.design.colors.waz_white,
        background: theme.design.colors.waz_orange,
    },
    headerImage: {
        width: "100%",
        height: "560px",
        objectFit: "cover",
    },
    avatarImage: {
        position: "absolute",
        top: 0,
        height: "100%",
        width: "100%",
        borderRadius: "50%",
        objectFit: "cover",
    },
    heroOverlay: {
        height: "100%",
        zIndex: "1",
        width: "100%",
        position: "absolute",
        top: "0px",
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
    },
    overlayContainer: {
        position: "relative",
    },
    heroContainer: {
        zIndex: "10",
    },
    heroItems: {
        position: "absolute",
        top: "340px",
        left: "63px",
        zIndex: "2",
        width: "80%",
        [theme.breakpoints.down("md")]: {
            top: "340px",
            right: "30%",
            marginLeft: theme.spacing(-3),
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(-5),
            left: "30%",
            top: "370px",
        },
    },
    tags: {
        display: "flex",
        flexDirection: "row",
        color: theme.design.colors.waz_white,
    },
    tag: {
        color: theme.design.colors.waz_white,
        margin: theme.spacing(0.5),
    },
    title: {
        fontSize: theme.typography.fontSize + 24,
        fontFamily: "Inter, sans-serif",
        width: "100%",
        color: theme.design.colors.waz_white,
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.fontSize * 2,
            lineHeight: "36px",
        },
    },
    titleContainer: {
        [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(-7),
        },
    },
    authorName: {
        fontSize: theme.design.colors.waz_white + 2,
        width: "116px",
        lineHeight: "19px",
        fontWeight: theme.typography.fontWeightBold,
        textTransform: "uppercase",
        color: theme.design.colors.waz_white,
    },
    authorInfo: {
        zIndex: "100",
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
    },
    circleIcon: {
        width: "5px",
        height: "5px",
        background: theme.design.colors.waz_white,
        borderRadius: "50%",
        marginBottom: theme.spacing(0.2),
    },
    date: {
        color: theme.design.colors.waz_white,
    },
    body: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1.5),
        width: "60%",
        margin: "auto",
        padding: theme.spacing(2),
        marginTop: theme.spacing(3),
        position: "relative",
        [theme.breakpoints.down("md")]: {
            width: "90%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
        },
    },
    postContent: {
        lineHeight: "32px",
    },
    topSocialIcon: {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: `1px solid ${theme.design.colors.waz_grey300}`,
        margin: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
    },
    bottomSocialIcon: {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: `1px solid ${theme.design.colors.waz_grey300}`,
        margin: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
    },
    topSocialIconsContainer: {
        position: "absolute",
        top: "30px",
        left: "-15%",
        margin: theme.spacing(1),
        marginTop: theme.spacing(-4),
    },
    icon: {
        marginTop: theme.spacing(0.7),
    },
    authorDetails: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(3),
    },
    avatar: {
        width: "56px",
        height: "56px",
        margin: "0 auto",
    },
    authorText: {
        fontSize: theme.typography.fontSize + 2,
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.design.colors.waz_grey100,
        LineHeight: "15px",
        textAlign: "center",
    },
    authorNameInfo: {
        color: theme.design.colors.waz_black,
        fontSize: theme.typography.fontSize + 2,
        lineHeight: "19px",
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    bottomSocialIconsContainer: {
        display: "flex",
        flexDirection: "row",
    },
    avatarContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: theme.spacing(-2),
    },
    horizontalLine: {
        width: "32%",
        height: "1px",
        marginTop: theme.spacing(5),
        marginRight: theme.spacing(-2),
        backgroundColor: theme.design.colors.waz_black,
        [theme.breakpoints.down("md")]: {
            width: "200px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginTop: theme.spacing(-0.5),
        },
    },
    relatedPostsLine: {
        marginTop: theme.spacing(2),
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginLeft: theme.spacing(10),

        [theme.breakpoints.down("lg")]: {
            display: "flex",
            justifyContent: "center",
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: theme.spacing(-5),
        },
    },
    relatedPostsTitle: {
        marginRight: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.fontSize + 2,
            width: "100px",
            marginLeft: theme.spacing(-5),
            marginTop: theme.spacing(-2),
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: theme.spacing(-5),
            marginRight: theme.spacing(0),
        },
    },
    relatedPostsHeader: {
        maxWidth: "75%",
        margin: "0 auto",
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(3),
    },
    relatedArticleContainer: {
        [theme.breakpoints.down("md")]: {
            width: "100%",
            marginTop: theme.spacing(7),
        },
    },
    relatedPotsContainer: {
        maxWidth: "80%",
        width: "80%",
        margin: "0 auto",
    },
    name: {
        textAlign: "center",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(0.5),
        fontSize: theme.typography.fontSize + 3,
    },
    relatedPostHeadingContainer: {
        display: "flex",
        flexDirection: "row",
        width: "58%",
        margin: "auto",
    },
    hr: {
        height: "1px",
        width: "70%",
        backgroundColor: theme.design.colors.waz_black,
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(-3),
        [theme.breakpoints.down("md")]: {
            width: "190%",
            marginRight: theme.spacing(-12),
            marginTop: theme.spacing(1),
        },
        [theme.breakpoints.down("sm")]: {
            width: "60%",
            marginRight: theme.spacing(-9),
            marginTop: theme.spacing(1),
        },
    },
    relatedPostsHeading: {
        width: "20%",
        fontSize: theme.typography.fontSize + 4,
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.down("md")]: {
            width: "83%",
            marginLeft: theme.spacing(-5),
            marginRight: 0,
        },
        [theme.breakpoints.down("sm")]: {
            width: "65%",
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        defaultAvatar: {
            height: 32,
            width: 32,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: theme.typography.fontSize + 4,
            color: theme.design.colors.waz_white,
            background: theme.design.colors.waz_orange,
        },
    },
}));
