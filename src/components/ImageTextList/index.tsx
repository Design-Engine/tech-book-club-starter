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
    <section
      className={cn("image-text-list-1", sectionPadding && "image-text-list-2")}
    >
      <Container
        className={cn("image-text-list-3", reverse && "image-text-list-4")}
      >
        <div className="image-text-list-5">
          <div className="image-text-list-6">
            <SectionTitle size="h2" as="h2">
              {headline}
            </SectionTitle>
          </div>

          {description && <p className="image-text-list-7">{description}</p>}

          {checklistItems?.map((item, index: number) => (
            <div key={index} className="image-text-list-8">
              <CheckList {...item} />
            </div>
          ))}
        </div>

        <div className="image-text-list-9">
          <Image
            src={
              mainImage?.url ||
              "https://dummyimage.com/1120x1040.png/062630/ffffff"
            }
            alt={mainImage?.alt || "Image Text List"}
            width={560}
            height={520}
            className="image-text-list-10"
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
              className={cn(
                "image-text-list-11",
                reverse && "image-text-list-12",
              )}
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
