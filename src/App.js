import "./App.css";
import data from "./database/data.json";
import { Navbar, ProductCard, Sidebar, Topbar } from "./components";
import { useEffect, useState } from "react";
import { useFilter } from "./contexts/filter-context";
import { getFilteredProducts } from "./utils/getFilteredProducts";

function App() {
  const { filterState, filterDispatch } = useFilter();
  const { filteredProducts } = getFilteredProducts(filterState);

  return (
    <div>
      <Navbar />
      <main>
        <Sidebar />
        <section className="prod-listing-container px-s">
          <Topbar />
          <div className="prod-listing px-s">
            {filteredProducts.map((prod) => (
              <ProductCard product={prod} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
