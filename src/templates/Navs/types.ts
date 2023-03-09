export type NavProps = {
  mode?: "view" | "edit";
  handleClick?: (route: string) => void;
  logo?: { src?: string; url: string };
  links: { text: string; url: string; subLinks?: { text: string; url: string } }[];
  icons?: { url?: string }[];
  buttons?: { text: string; url: string }[];
  socials?: { type: "FACEBOOK" | "TWITTER"; url: string }[];
};

export type SocialType = "FACEBOOK" | "TWITTER";
