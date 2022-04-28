import makeStyles from "@mui/styles/makeStyles";
export var useEmptyStateStyles = makeStyles(function (theme) {
  return {
    root: {
      width: "100%",
      boxShadow: "0",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    menus: {
      display: "flex",
    },
    modal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 239,
      objectFit: "cover",
    },
    text: {
      padding: theme.spacing(5, 0, 4, 0),
      fontSize: theme.typography.fontSize + 4,
      color: theme.design.colors.black,
      whiteSpace: "nowrap",
    },
    btn: {
      background: theme.design.colors.primary100,
      fontSize: theme.typography.fontSize + 4,
      fontWeight: theme.typography.fontWeightMedium,
      "&:hover": {
        backgroundColor: theme.design.colors.primary100,
      },
    },
  };
});
