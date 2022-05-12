import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import '../styles/TopDeals.css'


const TopDeals = ({detail,head,route}) => {
    // Use the useHistory hook to push to next page for the view all navigation helps to save previous page route so if you click back it goes back to the last page


  return (
    <div>
        
        <h1 className='top__deal__header'>
            {head}
            <span>

                <Link to="/test" className='view__all__route'>
                    VIEW ALL
                    <FontAwesomeIcon icon={faChevronRight} className="chevron__right__icon" />
                </Link>
            </span>
        </h1>
        <p className='top__deal_para'> {detail} </p>
    </div>
  )
}

export default TopDeals