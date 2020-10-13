import React,{Component} from "react"
import { Items } from "./Items"
import { Socials } from "./Socials"
 const Footer=()=>{
    return(
        <div className="footer">
          <div className="footerContainer">
          <div className="itemsContainer">
              <Items/>
            </div>
            <hr/>
            <div className="socialsContainer">
               <Socials/>
            </div>
          </div>
        </div>
    )
}

export default Footer
