import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Sejarah from "./pages/Sejarah";
import UMKM from "./pages/UMKM";
import Potensi from "./pages/Potensi";
import Budaya from "./pages/Budaya";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing Page sebagai halaman utama */}
          <Route path="/" element={<HomePage />} />

          {/* Halaman-halaman lainnya */}
          <Route path="/about" element={<About />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/umkm" element={<UMKM />} />
          <Route path="/potensi" element={<Potensi />} />
          <Route path="/budaya" element={<Budaya />} />

          {/* Route untuk section-section spesifik */}
          <Route
            path="/sejarah"
            element={<div>Halaman Sejarah (Coming Soon)</div>}
          />
          <Route
            path="/potensi"
            element={<div>Halaman Potensi Desa (Coming Soon)</div>}
          />
          <Route
            path="/budaya"
            element={<div>Halaman Budaya (Coming Soon)</div>}
          />
          <Route path="/umkm" element={<div>Halaman UMKM (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
