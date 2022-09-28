import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useEditMediaStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        gap: theme.spacing(3),
        height: 480,
        // marginBottom: theme.spacing(1),
    },
    image: {
        width: "60%",
        height: "100%",
        objectFit: "cover",
    },
    tab: {
        color: theme.design.colors.waz_dangerColor300,
        paddingBottom: 2,
        borderBottom: `2px solid ${theme.design.colors.waz_dangerColor300}`,
        width: "fit-content",
        marginBottom: theme.spacing(3),
    },
    form: {
        width: "calc(40% - 24px)",
    },
    formControl: {
        marginBottom: theme.spacing(3),
    },
    formButtons: {
        display: "flex",
        gap: theme.spacing(3),
    },
}));
