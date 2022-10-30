import React, { useEffect } from 'react'
import NavBar from './NavBar'

const AppLayout = ({ children }) => {
  
    useEffect(() => {
      
    
      return () => {
      
      }
    }, [])
    
  
    return (
        <div>
            <NavBar />
            { children }
        </div>
  )
}

export default AppLayout