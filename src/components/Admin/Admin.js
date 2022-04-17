import { Button, InputLabel, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export const Admin = () => {


    const navigate = useNavigate();

    const [data, setData] = useState({
        adminName: "",
        password: "",
    });

    const handleSubmit = (e) => {
        axios.post("http://localhost:8080/admins", data)
        navigate("/");
    }

    const handleChange = (e) => {

        const { id, value } = e.target;

        setData({
            ...data,
            [id]: value
        })
    }


    return (
        <>
            <InputLabel stye={{ color: "#6699C9" }} >Log in Admin</InputLabel>

            <TextField sx={{ mt: "1em" }} onChange={handleChange} id="adminName" label="Enter ID" variant="outlined" />

            <br />

            <TextField sx={{ mt: "1em" }} onChange={handleChange} type="password" id="password" label="Enter password" variant="outlined" />

            <br />

            <Button
                // disabled={!ID || !password}
                onClick={handleSubmit} sx={{ mt: "1em" }} variant="contained">Log in</Button>
        </>
    )
}
