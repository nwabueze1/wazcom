export interface SocialButtonProps {
    title : string;
    image : {
        src : string;
        alt : string;
    }
    clickHandler : () => void
}