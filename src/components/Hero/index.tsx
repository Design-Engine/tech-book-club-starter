import AvatarRatings from "@/components/AvatarRatings";
import { Button } from "@/components/Button";
import Container from "@/components/container";
import { ArrowDownIcon, GlowBg } from "@/components/icons";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import { ButtonLink, SimpleImage } from "@/types";
import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  headline: string;
  headlineGradient: boolean;
  description: string | null;
  image: SimpleImage;
  hasHeader: boolean;
  button: ButtonLink;
  showAvatarRatings: boolean;
  hideItem: boolean;
};

export default function Hero(props: HeroProps) {
  const {
    headline,
    headlineGradient,
    description,
    image,
    hasHeader,
    button,
    showAvatarRatings,
    hideItem,
  } = props;

  if (hideItem) return null;

  return (
    <section
      className="hero-1"
      style={{
        backgroundImage: "url(/images/bgPatternLight.png)",
      }}
    >
      <Container className={cn("hero-2", hasHeader ? "hero-3" : "hero-4")}>
        <div className="hero-5">
          <div className={cn(headlineGradient ? "hero-6" : "hero-7")}>
            <SectionTitle as="h1">{headline}</SectionTitle>
          </div>

          <p className="hero-8">{description}</p>

          {button && (
            <Button
              asChild
              variant={button.variant}
              className="hero-9"
              size={button.size}
            >
              <Link
                href={button.url || "#"}
                target={button.newTab ? "_blank" : "_self"}
              >
                <span>{button.label}</span>

                <ArrowDownIcon />
              </Link>
            </Button>
          )}

          {showAvatarRatings && <AvatarRatings className="hero-10" />}
        </div>

        <Image
          src={
            image?.url || "https://dummyimage.com/1080x1212.png/062630/ffffff"
          }
          alt={image?.alt || "Hero image"}
          priority
          width={540}
          height={606}
          className="hero-11"
        />

        {/* GlowBg */}
        <GlowBg className="hero-12" />
      </Container>
    </section>
  );
}

export const HeroDefaults: HeroProps = {
  headline: "Section Title",
  headlineGradient: true,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat delectus blanditiis fugit eos eligendi consectetur mod fugiat deleniti quisquam aliquid",
  image: {
    url: "https://dummyimage.com/1080x1212.png/062630/ffffff",
    alt: "Hero image",
  },
  hasHeader: false,
  button: {
    label: "Button",
    url: "#",
    newTab: false,
  },
  showAvatarRatings: true,
  hideItem: false,
};
