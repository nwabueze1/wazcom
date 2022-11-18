import { MbmcButton } from "../components";
import { BlockCta } from "../types";
import { handleElementClick } from "./element";

export const renderCtas = (
    ctas: BlockCta[],
    mode: "view" | "edit",
    parentKey: string,
    handleClick?: (element: string) => void,
    activeElement?: string,
    className?: string,
) => {
    return (ctas ?? []).map(({ text, rIcon, url, lIcon, ...props }, index) => {
        const name = parentKey + ".ctas." + String(index);
        return (
            <MbmcButton
                key={index}
                name={name}
                {...props}
                className={className}
                handleClick={() => {
                    mode === "view"
                        ? handleClick?.(url ?? "")
                        : handleElementClick(mode, name, handleClick);
                }}
                activeElement={activeElement}
            >
                {lIcon} {text} {rIcon}
            </MbmcButton>
        );
    });
};
