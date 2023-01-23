import { Button as MuiButton, CircularProgress } from "@mui/material";
import { ButtonProps } from "./types";
import { useButtonStyles } from "./styles";

export const Button = ({
    className,
    variant = "contained",
    loading,
    children,
    ...props
}: ButtonProps) => {
    const classes = useButtonStyles();

    return (
        <div className={classes.root}>
            <MuiButton
                id="button-selector"
                classes={{
                    root: `${classes.button} ${className}`,
                    sizeLarge: classes.sizeLarge,
                }}
                variant={variant}
                {...props}
            >
                {loading && <CircularProgress color="inherit" size={12} className={classes.buttonLoader} />}
                {children}
            </MuiButton>
        </div>
    );
};
