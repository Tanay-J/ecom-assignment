import { createContext, useContext, useState } from "react";
import data from "../database/data.json";
const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const initalFilters = { sortBy: "", brands: [], sizes: [], idealFor: [] };
  const [filterState, filterDispatch] = useState(initalFilters);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
