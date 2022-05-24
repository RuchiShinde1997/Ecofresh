/**
 * @author Sumadhur Vaidyula
 */


import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import AppButton from "../../components/Button/Button";
import axios from 'axios';
import { orderAPI } from '../../api/API';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../../components/Navbar/NavSupplier';
import { FooterContainer } from '../../components/Footer/FooterContainer'


const theme = createTheme();

export default function Orders() {

  let navigate = useNavigate();




  const [Data, setData] = useState([]);
  const [showdata, setShowData] = useState([]);
  const [isError, setIsError] = useState(false);
  const params = useParams();


  useEffect(() => {
    axios.get(`${orderAPI}orders/`).then((data) => {
      console.log(data);
      if (data.status) {
        setData(data.data)
        setShowData(data.data)
      }
      else {
        setIsError(true)
      }
    });
  }, []);


  const handleCardClick = (id) => {
    navigate(`/supplier/orders/${id}`)
}


const handleCancelClick = (id) => {
  axios.post(`${orderAPI}cancel/${id}`).then((data) => {
    console.log(data);
    if (data.status) {
      setIsError(false)
  }
  else {
      setIsError(true)
  }
  });
  navigate(`/supplier/orders/cancel/${id}`)
}

  return (

    <React.Fragment>
      <Navbar />
   
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}

        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Current Orders
            </Typography>


          </Container>
        </Box>



        <Box
          sx={{
           
            pt: 5,
            pb: 2,
          }}
        >
        <Container container spacing={2} maxWidth="400">
        
        <Grid  padding="4rem" container spacing={{xs:2,md:3}} columns={{xs:5,sm:8,md:12}}> 
            
            {showdata.map((ele) => (
          
              <Card style={{backgroundColor: "#ffffff"}} sx={{display:'flex', margin:'20px', maxWidth:'250px', flexWrap: 'wrap' }} >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" color="black">
                    {ele.orderId}
                  </Typography>

                   <Typography color="black"  variant={"h6"}>
                   Recipe Name:
                   </Typography>
                  <Typography component={"div"} color="black" >
                     {ele.recipeName &&
                      `${ele.recipeName.slice(0, 1).toUpperCase()}${ele.recipeName.slice(1, ele.recipeName.length)}. `
                    }
                   
                  </Typography>
                  <Typography color="black">
                    Username:
                  </Typography>
                  <Typography  color="black">
                {ele.userId}
                  </Typography>
                  <Typography  color="#ffffff">
                    Status: {ele.status}
                  </Typography>

                </CardContent>
                <CardActions>
                <AppButton color="secondary"
                                       onClick={() => handleCardClick(ele.orderId)} >
                                        View
                                    </AppButton>
                                    <AppButton color="secondary"
                                       onClick={() => handleCancelClick(ele.orderId)} >
                                        Cancel
                                    </AppButton>
                </CardActions>
              </Card>

            ))}
          </Grid>
        
     
        </Container>
        </Box>
      

      <FooterContainer />
  </React.Fragment>


  );
}