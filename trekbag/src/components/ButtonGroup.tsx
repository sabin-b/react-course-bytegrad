import { actionButtons } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {actionButtons.map(({ label, ...props }) => (
        <Button key={label} {...props}>
          {label}
        </Button>
      ))}
    </section>
  );
}
