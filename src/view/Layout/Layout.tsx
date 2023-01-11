import { BsBellFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import CssBaseline from "@mui/material/CssBaseline";
import { FC, useState } from "react";
import { TextInput } from "../../io";
import sidebarItems from "../../stories/sidebarItems"
import { SidebarListItem } from "./Sidebar/SidebarItems";
import { useLayoutStyles } from "./styles";
import { LayoutProps } from "./types";

export const Layout: FC<LayoutProps> = ({ children }) => {
    const classes = useLayoutStyles();
    const [search, setSearch] = useState("");

    return (
        <div className={classes.container}>
            <CssBaseline />
            <div className={classes.drawer}>
                <div className={classes.logo}>
                    <span className={classes.title}>WAZCOM</span>
                </div>
                <div className={classes.sidebarList}>
                    <SidebarListItem sections={sidebarItems} />
                </div>
            </div>
            <div className={classes.appBarWrapper}>
                <div className={classes.appBarComponents}>
                    <TextInput
                        name={'search'}
                        placeholder={'Search...'}
                        type={'search'}
                        width={480}
                        height={40}
                        leftIcon={<FiSearch size={'20px'} />}
                        iconSpacing={5}
                        background={'#F9F9F9'}
                        borderColor={'#F9F9F9'}
                        onChange={({ value }: { name: string; value: any }) => {
                            setSearch(value);
                        }}
                        value={search}
                        className={classes.searchBox}
                    />
                    <div className={classes.notificationWrapper}>
                        <BsBellFill className={classes.notoficationIcon} />
                    </div>
                </div>
            </div>
            <div className={classes.main}>
                {children}
            </div>
        </div >
    );
};
