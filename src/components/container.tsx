import { cn } from "@/lib/utils";

const containerSizes = {
  base: "container-size-1",
  compact: "container-size-2",
};

export default function Container({
  size = "base",
  children,
  className,
  ...props
}: {
  size?: keyof typeof containerSizes;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("container-1", containerSizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
