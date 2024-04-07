import React from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from '../components/shared/navbar';
import Home from "../pages/home";
import Diamons from "../pages/diamons";
import Education from "../pages/education";
import EngagementRing from "../pages/engagementRing";
import FineJewelry from "../pages/fineJewelry";
import Gemstones from "../pages/gemstones";
import WeddingRing from "../pages/weddingRing";
import Page404 from "../pages/404page";
import Contact from "../pages/contact";
import RingBuilder from "../pages/ringBuiler";
import Login from "../pages/login";
import Signup from "../pages/signup";
import ProductDetail from "../pages/productdetail";

const Routers = () => {
  return (
    <React.Suspense>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diamons" element={<Diamons />} />
        <Route path="/education" element={<Education />} />
        <Route path="/engagementRing" element={<EngagementRing />} />
        <Route path="/fineJewelry" element={<FineJewelry />} />
        <Route path="/gemstones" element={<Gemstones />} />
        <Route path="/weddingRing" element={<WeddingRing />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ringbuilder" element={<RingBuilder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
    </React.Suspense>
  );
};

export default Routers;
