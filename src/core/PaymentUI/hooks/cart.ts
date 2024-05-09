import { useSelector } from "react-redux";
import { TemplateState } from "../types";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const useRecordCartAction = () => {
    const { page } = useSelector<TemplateState, TemplateState>((state) => ({
      page: state?.page,
    }));
  
    return (block_uuid: string, cart_action: string) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cartActionTrigger",
        site_uuid: page?.site?.uuid,
        block_uuid,
        cart_action,
        template: "chowfood",
      });
    }
}
  