import React from 'react'
import "../styles/Dropdown.css"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'


const DropDown = ({details,dropdownName}) => {
  const [drop, setDrop] = useState(false)
  const dropList = ()=>{
    if (drop === false) {
      setDrop(true);  
    }else{
      setDrop(false)
    }
    
  }


  return (
    <div className='dropdown__container'>
       <label htmlFor="dropdown" className='dropdown__title' onClick={dropList}>{dropdownName} <span className="dropdown__icon" onClick={dropList}><FontAwesomeIcon icon={faAngleDown}  /></span></label>
      {details.map((product)=>(
        <div>
          <ul className={`dropdown__list ${drop && "dropdown__show"}`}>
            <li> {dropdownName} </li>
          </ul>
          </div>
      ))}
    
    </div>
  )
}

export default DropDown