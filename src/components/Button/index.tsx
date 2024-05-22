import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

interface Props {
  linkTo?: string
  style?: React.CSSProperties
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  withBackground?:boolean
}

export const Button: React.FC<Props> = ({ linkTo, children, style = {}, onClick, disabled, withBackground }) => {
  return (
    <>
      {linkTo ? (
        <Link className={`btn ${withBackground ? 'btn--withBg' : ''}`} style={style} to={linkTo}>
          {children}
        </Link>
      ) : (
        <button className={`btn ${withBackground ? 'btn--withBg' : ''}`} style={style} onClick={onClick} disabled={disabled}>
          {children}
        </button>
      )}
    </>
  )
}
