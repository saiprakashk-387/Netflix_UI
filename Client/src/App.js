import React, { useState } from 'react';
import Landingpage from './component/Pages/Landingpage';

const App = () => {
    window.scrollTo(0,0);
    const [isSignedIn, setIsSignedIn] = useState(null)
    const signin = () => {
      setIsSignedIn(true)
    }
    const signout = () => {
      setIsSignedIn(false)
    }
    return (
        <>
        <Landingpage/>
        </>
    );
};

export default App;