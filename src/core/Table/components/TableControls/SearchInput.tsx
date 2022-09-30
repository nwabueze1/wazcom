import { IoIosSearch } from "react-icons/io";
import { useTableControlsStyles } from "./styles";
import { SearchInputProps } from "./types";

export const SearchInput: React.FC<SearchInputProps> = ({
    onChange,
    placeholder,
    className,
    value,
    type,
    name,
}) => {
    const classes = useTableControlsStyles();
    return (
        <div className={classes.controlsInputField}>
            <IoIosSearch className={classes.searchIcon} />
            <input
                onChange={onChange}
                placeholder={placeholder}
                className={className}
                value={value}
                type={type}
                name={name}
            />
        </div>
    );
};
