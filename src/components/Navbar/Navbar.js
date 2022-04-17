import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{ display: "flex", alignItems: "start", marginTop: "1em" }}>
      <div style={{ marginLeft: "1em" }}>
        <Link style={{ textDecoration: "none" }} to="/"><Button variant='contained'>Home</Button></Link>
      </div>
      <div style={{ marginLeft: "1em" }}>

        <Link style={{ textDecoration: "none" }} to="/admin"><Button variant='contained'>Admin</Button></Link>
      </div>
    </div>
  )
}
