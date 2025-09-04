import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Cards} from "./components/cards/Cards.jsx";

function App() {
    const data = {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    };

    const data2 = {
        title: 'Special title treatment',
        text: 'With supporting text below as a natural lead-in to additional content.',
    };


  return (
    <>
     <Cards text={data}></Cards>

     <Cards text={data}>
         <img src="https://png.pngtree.com/background/20230516/original/pngtree-cute-kitten-wallpapers-picture-image_2615776.jpg" alt="test"/>
     </Cards>
    </>
  )
}

export default App
