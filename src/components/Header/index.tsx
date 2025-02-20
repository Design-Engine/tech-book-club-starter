"use client";
import Link from "next/link";
import { Button } from "@/components/Button";
import Container from "@/components/container";
import { logos } from "@/constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowDownIcon } from "@/components/icons";
import { ButtonLink } from "@/types";

type HeaderProps = {
  logoOptions?: keyof typeof logos;
  button: ButtonLink;
};

export default function Header(props: HeaderProps) {
  const {
    logoOptions = HeaderDefaults.logoOptions,
    button = HeaderDefaults.button,
  } = props;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Call the handleScroll function on page load
    handleScroll();

    // Clean up the event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("header-1", isScrolled && "header-2")}>
      <Container className="header-3">
        <Link href="/">
          {logos[logoOptions ?? "default"]}
          <span className="sr-only">Logo</span>
        </Link>

        <Button
          asChild
          size="sm"
          className={cn("header-4", isScrolled && "header-5")}
        >
          <Link
            href={button.url || "#"}
            target={button.newTab ? "_blank" : "_self"}
            className="header-6"
          >
            <span>{button.label}</span>

            <ArrowDownIcon />
          </Link>
        </Button>
      </Container>
    </header>
  );
}

export const HeaderDefaults: HeaderProps = {
  logoOptions: "default",
  button: {
    label: "SUBSCRIBE NOW",
    url: "/",
    newTab: false,
  },
};
