import { ApolloError } from "@apollo/client";
import { notify } from "./notify";

export const errorHandler = (error: ApolloError, key?: string) => {
    if (error.graphQLErrors) {
        error.graphQLErrors.map(({ extensions, message }) => {
            if (extensions?.validation) {
                if (key && (extensions as any)?.validation?.[key as string][0])
                    return notify(
                        "error",
                        (extensions as any)?.validation?.[key as string][0] ?? "",
                    );
                Object.entries(extensions.validation).map(([, messages]: any) =>
                    messages.map((message: string) => notify("error", message)),
                );
                return null;
            } else if (extensions?.reason) {
                return notify("error", (extensions as any)?.reason ?? "");
            } else {
                let parsedMessage = message;

                if (parsedMessage?.toLowerCase()?.includes("invalid email or password"))
                    parsedMessage = "Incorrect User Credentials";

                return notify("error", parsedMessage);
            }
        });
    }
    return key;
};
