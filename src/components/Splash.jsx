import React, { useState, useEffect } from "react";
import logo from '../Images/logo.png'



function Splash() {
  const [showSplash, setShowSplash] = useState(true);

  function SplashScreen() {
    return (
      <div className="splash-screen">
        <img src={logo} alt="Logo" className="slogo" />
      </div>
    );
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div>
      {showSplash && <SplashScreen />}
    </div>
  );
}

export default Splash;
