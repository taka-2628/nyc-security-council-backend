import { useState } from "react";

import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import CloseBtn from "./Buttons/CloseBtn";



function LoginSignup( { neighborhoods, socialMedia } ){
  const [ isLogin, setIsLogin ] = useState(true);

  function handleSwitch(){
    console.log('login')
    setIsLogin(!isLogin);
  }

  return(
    <div id="login-signup" className="grid-container">
      <NavBar />
      <CloseBtn />
      { isLogin ? <LoginForm handleSwitch={handleSwitch}/> : <SignupForm handleSwitch={handleSwitch} neighborhoods={neighborhoods} socialMedia={socialMedia}/> }
    </div>
  )
}

export default LoginSignup;
