var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Modal } from "@mui/base";
import { styled } from "@mui/system";
import makeStyles from "@mui/styles/makeStyles";
export var useMediaLibraryStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        "@keyframes a": {
            "0%, 50%": {
                transform: "scale(0)",
            },
        },
        root: {
            width: "100%",
        },
        base: {
            height: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
        },
        container: {
            borderRadius: 4,
        },
        collection: {
            display: "flex",
            flexWrap: "wrap",
            gap: theme.spacing(1),
            padding: theme.spacing(2.5, 0, 2.5, 3),
            minHeight: "65vh",
        },
        column: {
            display: "flex",
            width: "calc((100% - 32px)/3)",
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
            background: "rgba(0, 0, 0, 0.5)",
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
            borderRadius: "50%",
            background: theme.design.colors.waz_greenishGrey2,
            marginRight: theme.spacing(1),
            cursor: "pointer",
        },
        thumbnailActionIcon: {
            fontSize: 14,
            color: theme.design.colors.waz_white,
        },
        image: {
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
        },
        tabs: {
            display: "flex",
            cursor: "pointer",
        },
        hiddenContent: {
            position: "relative",
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
            overflowY: "auto",
            "&::-webkit-scrollbar": {
                width: 10,
                background: "rgba(0,0,0,0.05)",
            },
            "&::-webkit-scrollbar-thumb": {
                background: "rgba(0,0,0,0.25)",
            },
            "&::-webkit-scrollbar-track": {
                background: "rgba(0,0,0,0.01)",
            }
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 246,
        },
        selectorSearchBox: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: theme.spacing(3, 3, 0, 3),
        },
        selectorSearch: (_a = {
                width: "30%",
                marginBottom: 0
            },
            _a[theme.breakpoints.down("lg")] = {
                width: "50%",
            },
            _a),
        dialogueView: {
            height: "calc(100% - 82px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        },
        button: {
            background: theme.design.colors.waz_white,
            border: "1px solid ".concat(theme.design.colors.waz_primary100),
            color: theme.design.colors.grey100,
            display: "flex",
            gap: theme.spacing(0.5),
            borderRadius: "6px",
            padding: theme.spacing(1, 1.5),
            fontSize: theme.typography.fontSize + 4,
            lineHeight: "21px",
            "&:hover": {
                border: "1px solid ".concat(theme.design.colors.waz_primary100),
                background: theme.design.colors.primary700,
            },
        },
        textInput: {
            margin: 0,
            borderRadius: 0,
            border: "none",
            paddingLeft: 0,
            "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
                borderRadius: 0,
                paddingLeft: 0,
                width: "100%",
            },
        },
        content: {
            width: "80%",
            margin: theme.spacing(5, "auto"),
            padding: theme.spacing(8, 0),
            border: "1px dashed ".concat(theme.design.colors.waz_mercury),
        },
        search: {
            background: theme.design.colors.shainGrey,
            margin: 0,
            width: "100%",
        },
        actionsContainer: {
            background: theme.design.colors.waz_white,
            width: "100%",
            margin: "auto",
            padding: theme.spacing(3),
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
            flex: 1,
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
        selectorContainer: {
            padding: theme.spacing(1, 2),
            borderRadius: theme.spacing(0.5),
            border: "1px solid ".concat(theme.design.colors.waz_primary1000),
            display: "flex",
            justifyContent: "space-between",
            marginTop: theme.spacing(2),
            "&::after": {
                content: "''",
                display: "block",
            },
            "&.instagram::after": {
                display: "none",
            },
            "&.instagram": {
                justifyContent: "center",
            },
        },
        sortParent: {
            width: 152,
            borderRadius: "6px",
            background: theme.design.colors.waz_white,
            boxShadow: "0px 4px 20px rgba(77, 86, 80, 0.16)",
            position: "absolute",
            top: 40,
            left: 24,
            visibility: "hidden",
            opacity: 0,
            transition: "all 0.6s ease-in-out",
            "&:before": {
                position: "absolute",
                top: "-20px",
                right: "60px",
                display: "block",
                content: "''",
                border: "11px solid #fff",
                borderRightColor: "transparent",
                borderLeftColor: "transparent",
                borderTopColor: "transparent",
            },
        },
        sort: {
            width: "90%",
            padding: theme.spacing(2, 0, 0, 1.5),
        },
        sortText: {
            fontSize: theme.typography.fontSize,
            fontFamily: theme.typography.fontFamily,
            display: "flex",
            color: theme.design.colors.waz_primaryBlack,
            gap: theme.spacing(1),
            cursor: "pointer",
            justifyContent: "space-between",
            alignItems: "center",
        },
        dropDownIcon: {
            fontSize: theme.typography.fontSize,
        },
        showSort: {
            opacity: 1,
            visibility: "visible",
            zIndex: 10,
        },
        icon: {
            width: 10,
        },
        sortType: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: theme.design.colors.waz_grey600,
            gap: theme.spacing(1),
            padding: theme.spacing(1, 2),
        },
        orientationType: {
            display: "flex",
            alignItems: "center",
        },
        btnContainer: {
            display: "flex",
            gap: theme.spacing(4),
            borderRadius: 4,
            border: "1px solid ".concat(theme.design.colors.waz_primary700),
            background: theme.design.colors.waz_white100,
            width: 187,
            height: 34,
            alignItems: "center",
            padding: theme.spacing(0, 1),
        },
        radioButton: {
            "& .Mui-checked": {
                color: theme.design.colors.greene,
            },
        },
        modalLoader: {
            top: "50%",
            position: "absolute",
            zIndex: 9999,
        },
        doneIcon: {
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightBold,
        },
        activeSort: {
            color: theme.design.colors.black200,
        },
        layouts: (_b = {
                display: "flex",
                alignItems: "center",
                gap: theme.spacing(2),
                padding: theme.spacing(0, 3)
            },
            _b[theme.breakpoints.down("md")] = {
                display: "none",
            },
            _b),
        activeLayout: {
            backgroundColor: theme.design.colors.waz_primary800,
            borderRadius: 2,
        },
        twoColumn: {
            width: "calc((100% - 32px)/2)",
        },
        fourColumn: {
            width: "calc((100% - 48px)/4)",
        },
        mediaTab: {
            display: "flex",
            gap: theme.spacing(1),
            alignItems: "center",
            cursor: "pointer",
            padding: theme.spacing(1, 2),
            borderRadius: 300,
            border: "1px solid ".concat(theme.design.colors.waz_primary600),
            width: "max-content",
            "&.active": {
                background: theme.design.colors.waz_primaryColor700,
            },
        },
        mediaTabIcon: {
            fontSize: theme.typography.fontSize + 8,
            display: "flex",
            "&.active>.pexel": {
                fill: theme.design.colors.waz_white,
            },
        },
        mediaTabs: {
            display: "flex",
            padding: theme.spacing(1),
            gap: theme.spacing(1.2),
            borderRadius: theme.spacing(0.5),
            background: theme.design.colors.waz_grey6,
            border: "1px solid ".concat(theme.design.colors.waz_primary600),
            width: "max-content",
        },
        tabName: {
            color: theme.design.colors.waz_grey500,
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightMedium,
            fontFamily: theme.typography.fontFamily,
            "&.active": {
                color: theme.design.colors.waz_white,
            },
        },
        activeMediaTab: {
            borderBottom: "2px solid ".concat(theme.design.colors.waz_primary100),
        },
        searchIcon: {
            fontSize: theme.typography.fontSize + 8,
            color: theme.design.colors.waz_primaryBlack,
        },
        emptyContainer: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "60vh",
            justifyContent: "center",
            alignItems: "center",
        },
        emptyText: {
            fontSize: theme.typography.fontSize + 2,
        },
        addMedia: {
            position: "relative",
            marginTop: theme.spacing(4),
        },
        addBtn: {
            width: "fit-content",
            padding: theme.spacing(1, 2),
            fontSize: theme.typography.fontSize + 2,
            margin: theme.spacing(1.5, 0),
        },
        header: {
            background: theme.design.colors.waz_white,
            padding: theme.spacing(2),
            marginBottom: theme.spacing(1),
        },
    });
});
export var StyledModal = styled(Modal)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    z-index: 1300;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"], ["\n    position: fixed;\n    z-index: 1300;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])));
export var Backdrop = styled("div")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    z-index: -1;\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    -webkit-tap-highlight-color: transparent;\n"], ["\n    z-index: -1;\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    -webkit-tap-highlight-color: transparent;\n"])));
var templateObject_1, templateObject_2;
