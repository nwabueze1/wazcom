import { MbmcButton, Link } from "../components";
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
        return mode === "edit" ? (
            <MbmcButton
                key={index}
                name={name}
                {...props}
                className={className}
                handleClick={() => {
                    handleElementClick(mode, name, handleClick);
                }}
                activeElement={activeElement}
            >
                {lIcon} {text} {rIcon}
            </MbmcButton>
        ) : (
            <Link
                href={url}
                target={url?.startsWith("/") ? "_self" : "_blank"}
                rel={"noreferrer noopener"}
            >
                <MbmcButton
                    key={index}
                    name={name}
                    {...props}
                    className={className}
                    activeElement={activeElement}
                >
                    {lIcon} {text} {rIcon}
                </MbmcButton>
            </Link>
        );
    });
};
