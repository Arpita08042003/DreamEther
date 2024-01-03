import React,{useContext, useState} from "react";
import { ethers } from "ethers";
import { AppContext } from "../context/provider";
import { daiContractWithSigner} from "../utils/daicontract";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Manager.css'
import Modal from 'react-bootstrap/Modal'; 
import { Link } from "react-router-dom";
 

function Manager(){
    
    const {selectedAddress} =useContext(AppContext);
    const [price,setPrice] = useState("");
    const [currentStatus,setCurrentStatus] = useState(false);
    const [noOfCurrentPlayer,setNoOfCureentPlayer] = useState(0);
    const [listPlayer,setListPlayer] = useState([]);
    const [showStart, setShowStart] = useState(false);
    const [showEnd, setShowEnd] = useState(false);    
    const [showDetails, setShowDetails] = useState(false);
    const [showListOfPlayer, setShowListOfPlayer] = useState(false);    
    const [showError, setShowError] = useState(false);
     

    // Start Function
        async function  start(){
            try {
                await daiContractWithSigner.start();
                handleStartClose();
            }catch (e) {
                handleStartClose();
                handleErrorShow();            
            }   
        }
        // start_Dailogbox
        function handleStartClose  () { setShowStart(false)};
        function handleStartShow () { setShowStart(true)};
        function startModal(){
            return(
                <Modal
                    show={showStart}
                    onHide={()=>handleStartClose()}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Start Lottery</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Do you want to a Lottery round !!
                    </Modal.Body>
                    <Modal.Footer>
                    <button variant="secondary" className="userButton" onClick={()=>handleStartClose()}>
                        <a className="userButtonEnd" >Not Now !!</a>
                    </button>
                    <button variant="primary" className="userButton" onClick={()=>start()}><a className="userButtonStart">Start..</a></button>
                    </Modal.Footer>
                </Modal>
            )
        }

    // GetDetails
        async function getDetails(){
            try{
                const value = await daiContractWithSigner.managerCommand();
                setCurrentStatus(value[0]);
                setPrice((value[1]/(1000000000000000000)).toString());
                setNoOfCureentPlayer(value[2].toNumber());
                handleDetailsShow();             
            }catch(e){
                handleErrorShow();
            }
        }
        // GetDetails_DailogBox
        function handleDetailsClose  () { setShowDetails(false)}
        function handleDetailsShow  () {setShowDetails(true)}
        function detailsModal(){
            return( 
                <Modal show={showDetails} onHide={()=>handleDetailsClose()} animation={false}>
                        <Modal.Header closeButton>
                        <Modal.Title>Know All About Your Lottery Status</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div className='dropItem'>
                                    <p className='dropItemname'>Started Lottery</p>
                                    <h6 className='dropItemValue'>{String(currentStatus)}</h6>
                        </div>
                        </Modal.Body>
                        <Modal.Body>
                        <div className='dropItem'>
                                    <p className='dropItemname'>No Of Players Taken Part</p>
                                    <h6 className='dropItemValue'>{noOfCurrentPlayer}</h6>
                        </div>
                        </Modal.Body>
                        <Modal.Body>
                        <div className='dropItem'>
                                    <p className='dropItemname'>Amount Collected</p>
                                    <h6 className='dropItemValue'>{price}</h6>
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <button className="userButton" variant="secondary" onClick={()=>handleDetailsClose()}>
                            <a className="userButtonA">Okay!!! Close</a>
                        </button>
                        
                        </Modal.Footer>
                    </Modal>
                
                )
        }


    // End
        async function  end(){
            try {
                await getDetails();
                const amount = {value:ethers.utils.parseEther(price)}
                const value = await daiContractWithSigner.end(amount);
                await value.wait();
                handleEndClose();
            }catch (e) {
                handleEndClose();
                handleErrorShow();
            }             
        }
        // End_Dailogbox
        function handleEndClose  () { setShowEnd(false)};
        function handleEndShow () { setShowEnd(true)};
        function endModal(){
            return(
                <Modal
                    show={showEnd}
                    onHide={()=>handleEndClose()}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>End Lottery</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Do you want to end your Lottery Round !!
                    </Modal.Body>
                    <Modal.Footer>
                    <button variant="secondary" className="userButton" onClick={()=>handleEndClose()}>
                        <a className="userButtonA" >Not Now, Wait !!</a>
                    </button>
                    <button variant="primary" className="userButton" onClick={()=>end()}><a className="userButtonEnd">End</a></button>
                    </Modal.Footer>
                </Modal>
            )
        }


    // ListOfPlayer
        async function showAllPLayer(){
            try {
                const value =await daiContractWithSigner.playerlist(selectedAddress);
                setListPlayer(value);
                handleListOfPlayerShow();
            }catch (e) {
                handleErrorShow();
            }
        }
        // listOfPlayer_Dailogbox
        function handleListOfPlayerClose  () { setShowListOfPlayer(false)}
        function handleListOfPlayerShow  () {setShowListOfPlayer(true)}
        function ListOfPlayerModal(){
        return( 
            <Modal show={showListOfPlayer} onHide={()=>handleListOfPlayerClose()} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>List Of Players Taken Part</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{listPlayer?.map((key,index)=>{
                        return(
                            <p>{index+1}. {key}</p>
                        )
                    })}</Modal.Body> 
                    <Modal.Footer>
                    <button className="userButton" variant="secondary" onClick={()=>handleListOfPlayerClose()}>
                        <a className="userButtonA">Okay!!! Close</a>
                    </button>
                    </Modal.Footer>
                </Modal>
            
            )
        }

    // handle error dailog
        function handleErrorClose () { setShowError(false)};
        function handleErrorShow () { setShowError(true)};
        function errorModal (){
        return( 
            <Modal show={showError} onHide={()=>handleErrorClose()} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body><h6>Opps!! Somethings is wrong</h6><a target="_blank" href='/error' >checkHere...</a></Modal.Body>
                <Modal.Footer>
                    <button className="userButton" variant="secondary" onClick={()=>handleErrorClose()}>
                        <a className="userButtonA">Ohkay!!! Close</a>
                    </button>                
                </Modal.Footer>
            </Modal>)
        }
    
    return(
        <>
            <div className="screenContainer">
                <Container>
                    <Row>
                        <Col sm>
                            <div className="userCard">
                                <h5>Start</h5>
                                <button className="userButton"  onClick={()=>handleStartShow()} ><a className="userButtonStart">Start</a></button> 
                                <p>About Us --- Anim pariatur cliche reprehenderit, enim eiusmod high life  </p>
                            </div>
                        </Col>
                        <Col sm>
                            <div className="userCard">
                                <h5>End</h5>
                                <button className="userButton" onClick={()=>handleEndShow ()}><a className="userButtonEnd">End</a></button>
                                <p>About Us --- Anim pariatur cliche reprehenderit, enim eiusmod high life  </p>
                            </div>
                        </Col>
                        <Col sm>
                            <div className="userCard">
                                <h5>Status</h5>
                                <button className="userButton" onClick={()=>getDetails()}><a className="userButtonA">Status</a></button>
                                <p>About Us --- Anim pariatur cliche reprehenderit, enim eiusmod high life  </p>
                            </div>
                        </Col>
                        <Col sm>
                            <div className="userCard">
                                <h5>Players</h5>
                                <button className="userButton" onClick={()=>showAllPLayer()}><a className="userButtonA">Players</a></button>
                                <p>About Us --- Anim pariatur cliche reprehenderit, enim eiusmod high life  </p>
                            </div>
                        </Col>
                    </Row>
                </Container> 
                {startModal()}
                {errorModal()}
                {endModal()}
                {detailsModal()}
                {ListOfPlayerModal()};                
            </div>
        </>
    )
}

export default Manager;