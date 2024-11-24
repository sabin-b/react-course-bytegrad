import useItemsContext from "../hooks/useItemsContext";
import { ItemProviderType } from "../types/types";
import Button from "./Button";

export default function ButtonGroup() {
  const data = useItemsContext();
  const {
    handleMarkAsAllComplete,
    handleMarkAsAllInComplete,
    handleRemoveAllitems,
    handleResetToInitialItems,
  } = data as ItemProviderType;

  return (
    <section className="button-group">
      <Button
        onClick={handleMarkAsAllComplete}
        btnType="secondary"
        className="capitalize btn"
      >
        Mark As All Complete
      </Button>
      <Button
        onClick={handleMarkAsAllInComplete}
        btnType="secondary"
        className="capitalize btn"
      >
        Mark As All InComplete
      </Button>
      <Button
        onClick={handleResetToInitialItems}
        btnType="secondary"
        className="capitalize btn"
      >
        Reset to initial
      </Button>
      <Button
        onClick={handleRemoveAllitems}
        btnType="secondary"
        className="capitalize btn"
      >
        Remove all items
      </Button>
    </section>
  );
}
