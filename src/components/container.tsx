import { cn } from "@/lib/utils";

const containerSizes = {
  base: "container-1",
  compact: "container-2",
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
      className={cn("container-3", containerSizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
