import { CommonProps } from "@mui/material/OverridableComponent";

export type BlogProps = CommonProps & {
    title: string
    content: string
    image: {
        src: string
        alt: string
    }
}