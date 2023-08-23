import { memo } from "react";
import { FilterType } from "../../App";

type Props = {
  chnageFilterType: (item: FilterType) => void;
};

const TodoFilter = memo(({ chnageFilterType }: Props) => {
  console.log("render TodoFilter");

  return (
    <section className="flex text-center">
      <button
        type="button"
        className="btn flex-1 rounded-none"
        onClick={() => chnageFilterType(FilterType.all)}
      >
        All
      </button>

      <button
        type="button"
        className="btn flex-1 rounded-none"
        onClick={() => chnageFilterType(FilterType.pending)}
      >
        Pedning
      </button>
      <button
        type="button"
        className="btn flex-1 rounded-none"
        onClick={() => chnageFilterType(FilterType.completed)}
      >
        Completed
      </button>
    </section>
  );
});

export default TodoFilter;
