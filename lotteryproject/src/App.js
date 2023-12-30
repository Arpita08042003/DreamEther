import './App.css';
import {Routes, Route,useNavigate } from "react-router-dom";
import {useContext, useEffect} from 'react';
import { AppContext } from './context/provider'; 
import Home from './page/Home';
import Buyer from './page/Buyer';
import Manager from './page/Manager'
import Rooms from './page/Rooms';
import User from './page/User';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossorigin="anonymous"
  />

  const {setConnected,connected} =useContext(AppContext);
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(window.ethereum ){
      window.ethereum.on("accountsChanged",()=>{
        setConnected(0);
        console.log('account changed')
        navigate('/', { replace: true });
      })
    }
  })
  useEffect(()=>{
    navigate('/', { replace: true });
  },[connected==0])


  return(
  
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/user/manager" element={<Manager/>}/>
        <Route path="/user/buyer" element={<Buyer/>}/>
        <Route path="/user/buyer/room" element={<Rooms/>}/>
    </Routes>
  
  )
}

export default App;
