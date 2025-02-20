import { StarIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export default function Stars({
  count = 5,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={cn("stars-1", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
}
