import React,{useState,useContext} from "react";
import { Link} from "react-router-dom";
import { daiContractWithSigner } from "../utils/daicontract";
import { AppContext } from "../context/provider";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

function Buyer(){
    const {selectedAddress} =useContext(AppContext);
    const [rooms,setRooms] = useState([]);
    const [noOfRounds,setNoOfRounds] = useState(-1);
    const [CompletedRounds,setCompletedRounds] = useState(-1);
    const [RewardedAmount,setRewaredAmount] = useState(-1);
    const [showDetails, setShowDetails] = useState(false);
    const [showError, setShowError] = useState(false);
    
    // findRoom
        async function  findRooms(){
            try{
                setRooms(await daiContractWithSigner.showManager());
            }catch(e){
                handleErrorShow();
            }
        }
    
    // ShowallDetails.

        async function showAllDetails(){
            try{
                const value = await daiContractWithSigner.playerCommand();
                setNoOfRounds(value[0].toNumber());
                setCompletedRounds(value[1].toNumber());
                setRewaredAmount((value[2]/(1000000000000000000)).toString());
                handleDetailsShow();
            }catch(e){
                handleDetailsClose();
                handleErrorShow();
            }
        }
        // dailogbox
        function handleDetailsClose  () { setShowDetails(false)}
        function handleDetailsShow  () {setShowDetails(true)}
        function detailsModal(){
        return( 
            <Modal show={showDetails} onHide={()=>handleDetailsClose()} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title> About Your Current Status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='dropItem'>
                                    <p className='dropItemname'>No Of Active Lottery Rounds</p>
                                    <h6 className='dropItemValue'>{noOfRounds}</h6>
                        </div>
                        </Modal.Body>
                    <Modal.Body>
                    <div className='dropItem'>
                                    <p className='dropItemname'>No Of Completed Lottery Rounds</p>
                                    <h6 className='dropItemValue'>{CompletedRounds}</h6>
                        </div>
                        </Modal.Body>
                    <Modal.Body>
                    <div className='dropItem'>
                                    <p className='dropItemname'>Earned Amount(eth)</p>
                                    <h6 className='dropItemValue'>{RewardedAmount}</h6>
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

    // error
        function handleErrorClose () { setShowError(false)};
        function handleErrorShow () { setShowError(true)};
        function errorModal(error){
        return( <Modal show={showError} onHide={()=>handleErrorClose()} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{error}</Modal.Body>
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
                            <h5>Search Active Lottery Rooms</h5>
                             <button className="userButton" onClick={()=>findRooms()}><a className="userButtonA">Search</a></button>

                             {
                                rooms?.map((room)=>(
                                <Link
                                    to={{
                                        pathname:'/user/buyer/room',
                                        search:'?myParam='+room 
                                    }}
                                >
                                <button  className="userButton" >
                                    <a className="userButtonStart">{room}</a></button></Link>
                                
                                ))
                            }

                            <p>About Us --- Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry  </p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className="userCard">
                            <h5>Show All Details</h5>
                            <button className="userButton" onClick={()=>showAllDetails()}><a className="userButtonA">Show</a></button> 
                            <p>About Us --- Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.details</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {detailsModal()}
            {errorModal()}
            </div>     
        </>
    ) 
}

export default Buyer;
