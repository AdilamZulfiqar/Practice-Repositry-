import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import MainMenu from "./components/mainMenu/MainMenu";
import LandingPage from "./components/landingPage/LandingPage";
import About from "./components/about/About";
import Products from "./components/blog/Products";
import ContactUs from "./components/contactUs/ContactUs";
import Login from "./components/login/Login";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import { Footer } from "./components/footer/Footer";
import NewProduct from "./components/blog/NewProduct";
import Update from "./components/blog/Update";

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <MainMenu />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blogs/new" element={<NewProduct />} />
          <Route path="/blogs" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/update" element={<Update />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
