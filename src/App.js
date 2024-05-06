import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home";
import About from "./pages/About";
import CarListing from "./pages/CarListing";
import CarDetails from "./pages/CarDetails";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/cars/:slug" element={<CarDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
