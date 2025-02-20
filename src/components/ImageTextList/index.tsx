import CheckList, { CheckListProps } from "@/components/CheckList";
import Container from "@/components/container";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SimpleImage } from "@/types";

type ImageTextListProps = {
  headline?: string;
  sectionPadding?: boolean;
  reverse?: boolean;
  mainImage?: SimpleImage;
  supportImage?: SimpleImage;
  description?: string;
  checklistItems?: CheckListProps[];
  hideItem?: boolean;
};

export default function ImageTextList(props: ImageTextListProps) {
  const {
    headline = ImageTextListDefaults.headline,
    sectionPadding = ImageTextListDefaults.sectionPadding,
    reverse = ImageTextListDefaults.reverse,
    mainImage = ImageTextListDefaults.mainImage,
    supportImage = ImageTextListDefaults.supportImage,
    description = ImageTextListDefaults.description,
    checklistItems = ImageTextListDefaults.checklistItems,
    hideItem = ImageTextListDefaults.hideItem,
  } = props;

  if (hideItem) return null;

  return (
    <section className={cn("img-text-1", sectionPadding && "img-text-2")}>
      <Container className={cn("img-text-3", reverse && "img-text-4")}>
        <div className="img-text-5">
          <div className="img-text-6">
            <SectionTitle size="h2" as="h2">
              {headline}
            </SectionTitle>
          </div>

          {description && <p className="img-text-7">{description}</p>}

          {checklistItems?.map((item, index: number) => (
            <div key={index} className="img-text-8">
              <CheckList {...item} />
            </div>
          ))}
        </div>

        <div className="img-text-9">
          <Image
            src={
              mainImage?.url ||
              "https://dummyimage.com/1120x1040.png/062630/ffffff"
            }
            alt={mainImage?.alt || "Image Text List"}
            width={560}
            height={520}
            className="img-text-10"
          />

          {supportImage && (
            <Image
              src={
                supportImage.url ||
                "https://dummyimage.com/238x276.png/062630/ffffff"
              }
              alt={supportImage.alt}
              width={119}
              height={138}
              className={cn("img-text-11", reverse && "img-text-12")}
            />
          )}
        </div>
      </Container>
    </section>
  );
}

export const ImageTextListDefaults: ImageTextListProps = {
  headline: "Image Text List",
  sectionPadding: true,
  reverse: false,
  mainImage: {
    url: "https://dummyimage.com/1120x1040.png/062630/ffffff",
    alt: "Image Text List",
  },
  checklistItems: [
    {
      title: "Checklist Item 1",
    },
    {
      title: "Checklist Item 2",
    },
    {
      title: "Checklist Item 3",
    },
  ],
  hideItem: false,
};
