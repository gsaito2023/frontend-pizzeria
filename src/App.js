import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import TermsPage from "./components/TermsPage";
import PageNotFound from "./components/PageNotFound";
import Homepage from "./components/Homepage";
import MenuList from "./components/menuPage/MenuList";
import SearchResult from "./components/menuPage/SearchResult";
import NotFound from "./components/menuPage/NotFound";

import Media from "react-media";
import Header from "./components/Header";
import MdHeader from "./components/MdHeader";
import Signup from "./components/Signup";
import SelectedProduct from "./components/SelectedProduct";
import { ShopContextProvider } from "./context/shop-context";
import { ToastContainer } from "react-toastify";

const getAllProducts = async () => {
  let resp = await fetch("/json/products.json");
  let data = await resp.json();
  window.localStorage.setItem("FOOD_DATA_JSON", JSON.stringify(data));
  return data;
};
getAllProducts();

function App() {
  return (
    <div className="container-fluid">
      <ShopContextProvider>
        <ToastContainer />
        <Media query={{ maxWidth: 599 }}>
          {(matches) => (matches ? <MdHeader /> : <Header />)}
        </Media>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<MenuList />}></Route>
          <Route path="/menu/:searchTerm" element={<SearchResult />}></Route>
          <Route path="/notfound" element={<NotFound />}></Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="location" element={<Location />} />
          <Route path="menu/item/:id" element={<SelectedProduct />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>

        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
