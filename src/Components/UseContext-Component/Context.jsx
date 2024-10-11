import React, { createContext, useState } from 'react'
export const inputContext = createContext()

const Context = (props) => {
    const [showLogin,setShowLogin] = useState(false)
    const [signUp,setSignUp] = useState("Sign Up")
    const [showNavMenu,setShowNavMenu]=useState(false)

    
    const providingData = {
      showLogin,
      setShowLogin,
      signUp,
      setSignUp,
      showNavMenu,
      setShowNavMenu,
    }
  return (
    <inputContext.Provider value={providingData}>
        {props.children}
    </inputContext.Provider>

  )
}

export default Context