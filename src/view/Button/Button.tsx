import { Paper, Table, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import PropsTable from "core/PropsTable/PropsTable";
import { FC } from "react";
import { Button, Wrapper } from "../../core";
import { useButtonStyles } from "./styles";
import { ButtonViewProps } from "./types";

export const ButtonView: FC<ButtonViewProps> = () => {
  const classes = useButtonStyles();

  return (
    <div className={classes.root}>
      <Wrapper
        title="Buttons"
        description="Buttons are clickable elements that are used to trigger actions. They communicate
              calls to action to the user and allow users to interact with pages in a variety of
              ways. Button labels express what action will occur when the user interacts with it."
      >
        <Button variant={"contained"} isDisabled={false} isLoading={false} rightIcon={undefined}>
          Default Button
        </Button>
      </Wrapper>
      <PropsTable
        tableBody={[
          {
            name: "Fidelis Okeke",
            email: "padrefidelis111@gmail.com",
            password: <input type={"password"} placeholder="pleaser enter password" />,
          },
        ]}
        tableHeader={["name", "email", "password"]}
      />
    </div>
  );
};
