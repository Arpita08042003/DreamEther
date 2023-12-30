import React, {useContext} from "react";
import { AppContext } from "../context/provider";
import { Link } from "react-router-dom";
import { provider } from "../utils/daicontract";
import './Home.css'

function Home(){
    const {setSelectedAddress,connected,setConnected} =useContext(AppContext);
    let accounts;
    async function  connectToMetamask (){
        accounts = await provider.send('eth_requestAccounts',[]);
        setSelectedAddress(accounts[0]);
        setConnected(1);  
    }

    if(connected==0){
        return(
            <>  
                <div className='screenContainer'>
                    <div id="hoverme">
                        <Link to="/user"><button id="metamaskButton" onClick={()=>connectToMetamask()} ><h4>Connect To Metamask </h4></button></Link>
                    </div>
                </div>
            </>
        )
    }else{
        return(
            <>
                <div className='screenContainer'>
                    <div id="hoverme">
                        <Link to="/user"><button id="metamaskButton" ><h4><p style={{fontSize:'small',color:'gray',letterSpacing: '2px'}}>Already Connected To Metamask</p>Click To Continue </h4></button></Link>
                    </div>
                </div>
            </>
        )
    }

}

export default Home;