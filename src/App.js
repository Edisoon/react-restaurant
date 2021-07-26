import React, {useState, useEffect} from "react";
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header.jsx';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
import {css} from '@emotion/react';
import SyncLoader from 'react-spinners/SyncLoader'


function App() {
const[loading,setLoading] = useState(false);
const override = css `
display:block;
border-color:red;
margin-top:20%;
`;
useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000);
}, []);

  return (
    <div className="App">
      {
        loading ? <SyncLoader color={"#91091E"} loading={loading} css={override} size={40}/>
        :
        <>
        <Navbar/>
        <Header/>
        <Products/>
        <About/>
        <Contact/>
        </>
      }

    </div>
  );
}

export default App;
