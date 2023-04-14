import { FC, memo } from "react";
import { Tag } from "core/Tag";
import { useComponentPropsStyles } from "./styles";
import { ComponentPropsProp } from "./types";
import { Button } from "../../core";
import { BiRefresh } from "react-icons/bi";
import { TextInput, CheckBoxInput, EmailInput } from "../../io";

const ComponentProps: FC<ComponentPropsProp> = ({ body, onReset }) => {
  const classes = useComponentPropsStyles();
  const tableHead: string[] = ["name", "description", "default", "controls"];

  return (
    <div className={classes.tableContainer}>
      <h4 className={classes.title}>Props</h4>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr className={classes.tr}>
            {tableHead.map((value, index) => (
              <th key={index} className={classes.th}>
                {value}
              </th>
            ))}
            <th className={classes.th}>
              <Button
                variant="outlined"
                className={classes.tbutton}
                rightIcon={<BiRefresh className={classes.buttonIcon} />}
                iconSpacing={5}
                onClick={onReset}
              >
                Reset
              </Button>
            </th>
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {body.map((contents, index) => (
            <tr className={classes.tr} key={index}>
              <td className={classes.td}>{contents.name}</td>
              <td className={classes.td}>{contents.description}</td>
              <td className={classes.td}>
                <Tag name={contents.default as string} />
              </td>
              <td className={classes.td}>
                {contents.controls.controlType === "text" ||
                contents.controls.controlType === "string" ? (
                  <TextInput
                    name={contents.controls.name}
                    onChange={contents.controls.onChange}
                    height={12}
                  />
                ) : contents.controls.controlType === "email" ? (
                  <EmailInput
                    name={contents.controls.name}
                    onChange={contents.controls.onChange}
                    height={12}
                  />
                ) : contents.controls.controlType === "checkbox" ? (
                  <CheckBoxInput
                    name={contents.controls.name}
                    onChange={contents.controls.onChange}
                  />
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(ComponentProps);
