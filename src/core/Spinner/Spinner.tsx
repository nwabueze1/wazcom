import clx from 'classnames';
import { RiLoader4Line } from "react-icons/ri";
import { SpinnerProps } from "./types";
import { useSpinnerStyles } from "./styles";


export const Spinner = ({ variant }: SpinnerProps) => {
    const classes = useSpinnerStyles({ variant });
    const _className = clx(
        variant === 'primary' ? classes.contained :
            variant === 'secondary' ? classes.outlined : classes.default
    );

    return (
        <span className={classes.root}>
            <RiLoader4Line className={_className} />
        </span>
    )
}