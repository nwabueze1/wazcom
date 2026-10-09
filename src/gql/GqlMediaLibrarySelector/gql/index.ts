import { CONNECT_INSTAGRAM_ACCOUNT, createApolloClient } from "../../../helpers/graphQL";
import { connectInstagramAccountVariables } from "../types";

export const gqlConnectInstagramAccount = async (variables: connectInstagramAccountVariables) =>
  await createApolloClient("https://ploutonion.sytbuilder.com").mutate({
    mutation: CONNECT_INSTAGRAM_ACCOUNT,
    variables,
  });
