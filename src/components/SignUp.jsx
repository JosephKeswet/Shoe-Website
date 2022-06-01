import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import '../styles/SignUp.css'

const SignUp = ({toLogin,toHome,firstValue,secondValue,thirdValue,fourthValue,createAccount,terms}) => {
  return (
    <div className='input__container'>
      <div className='back__link__arrow'>
        <Link to={toHome} className='back__arrow'>
          <FontAwesomeIcon icon={faChevronLeft} className="chevron__right__icon" />
          </Link>
      </div>

      <h1>{createAccount}</h1>
      <form className="account__fields">
      <input type="text" placeholder={firstValue} className='input__details' />
      <input type="text" placeholder={secondValue} className='input__details'/>
      <input type="text" placeholder={thirdValue} className='input__details' />
      <input type="text" placeholder={fourthValue} className='input__details'/>
      <p className='terms__conditions'> <input type="radio" name="" id="" /> {terms}</p>
      
      {/* <div className='submit__form'> */}
      <input type="submit" value={createAccount} className='submit__form__btn' />
      {/* </div> */}
      <div className='link__account'>  
     <p>Already have an account?<Link to={toLogin} >LOGIN</Link></p>
      </div>
      

      </form>
    </div>
  )
}

export default SignUp