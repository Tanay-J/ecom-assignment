import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useFilter } from "../../contexts/filter-context";
import data from "../../database/data.json";

const Sidebar = () => {
  const [showSizes, setShowSizes] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [showIdeaFor, setShowIdeaFor] = useState(false);
  const { filterState, filterDispatch } = useFilter();

  const filterHandler = (type, value, isChecked) => {
    if (isChecked) {
      if (type === "size") {
        filterDispatch((prev) => ({ ...prev, sizes: [...prev.sizes, value] }));
      } else if (type === "brand") {
        filterDispatch((prev) => ({
          ...prev,
          brands: [...prev.brands, value],
        }));
      } else if (type === "idealFor") {
        filterDispatch((prev) => ({
          ...prev,
          idealFor: [...prev.idealFor, value],
        }));
      }
    } else {
      if (type === "size") {
        let sizes = filterState.sizes.filter((size) => size !== value);
        filterDispatch((prev) => ({ ...prev, sizes: sizes }));
      } else if (type === "brand") {
        let brands = filterState.brands.filter((brand) => brand !== value);
        filterDispatch((prev) => ({ ...prev, brands: brands }));
      } else if (type === "idealFor") {
        let categories = filterState.idealFor.filter((cat) => cat !== value);
        filterDispatch((prev) => ({ ...prev, idealFor: categories }));
      }
    }
  };

  const resetFilters = () => {
    filterDispatch({ sortBy: "", brands: [], sizes: [], idealFor: [] });
  };

  return (
    <aside className="aside-container p-s">
      <div className="filter-heading">
        <h3>Filters</h3>
        <button onClick={resetFilters}>Clear All</button>
      </div>

      <section className="filter-section">
        <p className="font-bold" onClick={() => setShowSizes(!showSizes)}>
          Size {showSizes ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </p>
        {showSizes &&
          data.sizes.map((size) => (
            <label htmlFor={size}>
              <input
                onClick={(e) => filterHandler("size", size, e.target.checked)}
                checked={filterState.sizes.includes(size)}
                value={size}
                id={size}
                type="checkbox"
              />
              {size}
            </label>
          ))}
      </section>
      <section className="filter-section">
        <p className="font-bold" onClick={() => setShowBrands(!showBrands)}>
          Brands {showBrands ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </p>
        {showBrands &&
          data.brands.map((brand) => (
            <label htmlFor={brand}>
              <input
                onClick={(e) => filterHandler("brand", brand, e.target.checked)}
                checked={filterState.brands.includes(brand)}
                value={brand}
                id={brand}
                type="checkbox"
              />
              {brand}
            </label>
          ))}
      </section>
      <section className="filter-section">
        <p className="font-bold" onClick={() => setShowIdeaFor(!showIdeaFor)}>
          Ideal For {showIdeaFor ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </p>
        {showIdeaFor && (
          <>
            <label htmlFor="Men">
              <input
                onClick={(e) =>
                  filterHandler("idealFor", "Men", e.target.checked)
                }
                checked={filterState.idealFor.includes("Men")}
                value="Men"
                id="Men"
                type="checkbox"
              />
              Men
            </label>
            <label htmlFor="Women">
              <input
                onClick={(e) =>
                  filterHandler("idealFor", "Women", e.target.checked)
                }
                checked={filterState.idealFor.includes("Women")}
                value="Women"
                id="Women"
                type="checkbox"
              />
              Women
            </label>
          </>
        )}
      </section>
    </aside>
  );
};
export { Sidebar };
