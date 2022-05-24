import React,{ PureComponent } from 'react'
import { Container } from './AdminHomepage.style'
import Navbar from '../../components/Navbar/NavAdmin'
import { FooterContainer } from '../../components/Footer/FooterContainer';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Recipe 1',
    Sales: 400,
    Profit: 240,
    amt: 240,
  },
  {
    name: 'Recipe 2',
    Sales: 300,
    Profit: 139,
    amt: 221,
  },
  {
    name: 'Recipe 3',
    Sales: 200,
    Profit: 980,
    amt: 229,
  },
  {
    name: 'Recipe 4',
      Sales: 278,
    Profit: 390,
    amt: 200,
  },
  {
    name: 'Recipe 5',
    Sales: 189,
    Profit: 480,
    amt: 218,
  },
  {
    name: 'Recipe 6',
    Sales: 239,
    Profit: 380,
    amt: 250,
  },
  {
    name: 'Recipe 7',
    Sales: 349,
    Profit: 430,
    amt: 210,
  },
];



function AdminHomepage() {

  var demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';
  return (
    <Container>
      <Navbar />

      <ResponsiveContainer width="50%" height="80%">
        <BarChart
          width={100}
          height={50}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sales" fill="#8884d8" />
          <Bar dataKey="Profit" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    
      <FooterContainer />
    </Container>    
  )
}

export default AdminHomepage