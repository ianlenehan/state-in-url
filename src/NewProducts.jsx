import { useParams, useSearchParams, Link } from "react-router-dom";

const PRODUCTS = [
  { id: "1", name: "iPhone 14" },
  { id: "2", name: "iPhone 14 Pro" },
  { id: "3", name: "iPhone 14 Pro Max" },
];

const COLORS = ["Space Black", "Deep Purple", "Gold", "Silver"];
const STORAGE = ["128GB", "256GB", "512GB", "1TB"];

export default function NewProducts() {
  const { productId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedProduct = PRODUCTS.find((p) => p.id === productId);
  const selectedColor = searchParams.get("c");
  const selectedStorage = searchParams.get("s");

  const selectProductDetail = (type, value) => {
    searchParams.set(type, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="container">
      <div className="products">
        <h2>Products</h2>

        <ul className="products-list">
          {PRODUCTS.map((product) => (
            <li key={product.id} name={product.name}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-display">
        <h2>Product details</h2>
        <h3>
          {selectedProduct?.name} {selectedColor} {selectedStorage}
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
                  onClick={() => selectProductDetail("c", c)}
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
                    selectedStorage === s ? "-selected" : ""
                  }`}
                  onClick={() => selectProductDetail("s", s)}
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
