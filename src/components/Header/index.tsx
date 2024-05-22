import React from "react"
import "./style.css"
import { Button } from "../Button"

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">LOGO</div>
        <div className="header__button">
          <Button linkTo="/">
            Home
          </Button>
        </div>
      </div>
    </header>
  )
}
