import { responseClient } from "../../responseClient";
import { Create_Response } from "../Create_Response";
import { CreateResponseClientType } from "../../type";

export const createResponse = async (
  { client, mutation }: CreateResponseClientType,
  form_uuid: string,
  answers: Record<string, any>,
) =>
  await (client ?? responseClient).mutate({
    mutation: mutation ?? Create_Response,
    variables: {
      form_uuid,
      response: answers,
    },
  });
