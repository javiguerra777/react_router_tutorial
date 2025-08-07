import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <section className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Place the rest of your routes below this comment */}

        {/* Place the rest of your routes above this comment */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default App
