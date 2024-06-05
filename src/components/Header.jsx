import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className=' font-bold flex gap-4 bg-blue-400 p-4 justify-center m-auto'>
      <Link to='/'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  )
}

