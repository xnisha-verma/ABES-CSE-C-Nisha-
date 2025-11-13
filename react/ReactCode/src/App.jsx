// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import img from './assets/logo.jpg';
// import Navbar from './components/navbar';
// import Img from './components/img';
// import Card from './components/Card';
// import Button from './components/Button';
// import Links from './components/Links';
// function App() {

import { useEffect, useState } from "react"
import Fashion from "./components/Fashion"

//   return (
//     <div>
//       {/* <Navbar/> */}
//       <Navbar home='ABES'/>
//      <Card name='Adtya' edu='Phd' />
//      <Card name='Deepak' edu='MCA' />
//      <Card name='Sachin' edu='Btech'/>
//      <Links/>

//     </div>
//   );

// }

// export default App

// const App = () => {
//   const [books,setBooks] = useState([])
//   useEffect(()=>{
//     fetch("https://fakestoreapi.com/products").then(res=>res.json())
//     .then(data=>{
//       setBooks(data)
//     })
//   },[])
//   return (
//     <div>
//       {
//         books.map((b,i)=>(
//           <Fashion key={i} title={b.title} price={b.price} img={b.image}/>
//         ))
//       }
     
//     </div>
//   )
// }
// export default App;
import Weather from "./components/Weather";
import { useState } from "react";
const App = () => {
  const [weather, setWeather] = useState(null);
  useEffect(()=>{
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  },[])
  return (
    <div>
      {
        weather.map((w,i)=>(
          <Weather key={i} temperature_2m={w.current} time={w.temperature_unit}  />
        ))
      }
      </div>
  )
}
export default App;