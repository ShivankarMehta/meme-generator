import React from "react"
import "./style.css"
export default function Header() {
    return (
        <header className="header">
            <img className="header--image" alt="header-img" src="./images/trollface_PNG48" />
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}