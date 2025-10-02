import { useState } from "react";
import Cart from "./Cart";
function Signup(props) {
    const [isLoggedIn, setIsloggedIn] = useState(props.isLoggedIn);
  
      const toggleButton = () => {

            setIsloggedIn(!isLoggedIn);
    
        };
    
          const cartItems = [
            {name:"almond", price: "50 Rupee", category : "dry-fruit"},
            
            {name:"banana", price: "550 Rupee", category : "fruit"},
            
            {name:"mango", price: "450 Rupee", category : "fruit"}];   

         const age = props.age;

            const [isDarkMode, setIsDarkMode]= useState(false);
        const modeChanger=()=>{

            setIsDarkMode(!isDarkMode)

        }
  
  return (
    <><div className={isDarkMode ? "dark" : "light"}>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" href="#">
          AMAZON
        </a>
        <button className="loginButton" onClick={toggleButton} >
          {isLoggedIn ? "Log Out" : "Log   In"}</button>
        <button className={isDarkMode ? "dark" : "light"}onClick={modeChanger} >{isDarkMode ? "🌞 Light Mode":"🌙 Dark Mode" }
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Features
            </a>
            <a class="nav-item nav-link" href="#">
              Pricing
            </a>
            <a
              class="nav-item nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
        </div>
      </nav>
      <h3>{!isLoggedIn ? "Please log In to continue...":"Welcome Back, Aliyan!"}</h3>

      <h5>{!isLoggedIn ?  "":(age >= 18? "You're eligitble for vote":"You are too young") }</h5>
       <h3>{!isLoggedIn ? "":<Cart  cartItems = {cartItems}/>}</h3>
       
</div>
      
    </>
  );
}

export default Signup;
