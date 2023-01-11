import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "iPhone 14" },
  { id: 2, name: "iPhone 14 Pro" },
  { id: 3, name: "iPhone 14 Pro Max" },
];

const COLORS = ["Space Black", "Deep Purple", "Gold", "Silver"];
const STORAGE = ["128GB", "256GB", "512GB", "1TB"];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedColor, setColor] = useState();
  const [storage, setStorage] = useState();

  return (
    <div className="container">
      <div className="products">
        <h2>Products</h2>

        <ul className="products-list">
          {PRODUCTS.map((product) => (
            <li key={product.id} onClick={() => setSelectedProduct(product)}>
              {product.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="product-display">
        <h2>Product details</h2>
        <h3>
          {selectedProduct?.name} {selectedColor} {storage}
        </h3>
        {selectedProduct && (
          <div>
            <hr />
            <div>
              <h3>Select a color:</h3>
              {COLORS.map((c) => (
                <span
                  key={c}
                  className={`product-detail${
                    selectedColor === c ? "-selected" : ""
                  }`}
                  onClick={() => setColor(c)}
                >
                  {c}
                </span>
              ))}
            </div>

            <div>
              <h3>Select storage:</h3>
              {STORAGE.map((s) => (
                <span
                  key={s}
                  className={`product-detail${
                    storage === s ? "-selected" : ""
                  }`}
                  onClick={() => setStorage(s)}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
