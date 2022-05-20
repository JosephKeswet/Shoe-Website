import React from 'react'
import '../styles/SignUp.css'

const SignUp = () => {
  return (
    <div className='input__container'>
      <h1>CREATE ACCOUNT</h1>
      <form className="account__fields">
      <input type="text" className='input__details' />
      <input type="text" className='input__details'/>
      <input type="text" className='input__details' />
      <input type="text" className='input__details'/>
      <p>I accept the Terms & Conditions and Privacy and Cookie Notice.</p>
      <div className='link__account'>  
      <p>Already have an account? Login</p>
      </div>
      <div className='submit__form'>
      <input type="submit" value="CREATE ACCOUNT" className='submit__form__btn' />
      </div>
      

      </form>
    </div>
  )
}

export default SignUp