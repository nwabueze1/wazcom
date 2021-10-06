import { createContext, useState, ReactNode } from "react";
import Cookies from "universal-cookie";
import { Spinner } from "./Common/Spinner/Spinner";

let load = false;
type UserType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at: boolean;
  avatar: string;
};

const initial = {
  site: "",
  user: {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    email_verified_at: false,
    avatar: "",
  },
  setSite: (site_id: string) => {
    initial.site = site_id;
  },
  changeUser: (user: UserType) => {
    initial.user = user;
  },
  changeLoading: (loading: boolean) => {
    load = loading;
  },
};

export const AppStateContext = createContext(initial);

function AppStateProvider({ children }: { children: ReactNode }) {
  // app state
  const cookies = new Cookies();
  const [site, setSite] = useState(cookies.get("site_id"));
  const userFromCookie = cookies.get("user") ?? {};
  const [user, setUser] = useState(userFromCookie);
  const [loading, setLoading] = useState(load);

  return (
    <AppStateContext.Provider
      value={{
        site,
        user: user,
        setSite: (site_id: string) => {
          setSite(site_id);
          cookies.set("site_id", site_id, {
            path: "/",
          });
        },
        changeUser: (user: any) => {
          setUser(user);
        },
        changeLoading: (loading: boolean) => {
          setLoading(loading);
        },
      }}
    >
        {children}
      <Spinner opacity={loading ? 100 : 0} />
    </AppStateContext.Provider>
  );
}

export default AppStateProvider;
