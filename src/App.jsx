import { useEffect } from "react";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { useData } from "./context/DataContext";
import { ProductListing } from "./pages/productListing/ProductListing";

function App() {
  const { dispatch } = useData();

  useEffect(() => {
    dispatch({ type: "INITIALIZE_PRODUCTS" });
  }, [dispatch]);

  return (
    <div className="App">
      {/* <p>Flipkart-Demo</p> */}
      <Nav />
      <ProductListing />
    </div>
  );
}

export default App;
