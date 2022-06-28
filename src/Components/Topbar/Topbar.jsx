import React from "react"
import "./topbar.css"
import profileImg from "../../Images/Shahid.jpg"

export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                </div>
                <div className="topbarRight">
                    <img src={profileImg} className="topAvatar"></img>
                </div>
            </div>
        </div>
    )
}