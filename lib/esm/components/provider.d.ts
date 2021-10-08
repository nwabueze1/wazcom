import { ReactNode } from "react";
declare type UserType = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    email_verified_at: boolean;
    avatar: string;
};
export declare const AppStateContext: import("react").Context<{
    site: string;
    user: {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        email_verified_at: boolean;
        avatar: string;
    };
    setSite: (site_id: string) => void;
    changeUser: (user: UserType) => void;
    changeLoading: (loading: boolean) => void;
}>;
declare function AppStateProvider({ children }: {
    children: ReactNode;
}): JSX.Element;
export default AppStateProvider;
