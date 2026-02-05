// import Hero from "@/components/home/Hero";
// import FeaturedProducts from "@/components/home/FeaturedProducts";
// import CategoriesGrid from "@/components/home/CategoriesGrid";
// import Promotions from "@/components/home/Promotions";
// import Testimonials from "@/components/home/Testimonials";
// import TrustBadges from "@/components/home/TrustBadges";
// import Newsletter from "@/components/layout/Newsletter";
import React from "react";
import Wrapper from "./Wrapper";
import Home from './Home/Home'
export default function Layout() {
  return (
    <Wrapper>
      <Home />
    
      {/* <Hero />
      <FeaturedProducts />
      <CategoriesGrid />
      <Promotions />
      <Testimonials />
      <TrustBadges />
      <Newsletter /> */}
    </Wrapper>
  );
}
