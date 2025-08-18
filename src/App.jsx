import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/HomePage";
import Sejarah from "./pages/Sejarah";
import UMKM from "./pages/UMKM";
import Potensi from "./pages/Potensi";
import Budaya from "./pages/Budaya";
import Wisata from "./pages/Wisata";
import Tentang from "./pages/Tentang";

import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/umkm" element={<UMKM />} />
        <Route path="/potensi" element={<Potensi />} />
        <Route path="/budaya" element={<Budaya />} />
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
