import React from 'react'
import './style.css'

interface Props {
  error: string
}

export const Error: React.FC<Props> = ({error}) => {
  return (
    <div className='error'>{error}</div>
  )
}
