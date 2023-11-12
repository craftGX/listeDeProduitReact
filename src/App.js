import "./styles.css";
import Input from "./components/forms/input";
import Checkbox from "./components/forms/checkbox";

const PRODUCTS = [
  { category: "fruit", price: "1$", stocked: true, name: "apple" },
  { category: "fruit", price: "2$", stocked: true, name: "banana" },
  { category: "legume", price: "1$", stocked: true, name: "carrot" },
  { category: "fruit", price: "5$", stocked: false, name: "mango" },
  { category: "fruit", price: "1$", stocked: true, name: "orange" }
];

function Searchbar() {
  return (
    <div>
      <div className="mb-3">
        <Input value="" onChange={() => null} placeholder="rechercher..." />
        <Checkbox
          checked={false}
          onChange={() => null}
          label="n'affichez que les produits en stock..."
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="container my-3">
      <Searchbar />
    </div>
  );
}
