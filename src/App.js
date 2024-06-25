//Install
import React from "react";
//Install
import "swiper/css";
//Install
import "swiper/css/navigation";
//Install
import "swiper/css/pagination";
//Install
import "bootstrap/dist/css/bootstrap.min.css";
//Install
import "./App.css";
//Install
import "./Responsive.css";
//Install
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//Install
import Header from "./Component/Header";
//Install
import Main from "./Component/Main";
//Install
import Corporation from "./Component/Tab/Corporation/Default";
//Install
import Factory from "./Component/Tab/Factory/Default";
//Install
import Success from "./Component/Tab/Success/Default";
//Install
import Career from "./Component/Tab/Career/Default";
//Install
import Application from "./Component/Tab/Career/Application";
//Install
import Fair from "./Component/Tab/Fair/Default";
//Install
import Blog from "./Component/Tab/Blog/Default";
//Install
import Article from "./Component/Tab/Blog/Article";
//Install
import Sustainability from "./Component/Tab/Sustainability/Default";
//Install
import Product from "./Component/Tab/Product/Default";
//Install
import Detail from "./Component/Tab/Product/Detail";
//Install
import Questions from "./Component/Tab/Questions/Default";
//Install
import Contact from "./Component/Tab/Contact/Default";
//Install
import Footer from "./Component/Footer";

//Element
function App() {
  //Element
  return (
    //Element
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Main /> }></Route>
          <Route path="/kurumsal" element={ <Corporation /> }></Route>
          <Route path="/fabrikamiz" element={ <Factory /> }></Route>
          <Route path="/belgelerimiz" element={ <Success /> }></Route>
          <Route path="/insan-kaynaklari" element={ <Career /> }></Route>
          <Route path="/hemen-basvur" element={ <Application /> }></Route>
          <Route path="/katildigimiz-fuarlar" element={ <Fair /> }></Route>
          <Route path="/blog" element={ <Blog /> }></Route>
          <Route path="/blog-detay" element={ <Article /> }></Route>
          <Route path="/surdurulebilirlik" element={ <Sustainability /> }></Route>
          <Route path="/urunler" element={ <Product /> }></Route>
          <Route path="/urun-detay" element={ <Detail /> }></Route>
          <Route path="/sikca-sorulan-sorular" element={ <Questions /> }></Route>
          <Route path="/iletisim-bilgileri" element={ <Contact /> }></Route>
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}
//Element
export default App;
