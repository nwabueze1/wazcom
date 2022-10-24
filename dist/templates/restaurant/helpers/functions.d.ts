import { Option } from "../Buzz/CartDialog";
import { CoreCartItemFields } from "../types/CoreCartItemFields";
import { CoreMenuFields } from "../types/CoreMenuFields";
export declare const calculateOptionsTotal: (options: Option[], quantity: number) => number;
export declare const parseOptionString: (item: CoreCartItemFields) => string;
export declare const findMenuItem: (menus: CoreMenuFields[], itemId: number) => any;
