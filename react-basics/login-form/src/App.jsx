import { useState } from 'react'

import './App.css'


      function App(){
        const [showPassword, setShowPassword] = useState(false);
        function toggleShowPassword() {
          if (showPassword) {
              setShowPassword(false);
            } else {
              setShowPassword(true);
            }
        }
        return(
          <>
            <p className="tittle"> Hello, welcome to my wesite </p> 
            
            <div>
                <input 
                  placeholder= "Email"
                  className= "textbox-container"
                />
            </div>
            
            <div> 
                <input 
                  className= "textbox-container"
                  type = {showPassword ? 'text' : 'password'}
                  placeholder= "Password"
                /> 
                <button
                  className="show-button"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            
            <button className = "login-button"> Login </button>
            <button className = "login-button"> Sign up </button>
          </>
        )
      }
      



export default App
