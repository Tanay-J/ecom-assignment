import data from "../database/data.json";
const getFilteredProducts = (filterState) => {
  const sortedProducts = (state, products) => {
    if (state.sortBy === "lth") {
      products.sort(
        (a, b) =>
          a.price * ((100 - a.discount) / 100) -
          b.price * ((100 - b.discount) / 100)
      );
    } else {
      products.sort(
        (b, a) =>
          a.price * ((100 - a.discount) / 100) -
          b.price * ((100 - b.discount) / 100)
      );
    }
    return products;
  };

  const filterBySize = (state, products) => {
    return products.filter((prod) =>
      state.sizes.length === 0
        ? true
        : state.sizes.some((size) => prod.sizes.includes(size))
    );
  };

  const filterByBrand = (state, products) => {
    return products.filter((prod) =>
      state.brands.length === 0
        ? true
        : state.brands.some((brand) => prod.brand === brand)
    );
  };
  const filterByIdealFor = (state, products) => {
    return products.filter((prod) =>
      state.idealFor.length === 0
        ? true
        : state.idealFor.some((cat) => prod.idealFor.includes(cat))
    );
  };
  const compose = (state, ...functions) => {
    return functions.reduce(
      (products, fn) => fn(state, products),
      data.products
    );
  };

  const filteredProducts = compose(
    filterState,
    sortedProducts,
    filterBySize,
    filterByBrand,
    filterByIdealFor
  );

  return { filteredProducts };
};
export { getFilteredProducts };
