import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';

export const Teachers = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios("http://localhost:8080/teachers")
            setData(response.data)

            // console.log(data);
        };
        fetchPost();
    }, []);


    return (
        <div>


            <h3 style={{ fontFamily: "Serif", color: "#8F7FD2" }}>List</h3>
            <Divider />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Gender</TableCell>
                            <TableCell align="left">Age</TableCell>
                            <TableCell align="left">Class</TableCell>
                            <TableCell align="left">Grade</TableCell>
                            <TableCell align="left">Section</TableCell>
                            <TableCell align="left">Subject</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.teacherName}</TableCell>
                                <TableCell align="left">{row.gender}</TableCell>
                                <TableCell align="left">{row.age}</TableCell>
                                <TableCell align="left">{row.class}</TableCell>
                                <TableCell align="left">{row.grade}</TableCell>
                                <TableCell align="left">{row.section}</TableCell>
                                <TableCell align="left">{row.subject}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    )
}
