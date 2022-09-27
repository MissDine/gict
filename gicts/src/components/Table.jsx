import React, { useEffect, useState } from 'react'
import axios from "axios"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(fullName, Email, Phone, Address) {
  return { fullName, Email, Phone, Address };
}

const rows = [
  createData('Example name', 'example@mail.com', '0700000000', '32, Nrb')
];

const token = 'ALDJAK23423JKSLAJAF23423J23SAD3'

const DataTable = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [repeater, setRepeater] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await axios.get("http://developers.gictsystems.com/api/dummy/items", {
        headers: {
          "Authorization": `Bearer ${token}`,
          'Access-Control-Allow-Origin': "*"
        }
      })
      console.log(response)
      setData(response.data)
      setIsLoading(false)
    }
  
    fetchData()
    setTimeout(() => setRepeater(prevState=>prevState+1), 100000);
  },[repeater])

  const handleEdit = () => {
    // handle editing an item from the table
  }

  console.log(data)
  return (
    <div style={{margin: '25px 100px'}}>
      <TableContainer component={Paper} sx={{boxShadow: 'none'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>FullName</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <TableCell align="right">{row.Email}</TableCell>
                <TableCell align="right">{row.Phone}</TableCell>
                <TableCell align="right">{row.Address} <button onClick={() => handleEdit()}>Edit</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataTable
