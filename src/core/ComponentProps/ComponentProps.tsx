import { FC, memo } from "react";
import { Tag } from "core/Tag";
import { useComponentPropsStyles } from "./styles";
import { ComponentPropsProp } from "./types";
import { Button } from "../../core";
import { BiRefresh } from "react-icons/bi";

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
              <td className={classes.td}>{contents.controls && contents.controls}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(ComponentProps);
