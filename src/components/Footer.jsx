import React from 'react'
import Shoe from '../images/ShoeFooter.png'
import '../styles/Footer.css'


const Footer = () => {
  return (
    <div>
        <div className="footer__container">
            <div className='footer__shoe'>
            <img src={Shoe} alt="" />
            </div>
            <div className="footer__content">
                <h3>Paul Smith</h3>
                <h1>SIERRA LOW TOP SNEAKERS</h1>
                <ul>
                    <li>Lining: Fabric 100%</li>
                    <li>Outer: Fabric 100%</li>
                    <li>Sole: Rubber 100%</li>
                </ul>
                <button>VIEW</button>
            </div>
            
        </div>
    </div>
  )
}

export default Footer