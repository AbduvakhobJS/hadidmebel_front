import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Material from "./components/pages/material";
import About from "./components/pages/about";
import Main from "./components/pages/main";
import Delivery from "./components/pages/delivery";
import Contact from "./components/pages/contact";
import Catalog from "./components/catalog/catalog";
import Zayavka from "./components/pages/zayavka";
import Product from "./components/product/product";
import {useEffect, useState} from "react";
import axios from "axios";
import PageNotFound from "./components/pages/404";

function App() {
    console.log(process.env)
    const [product, setProduct] = useState([])
    const [catalog, setCatalog] = useState([])

    const fetchCatalog = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/catalog/all`)
        setCatalog(data)
    }
    useEffect(() => {
        fetchCatalog()
    }, []);
  return (
    <BrowserRouter>
      <div>
          <Navbar setProduct={setProduct}/>
          <Routes>
              <Route path="/" element={<Main setProduct={setProduct}/>}></Route>

              {catalog.map((item) => (
                  <Route path={`/${item.name}`} element={<Catalog item={item.name} product={product} />}></Route>
              ))}
              {catalog.map((item) => (
                  <Route path={`/${item.name}/:id`} element={<Product/>}></Route>
              ))}
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/delivery" element={<Delivery/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/materials" element={<Material/>}></Route>
              <Route path="/zayavka" element={<Zayavka/>}></Route>
              <Route path="*" element={<PageNotFound/>}></Route>
          </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
