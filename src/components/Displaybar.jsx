import React from 'react'
import services from '../Images/services.png'

function Displaybar() {
  return (
    
        <div className="display-bar">
                <div className="info">Trusted by veterans Across the Services</div>
                <div className="heart">♥</div>
                <img src={services} alt="services" />
        
            </div>
    
  )
}

export default Displaybar