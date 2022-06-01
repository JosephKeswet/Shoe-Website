import React from 'react'
import SignUp from '../components/SignUp'

const SignUpPage = () => {
  return (
    <div>
        <SignUp    toHome="/" toLogin="/login" 
        firstValue= 'Name (surname first)'
        secondValue = 'Email Address'
        thirdValue = 'Password'
        fourthValue = 'Confirm Password'
        createAccount='CREATE ACCOUNT'
        terms="I accept the Terms & Conditions and Privacy and Cookie Notice."
        
        />
    </div>
  )
}

export default SignUpPage