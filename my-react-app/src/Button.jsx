import { useState } from "react";

function Button(){

    const [toggle, setToggle] = useState(true);
    const toggleButton= ()=>{
        setToggle(!toggle);
    }


    const [like, setLike] = useState(true);
    const likeButton= ()=>{
        setLike(!like);
    }

    
    const [mode, setMode] = useState(true);
    const modeButton= ()=>{
        setMode(!mode);
    }

    
    const [red, setRed] = useState(true);
    const redButton= ()=>{
        setRed(!red);
    }

    const [green, setGreen] = useState(true);
    const greenButton= ()=>{
        setGreen(!green);
    }

    const [yellow, setYellow] = useState(true);
    const yellowButton= ()=>{
        setYellow(!yellow);
    }

    return(<>
        <button onClick={toggleButton}>{toggle ? "Show": "Hide"}</button>
        <p className={mode ? "light": "dark"}>{toggle? "":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque repellat nesciunt, perferendis cum facere consequatur nulla odio voluptates deleniti tempore distinctio consectetur magnam vel impedit aliquam animi pariatur reiciendis qui."}</p>
        
        <button onClick={likeButton}>{like ? "Like": "Unlike"}</button>

        
        <button onClick={modeButton}>{mode ? "Light Mode": "Dark Mode"}</button>

        <button onClick={redButton}>Red</button>
            <p className={mode ? "light": "dark"}>{red? "":"REDDDD LIGHT REDDDD LIGHT!!!!"}</p>

        <button onClick={greenButton}>Green</button>
            <p className={mode ? "light": "dark"}>{green? "":"GREEENN LIGHT GREENN LIGHT!!!!"}</p>
        <button onClick={yellowButton}>Yellow</button>
            <p className={mode ? "light": "dark"}>{yellow? "":"YELLOWWW LIGHT YELLOWW LIGHT!!!!"}</p>
        
       
    </>)


}

export default Button;