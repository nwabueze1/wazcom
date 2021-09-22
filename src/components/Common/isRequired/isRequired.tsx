import React from "react";
import { useStyles } from "./styles";
interface IsRequiredProps {
  error?: boolean;
  errorMessage?:string;
  name?: string;
}
export const IsRequired: React.FC<IsRequiredProps> = ({ error, errorMessage, name }) => {
  const classes = useStyles();
  return (
    <>
      {error && (
        <p className={classes.error_message}>
          {errorMessage ?? `${name?.replace(/_/g, " ")} is required`}
        </p>
      )}
    </>
  );
};
