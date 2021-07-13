import React from "react"
import "./style.css"
import Button from "./button"

const Apple=()=>{
    return(
        <div>
            <h1 style={{ textAlign : "center"}}> Hello world </h1>
            <h3 style={{ textAlign : "center"}} > WELCOME TO MY PAGE</h3> 
            <Button buttonText="home"/>
            <Button buttonText="about"/>
            <Button buttonText="feedback"/>
       </div>
       
    )
}

export default Apple