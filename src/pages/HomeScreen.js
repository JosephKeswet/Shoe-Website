import React from 'react'
import Card from '../components/Card'
import CardData from '../Data/CardData'
import TopDeals from '../components/TopDeals'
import Middle from '../components/Middle'
import Footer from '../components/Footer'
import SearchInput from '../components/SearchInput'



const HomeScreen = () => {
  return (
    <div>
      <div>
        <SearchInput/>
        <TopDeals 
        head="TOP DEALS"
        detail="The hottest shoes from our store right now."
        route="/account"
        />
        </div>
        <div className='scroller'>
        <Card details={CardData} />
        </div>
        <Middle/>
        <TopDeals 
        head="CATEGORIES"
        route="/help"
        />
        <div className='scroller test'>
        <Card details={CardData} />
        </div>

        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default HomeScreen