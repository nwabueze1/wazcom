import * as Yup from "yup";
import { QuestionType } from "./type";
export declare const buildValidationSchema: (questions: QuestionType[]) => Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, Record<any, any>>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, Record<any, any>>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, Record<any, any>>>>;
