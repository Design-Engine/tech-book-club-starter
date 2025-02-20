import { Check } from "@/components/icons";

export type CheckListProps = {
  title?: string;
};

export default function CheckList(props: CheckListProps) {
  const { title } = props;
  return (
    <div className="check-list-1">
      <Check className="check-list-2" />
      <span className="check-list-3">{title}</span>
    </div>
  );
}
