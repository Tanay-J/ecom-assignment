import { useFilter } from "../../contexts/filter-context";

const Topbar = () => {
  const { filterDispatch } = useFilter();
  const sortHandler = (type) => {
    filterDispatch((prev) => ({ ...prev, sortBy: type }));
  };
  return (
    <div className="topbar-container px-s py-xs">
      <p>Sort By </p>
      <p className="pointer" onClick={() => sortHandler("lth")}>
        Price: Low to High
      </p>
      <p className="pointer" onClick={() => sortHandler("htl")}>
        Price: High to Low
      </p>
    </div>
  );
};
export { Topbar };
