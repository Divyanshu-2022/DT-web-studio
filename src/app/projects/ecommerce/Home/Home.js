import React from 'react'
import Hero from './Hero';
import Categories from './CatrgoriesGrid';
import FeaturedProducts from './FeaturedProducts';
import TrustBadges from './TrustBadges';
import Testimonials from './Testimonials';




function Home() {
  return (
    <div>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <TrustBadges />
        <Testimonials />
    </div>
  )
}

export default Home