import { cn } from "@/lib/utils";

const titleSizes = {
  h1: "title-size-1",
  h2: "title-size-2",
  h3: "title-size-3",
  h4: "title-size-4",
  h5: "title-size-5",
};

type SectionTitleProps = {
  as?: React.ElementType;
  size?: keyof typeof titleSizes;
  className?: string;
  children: React.ReactNode;
};

export default function SectionTitle({
  as: Comp = "h1",
  className,
  size = "h1",
  children,
  ...props
}: SectionTitleProps) {
  return (
    <Comp
      className={cn("section-title-1", titleSizes[size], className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
