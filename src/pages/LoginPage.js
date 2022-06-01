import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

const LoginPage = () => {
  return (
    <div>
            <Login    toHome="/" toSignUp="/signup"
        // firstValue= 'Name (surname first)'
        secondValue = 'Email Address'
        thirdValue = 'Password'
        // fourthValue = 'Confirm Password'
        createAccount='LOGIN'
        terms="I accept the Terms & Conditions and Privacy and Cookie Notice."
        
        />
    </div>
  )
}

export default LoginPage