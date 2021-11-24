import React from "react"
import Troll from "../img/trollface.png"


export default function Header() {
  return (
    <header className="header">
      <img src={Troll} alt="" className="header__logo" />
      <h1 className="header__title">Meme Generator</h1>
    </header>
  )
}