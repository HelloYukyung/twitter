import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {
  const[init,setInit]= useState(false)// 초기화되지 않은 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{// onAuthStateChanged :eventlistener,사용자의 로그인 상태의 변화를 관찰하는 관찰자 
      if(user){
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)// init 이 false라면 router를 숨김 
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