import { CorePageFields } from "templates/blog/types/CorePageFields";
import { CoreSiteFields } from "templates/blog/types/CoreSiteFields";
import { CorePostFields } from "templates/blog/types/CorePostFields";
export declare type CoreArticleTemplateFields = CommonProps & {
    article: CorePostFields;
    page?: CorePageFields;
    site?: CoreSiteFields;
    domain: string;
    handleClick?: (route: string) => void;
};
export declare type CommonProps = {
    className?: string;
};
