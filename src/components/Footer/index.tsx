import Container from "@/components/container";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "../Button";
import Link from "next/link";
import { ArrowDownIcon, ButterflyIcon, LinkedInIcon } from "@/components/icons";
import AvatarRatings from "@/components/AvatarRatings";

type FooterProps = {
  headline?: string;
  showAvatarRatings?: boolean;
  button?: {
    label: string;
    url: string;
    newTab?: boolean;
  };
};

export default function Footer(props: FooterProps) {
  const {
    headline = FooterDefaults.headline,
    button = FooterDefaults.button,
    showAvatarRatings = true,
  } = props;

  return (
    <footer
      className="footer-1"
      style={{
        backgroundImage: "url(/images/bgPatternDark.png)",
      }}
    >
      <Container className="footer-2">
        <div className="footer-3">
          <SectionTitle as="h2" className="text-balance">
            {headline}
          </SectionTitle>

          <div className="footer-4">
            <Button asChild className="gap-4" variant="outline">
              <Link
                href={button?.url ?? "#"}
                target={button?.newTab ? "_blank" : "_self"}
              >
                <span>{button?.label}</span>

                <span className="footer-5">
                  <ArrowDownIcon />
                </span>
              </Link>
            </Button>

            {showAvatarRatings && <AvatarRatings className="footer-6" />}
          </div>
        </div>

        <div className="footer-7">
          <p className="footer-8">
            &copy; {new Date().getFullYear()} - Tech Book Club
          </p>

          <ul className="footer-9">
            <li>
              <Link href="#">
                <ButterflyIcon />
              </Link>
            </li>
            <li>
              <Link href="#">
                <LinkedInIcon />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export const FooterDefaults: FooterProps = {
  headline: "Ready to debug your reading list?",
  button: {
    label: "REVIEW MEMBERSHIP OPTIONS",
    url: "#",
    newTab: false,
  },
};
