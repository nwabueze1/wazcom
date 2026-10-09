import { FC, useState, useCallback } from "react";
import { useGalleryStyles } from "./styles";
import { GalleryProps } from "./types";
import clx from "classnames";
import { CheckBoxInput } from "../../io";

export const Gallery: FC<GalleryProps> = ({ className, items, text, onSelect }) => {
  const classes = useGalleryStyles();
  const [ids, setIds] = useState<{ [key: string]: null | number }>({
    selected: null,
    hover: null,
  });

  const handleMouseEnter = useCallback(
    (id: number) => {
      if (ids.selected === id) return;
      const newIds = { ...ids, hover: id };
      setIds(newIds);
    },
    [ids],
  );

  const handleMouseLeave = useCallback(() => {
    const newIds = { ...ids, hover: null };
    setIds(newIds);
  }, [ids]);

  const handleItemSelect = useCallback(
    (id: number) => {
      let newIds;
      if (ids.selected === id) {
        newIds = { hover: null, selected: null };
        onSelect?.(null);
        return setIds(newIds);
      }
      newIds = { hover: null, selected: id };
      setIds(newIds);
      onSelect?.(id);
    },
    [ids],
  );

  const displayItems = useCallback(() => {
    return items.map(({ image: { src, alt }, id }, index) => (
      <div
        key={index}
        onClick={() => {
          handleItemSelect(id);
        }}
        onMouseEnter={() => {
          handleMouseEnter(id);
        }}
        onMouseLeave={handleMouseLeave}
        className={classes.item}
      >
        <img src={src} className={classes.itemImage} alt={alt} />
        <div className={clx(classes.itemHover, ids.hover === id && classes.itemHoverActive)}>
          <p className={classes.itemHoverText}>{text ?? "Select"}</p>
        </div>
        <div className={clx(classes.itemChecked, ids.selected === id && classes.itemCheckedActive)}>
          <CheckBoxInput checked className="checkbox" />
        </div>
      </div>
    ));
  }, [ids]);

  return <div className={clx(classes.root, className)}>{displayItems()}</div>;
};
