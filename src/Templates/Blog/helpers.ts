import { CorePostFields } from "types/CorePostFields";
import { CoreSiteFields } from "types/CoreSiteFields";

export const useDefaultAvatar = (site?: CoreSiteFields) => {
  return (
    site?.user &&
    site?.user?.firstname?.charAt(0).toUpperCase() +
      site?.user?.lastname.charAt(0).toUpperCase()
  );
};
