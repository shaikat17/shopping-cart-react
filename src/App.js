import "./App.css";
import { useGlobalContext } from "./context";

import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/CartComponents/CartContainer";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
