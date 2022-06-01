import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

const Login = ({toSignUp,secondValue,thirdValue,toHome,createAccount}) => {
    return (
        <div className='input__container'>
          <div className='back__link__arrow'>
            <Link to={toHome} className='back__arrow'>
              <FontAwesomeIcon icon={faChevronLeft} className="chevron__right__icon" />
              </Link>
          </div>
    
          <h1>{createAccount}</h1>
          <form className="account__fields">
          <input type="text" placeholder={secondValue} className='input__details'/>
          <input type="text" placeholder={thirdValue} className='input__details' />
          
          {/* <div className='submit__form'> */}
          <input type="submit" value={createAccount} className='submit__form__btn' />
          {/* </div> */}
          <div className='link__account'>  
         <p>Don't have an account?<Link to={toSignUp} >SIGNUP</Link></p>
          </div>
          
    
          </form>
        </div>
      )
}

export default Login