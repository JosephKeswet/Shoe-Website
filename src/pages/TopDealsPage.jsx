import React from "react"
import Nav from "../components/Nav"
import DropDown from "../components/DropDown"
import CardData from '../Data/CardData'
import Colors from "../Data/Colors"
import Card from "../components/Card"
import TopDeals from "../components/TopDeals"
import '../styles/TopDealsPage.css'
import Button from "../components/Button"
import SearchInput from "../components/SearchInput"


const TopDealsPage = () => {
  return (
    <div>
      <SearchInput/>
        <div className="topdeal__cat">
            <div className="cat__container">
        <h1>CATEGORIES</h1>
        <DropDown
        details={CardData}
        dropdownName="BRAND"
        />
        <DropDown
        details={Colors}
        dropdownName="COLOR"
        />
        </div>
    {/* Var Cards */}
    <div>
        <div className="grid">
        {CardData.map((product) =>(
                    <div className="grid__container">
                  <img src={product.img} alt="" />
                  <h3 className="shoe__brand">{product.shoeBrand}</h3>
                  <h3 className="shoe__name">{product.shoeName}</h3>
                  <h3 className="price"> $ {product.price} </h3>
                  </div> 
        ))
      
    }
    </div>
    </div>
     
        </div>
    
    </div>
  )
}

export default TopDealsPage