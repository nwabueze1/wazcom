import { useState } from "react";
import clx from "classnames";
import { useTablePaginationStyles } from "./styles";
import { PageNumbersProps } from "./types";
import { PageNumber } from "./PageNumber";

export const PageNumbers: React.FC<PageNumbersProps> = function ({
  onPageChange,
  count,
  currentPage,
}) {
  const classes = useTablePaginationStyles();
  const pages = [...Array(count + 1).keys()].slice(1);
  const pageRangeDisplayed = 3;
  const initialLeftPageNumbers = pages.slice(0, pageRangeDisplayed);
  const initialRightPageNumbers = pages.slice(-pageRangeDisplayed);
  const initialRemainingNumbers = pages.slice(
    pageRangeDisplayed,
    -pageRangeDisplayed
  );
  const [leftPageNumbers, setLeftPages] = useState(initialLeftPageNumbers);
  // const [rightPageNumbers, setRightPages] = useState(initialRightPageNumbers);
  // const [remainingPageNumbers, setRemainingPageNumbers] = useState(
  //   initialRemainingNumbers,
  // );
  const [n, setN] = useState(0);

  const renderNumbers = () => {
    if (pages.length < 5) {
      return pages.map((page, index) => (
        <PageNumber
          page={page}
          onPageChange={onPageChange}
          currentPage={currentPage}
          key={index}
        />
      ));
    }

    const leftPages = leftPageNumbers.map((page, index) => (
      <PageNumber
        page={page}
        onPageChange={onPageChange}
        currentPage={currentPage}
        key={index}
      />
    ));

    const rightPages = initialRightPageNumbers.map((page, index) => (
      <PageNumber
        page={page}
        onPageChange={onPageChange}
        currentPage={currentPage}
        key={index}
      />
    ));

    const dots = initialRemainingNumbers[n * pageRangeDisplayed] ? (
      <span
        className={clx(classes.pageNumber)}
        onClick={() => {
          const newArr = [
            ...leftPageNumbers,
            ...initialRemainingNumbers.slice(
              n * pageRangeDisplayed,
              (n + 1) * pageRangeDisplayed
            ),
          ];
          setN((n) => n + 1);
          setLeftPages(newArr.slice(-pageRangeDisplayed));
        }}
      >
        ...
      </span>
    ) : (
      <></>
    );

    return [leftPages, dots, rightPages];
  };

  return <div className={clx(classes.text)}>{renderNumbers()}</div>;
};
