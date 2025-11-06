import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from './assets/logo.jpg';
import Navbar from './components/navbar';
import Img from './components/img';
import Card from './components/Card';
import Button from './components/Button';
import Links from './components/Links';
function App() {

  return (
    <div>
      {/* <Navbar/> */}
      <Navbar home='ABES'/>
     <Card name='Adtya' edu='Phd' />
     <Card name='Deepak' edu='MCA' />
     <Card name='Sachin' edu='Btech'/>
     <Links/>
    </div>
  );

}

export default App
