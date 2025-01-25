import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {GoogleLogin} from 'react-google-login'

function App() {

  const responseGoogle = response =>{
    console.log(response)
  }
  const responseError = error =>{
    console.log(error)
  }
  return (
    <>
      <div tag = "OAuthAndSignIn">
        <button onClick={OAuthAndSignIn}>Sign In</button>
        <GoogleLogin 
          clientId='403097048891-enf7qgq6bp95hjhjhsmulkvltsde7p14.apps.googleusercontent.com'
          buttonText = 'Sign in & Authorize Calender'
          onSuccess={responseGoogle}
          onFailure={responseError}
          cookiePolicy={'single_host_origin'}
          // This is important
          responseType='code'
          accessType='offline'
          scope ='openid email profile https://www.googleapis.com/auth/calendar' // have to ad scope 
        />
      </div>

    </>
  )
}
function OAuthAndSignIn(){
  console.log("OAuth")
}
export default App
