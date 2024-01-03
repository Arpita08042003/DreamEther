import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { AppContext } from '../context/provider';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { provider } from '../utils/daicontract';
import { ethers } from 'ethers'; 

function Header(){
    const {connected,selectedAddress,setConnected} =useContext(AppContext);
    const [balance,setBalance] = useState(-1);
     
    async function setbalance(){
        var Balance = await provider.getBalance(selectedAddress);
        Balance = ethers.utils.formatEther(Balance);
        setBalance(Balance);
        console.log(balance)
    }

    function logOut(){
        setConnected(0);
        
    }

    function SignIn(){
        if(connected){            
            return(<NavDropdown  title="Profile" onClick={()=>setbalance()} id="headerNavDrop">
                <NavDropdown.Item ><div className='dropItem'>
                            <p className='dropItemname'>Address</p>
                            <h6 className='dropItemValue'>{selectedAddress}</h6>
                        </div></NavDropdown.Item>
                <NavDropdown.Item><div className='dropItem'>
                            <p className='dropItemname'>Balance (ETH)</p>
                            <h6 className='dropItemValue'>{balance} </h6>
                        </div></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>logOut()}><p className='sign'>Logout</p></NavDropdown.Item>
            </NavDropdown>)
        }
    };

    return(
        <div id="header">
            <Nav>
                <Container id="headerContainer">
                    <Navbar.Brand><h3 id='headerTitle' >DreamEther</h3></Navbar.Brand>
                    {SignIn()}
                </Container>
            </Nav>
        </div>
    )
}



export default Header;