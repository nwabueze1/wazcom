import { CorePageFields } from "types/CorePageFields";
import { CoreSiteFields } from "types/CoreSiteFields";
import { CorePostFields } from "types/CorePostFields";

export type CoreArticleTemplateFields = CommonProps & {
  article: CorePostFields;
  page?: CorePageFields;
  site?: CoreSiteFields;
  domain: string;
  handleClick?: (route: string) => void;
};

export type CommonProps = {
  className?: string;
};
