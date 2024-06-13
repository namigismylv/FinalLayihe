import React from 'react'
import FeaturedGames from '../../../Components/Site/Sections/featured_games_sec/FeaturedGames'
import Newswire from '../../../Components/Site/Sections/newswire_sec/Newswire'
import './Home.css'
import HeroSec from '../../../Components/Site/Sections/hero_sec/HeroSec'
const Home = () => {
  return (
    <main>
      <HeroSec/>
      <Newswire/>
      <FeaturedGames/>
    </main>
  )
}

export default Home
