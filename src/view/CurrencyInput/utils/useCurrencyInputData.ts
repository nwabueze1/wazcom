import { ComponentPropsType } from "../../../core/ComponentProps/types";
export const useCurrencyInputData = () => {
  const data: Partial<ComponentPropsType>[] = [
    {
      name: "name",
      description: "The name of the input",
      default: "undefined",
    },
    {
      name: "currency",
      description: "The currency used. eg usd, cad, ngn",
      default: "undefined",
      }, {
        name: "The label",
        description: "The label of the input",
          default:"undefined"
      }, {
        name: "errors",
          description:""
    }
  ];
};
