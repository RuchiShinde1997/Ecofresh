/**
 * @author Sumadhur Vaidyula
 */

import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from '../../components/Navbar/NavSupplier';
import { FooterContainer } from '../../components/Footer/FooterContainer';
import { pantryAPI } from '../../api/API';
import axios from 'axios';
import AppButton from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
function createData(Item, Quantity) {
  return { Item, Quantity };
}




export default function BasicTable() {
  let navigate = useNavigate();


  const [Data, setData] = useState([]);
  const [showdata, setShowData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios.get(`${pantryAPI}pantry/`).then((data) => {
      if (data.status) {
        setData(data.data)
        setShowData(data.data)
      }
      else {
        setIsError(true)
      }
    });
  }, []);


  console.log(showdata)



  const handleClick = (element,value) => {
    console.log(element)
  
    navigate(`/supplier/pantry/add-pantry/${element}`,
    {
      state :{
        item: element,
      existing_quantity: value
      }
    })
}



  return (

    <TableContainer component={Paper} >
      <Navbar></Navbar>
      <Table sx={{ minWidth: 10 }} aria-label="simple table">
        <TableHead style={{backgroundColor:'#77e090'}}>
          <TableRow variant="h1">
            <TableCell align='center' >Items</TableCell>
            <TableCell align='center'>Quantity</TableCell>
            <TableCell align='center'>Add Items to Pantry</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {showdata.map((data) => (
            
            
            
            Object.values(data.Items).map((ele) => (
              <>
                <TableRow
                  key={Object.values(data.Items).map((ele) => (
                    `${ele[0]}`
                  ))}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align='center' style={{backgroundColor:'#ffffff'}}>
                    {ele[0]}
                  </TableCell>

                  <TableCell align='center' style={{backgroundColor:'#fffff'}}>
                    {ele[1]}
                  </TableCell>

                  
                  <TableCell align='center' style={{backgroundColor:'#ffffff'}}>
                    <AppButton color="secondary"  onClick={() => handleClick(ele[0],ele[1])}> Add </AppButton>
                  </TableCell>
            </TableRow>
                </>
              ))


          ))}
        </TableBody>
      </Table>

      <FooterContainer />
    </TableContainer>
  );
}
