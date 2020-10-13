import React from "react";
import logo from "../../../assets/Logo.png"

export const Logo =()=>{
    return(
        <div className="logo">
            <img className="logoImg" src={logo} alt=''></img>
            <h3 className="logoName">AuditKos</h3>
        </div>
    )
}
export default Logo