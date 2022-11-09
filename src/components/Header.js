import React from "react"
import "./style.css"
export default function Header() {
    return (
        <header className="header">
            <img class="header--image" src="./images/trollface_PNG48" />
            <h2 class="header--title">Header component</h2>
            <h4 class="header--project">React Course - Project 3</h4>
        </header>
    )
}