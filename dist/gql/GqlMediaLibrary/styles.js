var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { styled } from "@mui/system";
import makeStyles from "@mui/styles/makeStyles";
export var useMediaLibraryStyles = makeStyles(function (theme) { return ({
    "@keyframes a": {
        "0%, 50%": {
            transform: "scale(0)",
        },
    },
    root: {
        width: "100%",
    },
    collection: {
        display: "flex",
        flexWrap: "wrap",
        gap: theme.spacing(1),
        padding: theme.spacing(1, 4),
    },
    column: {
        display: "flex",
        width: "calc((100% - 16px)/3)",
        flexDirection: "column",
    },
    timesIcon: {
        color: "#999F9B",
        cursor: "pointer",
        fontSize: theme.typography.fontSize + 4,
    },
    thumbnail: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        marginBottom: theme.spacing(1),
        cursor: "pointer",
    },
    thumbnailOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transition: "opacity 0.3s ease-in",
        opacity: 0,
        background: "rgba(255, 255, 255, 0.3)",
        "&:hover": {
            opacity: 1,
        },
    },
    thumbnailActions: {
        position: "absolute",
        top: "12px",
        right: "6px",
        display: "flex",
    },
    thumbnailAction: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
        background: theme.design.colors.waz_white,
        borderRadius: 4,
        marginRight: theme.spacing(1),
        cursor: "pointer",
    },
    thumbnailActionIcon: {
        fontSize: 14,
        color: "#999F9B",
    },
    image: {
        height: "100%",
        objectFit: "cover",
    },
    loading: {
        height: 40,
        opacity: 0.9,
    },
    dialogue: {
        width: "100% !important",
    },
    dot: {
        background: theme.design.colors.waz_black,
        "&, &:after": {
            display: "inline-block",
            width: "2em",
            height: "2em",
            borderRadius: "50%",
            animation: "a 1.5s calc(((var(--i) + var(--o, 0))/var(--n) - 1)*#{1.5s}) infinite",
        },
        "&:after": {
            background: "tomato",
            content: '""',
        },
    },
    loaderParent: {
        position: "relative",
        margin: theme.spacing(2, 0),
    },
    loader: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: "transparent",
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        marginBottom: theme.spacing(3),
        padding: theme.spacing(3, 4),
    },
    tabs: {
        display: "flex",
        cursor: "pointer",
    },
    iconContainer: {
        width: "59%",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: theme.spacing(3, 2, 2, 0),
        display: "flex",
        justifyContent: "flex-end",
        flex: 1,
    },
    uploadViewWidth: {
        width: "100%",
    },
    tab: {
        color: theme.design.colors.waz_primaryColor100,
        paddingBottom: 2,
        borderBottom: "2px solid ".concat(theme.design.colors.waz_primaryColor100),
    },
    wrapper: {
        width: "100%",
        backgroundColor: theme.design.colors.waz_white,
        borderRadius: theme.spacing(1),
        maxHeight: "70vh",
        overflow: "scroll",
        zIndex: 15,
        scrollBehavior: "smooth",
        "-ms-overflow-style": "none" /* for Internet Explorer, Edge */,
        scrollbarWidth: "none" /* for Firefox */,
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
    selectorTab: {
        fontSize: theme.typography.fontSize + 4,
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.design.colors.waz_grey1,
        padding: theme.spacing(2, 5),
        background: theme.design.colors.waz_white,
        borderRight: "1px solid ".concat(theme.design.colors.waz_grey5),
    },
    inActive: {
        background: theme.design.colors.waz_grey6,
        borderBottom: "1px solid ".concat(theme.design.colors.waz_grey5),
    },
    wrapperDialog: {
        height: "100%",
        maxHeight: "unset",
    },
    error: {
        left: 0,
        top: 0,
        width: "25%",
        background: theme.design.colors.waz_white,
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
    },
    searchContainer: {
        width: "30%",
        position: "relative",
        // padding: theme.spacing(0, 0, 0, 4),
    },
    dialogueView: {
        height: "calc(100% - 82px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    button: {
        background: theme.design.colors.waz_white,
        color: theme.design.colors.waz_greenishGrey2,
        border: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
        "&:hover": {
            color: theme.design.colors.waz_white,
        },
    },
    textInput: {
        "&>div": {
            padding: theme.spacing(0, 3),
        },
    },
    content: {
        width: "80%",
        margin: theme.spacing(5, "auto"),
        padding: theme.spacing(8, 0),
        border: "1px dashed ".concat(theme.design.colors.grey40),
    },
    search: {
        background: theme.design.colors.shainGrey,
    },
    searchParent: {
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        position: "relative",
    },
    actionsContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        margin: "auto",
    },
    noDisplay: {
        display: "none",
    },
    viewOnlyActions: {
        padding: 0,
        border: "none",
    },
    filter: {
        position: "relative",
    },
    filterTitle: {
        width: "90%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
    },
    filterText: {
        color: theme.design.colors.greene,
        cursor: "pointer",
        fontWeight: theme.typography.fontWeightMedium,
    },
    filterParent: {
        paddingTop: theme.spacing(2.5),
        width: 228,
        background: theme.design.colors.waz_white,
        borderRadius: "6px",
        boxShadow: "0px 3px 5px rgba(52, 62, 55, 0.2)",
        position: "absolute",
        visibility: "hidden",
        opacity: 0,
        transition: "all 0.6s ease-in-out",
    },
    showFilter: {
        visibility: "visible",
        opacity: 1,
        zIndex: 3,
    },
    sortParent: {
        width: 120,
        borderRadius: "6px",
        background: theme.design.colors.waz_white,
        boxShadow: "0px 4px 20px rgba(77, 86, 80, 0.16)",
        position: "absolute",
        visibility: "hidden",
        opacity: 0,
        transition: "all 0.6s ease-in-out",
    },
    sort: {
        width: "90%",
        padding: theme.spacing(2, 0, 0, 1.5),
    },
    showSort: {
        opacity: 1,
        visibility: "visible",
        zIndex: 10,
    },
    sortType: {
        display: "flex",
        alignItems: "center",
    },
    orientationType: {
        display: "flex",
        alignItems: "center",
    },
    btnContainer: {
        display: "flex",
        gap: theme.spacing(4),
    },
    searchIcon: {
        position: "absolute",
        color: theme.design.colors.waz_mercury,
        top: "16px",
        left: "10px",
    },
    radioButton: {
        "& .Mui-checked": {
            color: theme.design.colors.greene,
        },
    },
    layouts: {
        display: "flex",
    },
    activeLayout: {
        backgroundColor: theme.design.colors.waz_grey5,
    },
    twoColumn: {
        width: "calc((100% - 32px)/2)",
    },
    fourColumn: {
        width: "calc((100% - 32px)/4)",
    },
}); });
export var StyledModal = styled(ModalUnstyled)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 1300;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: fixed;\n  z-index: 1300;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
export var Backdrop = styled("div")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: -1;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-tap-highlight-color: transparent;\n"], ["\n  z-index: -1;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-tap-highlight-color: transparent;\n"])));
var templateObject_1, templateObject_2;
