import React from "react"
import "./sidebar.css"
import {LineStyle, Timeline, TrendingUp,LocalHospital} from "@mui/icons-material"
import {SidebarData} from "./SidebarData.js"


export default function Sidebar(){
    return(
        <div>
            <div className="Sidebar">
            <div><LocalHospital className="logocolor" />
            <span className="logo" fontSize="large">digiPROM</span></div>
                <ul className="SidebarList">
                    {SidebarData.map((val, key)=> {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick={()=> {
                                window.location.pathname = val.link;
                            }}>
                                <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
                        </li>
                        );
                    })}
                </ul>
            </div>

        
           
        </div>
    )
}