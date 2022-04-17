
import { Button } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Home = () => {

    const navigate = useNavigate();


    return (
        <>
            <h3 style={{ fontFamily: "Serif", color: "#8F7FD2" }}>Welcome</h3>
            <Button variant='contained' onClick={()=>navigate("/admin")}>Admin log in</Button>

        </>
    )
}
