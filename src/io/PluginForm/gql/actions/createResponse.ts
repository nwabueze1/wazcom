import { responseClient } from '../../responseClient';
import { Create_Response } from '../Create_Response';

export const createResponse = async (
  form_uuid: string,
  answers: Record<string, any>
) =>
  await responseClient.mutate({
    mutation: Create_Response,
    variables: {
      form_uuid,
      response: answers,
    },
  });
