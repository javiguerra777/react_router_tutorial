import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Product from "./pages/Product";

function App() {

  return (
    <section className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Place the rest of your routes below this comment */}
        <Route path="/about" element={<About />} />
        {/* :productId allows for dynamic variables and data to be passed in the URL */}
        <Route path="/product/:productId" element={<Product />} />
        {/* Place the rest of your routes above this comment */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default App
