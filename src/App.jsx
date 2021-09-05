import { useEffect } from "react";
import "./App.css";
import { useData } from "./context/DataContext";
import { ProductListing } from "./pages/productListing/ProductListing";

function App() {
  const { state, dispatch } = useData();
  console.log(state);

  useEffect(() => {
    dispatch({ type: "INITIALIZE_PRODUCTS" });
  }, [dispatch]);

  return (
    <div className="App">
      <p>Flipkart-Demo</p>
      <ProductListing />
    </div>
  );
}

export default App;
