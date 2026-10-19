import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RecipeDetail from "./pages/RecipeDetail";
import ScrollToTop from "./components/ScrollToTop";
import { FavoritesProvider } from "./context/FavoritesContext";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
    <FavoritesProvider>
      <Navbar />
<ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
      </FavoritesProvider>
    </>
  );
}