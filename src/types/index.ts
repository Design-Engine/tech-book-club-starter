import { ButtonProps } from "@/components/Button";

export type SimpleImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Link = {
  label: string;
  url?: string;
  newTab?: boolean;
};

export type Button = Link & {
  variant: ButtonProps["variant"];
};

export type ButtonLink = Link & {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};
