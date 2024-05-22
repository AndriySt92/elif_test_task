import React from "react"
import "./style.css"
import { Outlet } from "react-router-dom"
import { Header } from "../Header"

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
