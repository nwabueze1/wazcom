import { FC, useCallback } from "react";
import { Card as MuiCard, CardActions, CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardProps } from "./types";
import { Button } from "..";
import { useCardStyles } from "./styles";
import clx from "classnames";

export const Card: FC<CardProps> = ({
    className,
    title,
    content,
    image: { src, alt },
    buttons,
    align = "left",
}) => {
    const classes = useCardStyles();
    const displayButtons = useCallback(() => {
        return buttons?.values?.map((value, index) => (
            <Button key={index} size={buttons?.size ?? "small"}>
                {value}
            </Button>
        ));
    }, [buttons]);

    const getAlignVariant = useCallback(() => {
        let variantClass;

        switch (align) {
            case "left":
                variantClass = classes.leftAlign;
                break;
            case "center":
                variantClass = classes.centerAlign;
                break;
            case "right":
                variantClass = classes.rightAlign;
                break;
            default:
                variantClass = classes.leftAlign;
        }

        return variantClass;
    }, [align]);

    return (
        <MuiCard className={clx(classes.root, className, getAlignVariant())}>
            <CardMedia component="img" height="140" image={src} alt={alt} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">{content}</Typography>
            </CardContent>
            <CardActions>{displayButtons()}</CardActions>
        </MuiCard>
    );
};
