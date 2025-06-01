import React from 'react'

import Carousel from '../Home/Carousel'
import Categories from '../Home/Categories'
import FeaturedProducts from '../Home/FeaturedProducts'
import Featurestart from '../Home/Featurestart'
import Offer from '../Home/Offer'
import Recentproducts from '../Home/Recentproducts'

export default function Home() {
  return (
    <>
    <Carousel />
    <Featurestart />
    <Categories />
    <FeaturedProducts />
    <Offer />
    <Recentproducts />
    {/* <Vender /> */}
    
    </>
  )
}
