import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {
  const[init,setInit]= useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)// init 이 fals라면 router를 숨김 
    })
  },[] )
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "initializing..."}
      <footer>&copy; {new Date().getFullYear()} Kwitter</footer>
    </>
  );
}

export default App;