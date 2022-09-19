import { CorePageFields } from "templates/blog/types/CorePageFields";
import { CoreSiteFields } from "templates/blog/types/CoreSiteFields";
export declare type CoreArticleTemplateFields = CommonProps & {
    article: any;
    page?: CorePageFields;
    site?: CoreSiteFields;
    domain: string;
    handleClick?: (route: string) => void;
};
export declare type CommonProps = {
    className?: string;
};
