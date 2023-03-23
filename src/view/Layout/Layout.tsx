import { BsBellFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { FC, useState } from "react";
import { TextInput } from "../../io";
import sidebarItems from "../../stories/sidebarItems";
import { SidebarListItem } from "./Sidebar/SidebarItems";
import { useLayoutStyles } from "./styles";
import { LayoutProps, SearchResult } from "./types";
import { useNavigate } from "react-router-dom";

const extractSidebarNameAndSlug = sidebarItems.reduce((result: SearchResult, { components }) => {
  const extractNameAndSlug = components.map((item) => ({ name: item.name, slug: item.slug }));
  return result.concat(extractNameAndSlug);
}, []);

export const Layout: FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const classes = useLayoutStyles();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchResult>([]);

  const handleSearchResult = (value: string) => {
    if (value.length === 0) {
      setSearchResult([]);
      return;
    }
    const result = extractSidebarNameAndSlug.filter((item) =>
      item.name.toLowerCase().includes(value.toLocaleLowerCase()),
    );

    setSearchResult([...result]);
  };

  return (
    <>
      <SidebarListItem
        sections={sidebarItems}
        isOpen={toggleSidebar}
        onClose={() => setToggleSidebar(false)}
      />
      <div className={classes.root}>
        <div className={classes.appBarWrapper}>
          <div className={[classes.logo, classes.logoTop].join(" ")}>
            <button
              className={classes.menuButton}
              onClick={() => {
                setToggleSidebar(true);
              }}
            >
              <BiMenu />
            </button>
            <h2 className={classes.logoTitle}>WAZCOM</h2>
          </div>
          <div className={classes.appBarComponents}>
            <div className={classes.appBarSearch}>
              <TextInput
                name={"search"}
                placeholder={"Search..."}
                type={"search"}
                width="100%"
                height="100%"
                leftIcon={<FiSearch size={"20px"} />}
                iconSpacing={5}
                background={"#F9F9F9"}
                borderColor={"#F9F9F9"}
                onChange={({ value }: { name: string; value: any }) => {
                  handleSearchResult(value);
                }}
                className={classes.searchBox}
              />
              {searchResult.length > 0 && (
                <ul className={classes.appSearchBox}>
                  {searchResult.map((item) => (
                    <li
                      className={classes.appSearchBoxList}
                      key={item.name}
                      onClick={() => {
                        setSearchResult([]);
                        navigate(item.slug);
                      }}
                    >
                      <span className={classes.appSearchBoxItem}>{item.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button type="button" className={classes.notificationButton}>
              <BsBellFill className={classes.notificationIcon} />
            </button>
          </div>
        </div>
        <main className={classes.main}>{children}</main>
      </div>
    </>
  );
};
