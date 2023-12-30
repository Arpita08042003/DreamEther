import React,{useState,useContext} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Collapse from 'react-bootstrap/Collapse';
import { AppContext} from "../context/provider";
import './Footer.css';


function Footer(){
    const [aboutOpen,setAboutOpen] = useState(false);
    const [quickOpen,setQuickOpen] = useState(false);
    const [securityOpen,setSecurityOpen] = useState(false);
    const [contactOpen,setContactOpen] = useState(false);
    
    const footerCommands =[
        
        [   
            aboutOpen,
            setAboutOpen, 
            "About Us",
            "Welcome to DreamEther, the ultimate destination for decentralized lotteries on the blockchain! We're excited to bring you an innovative and fair lottery system that leverages the....",
            "1"
        ],
        [   
            quickOpen,
            setQuickOpen,
            "How It Works",
            "Anyone can start their own lottery room on DreamEther. Each user is allowed to initiate one lottery at a time, ensuring a fair and equal opportunity for all. Our smart contract technology ensures that the lottery process is.....",
            "2"
        ],
        [
            securityOpen,
            setSecurityOpen,
            "Security",
            "Your security is our priority. We utilize blockchain technology to guarantee the fairness and transparency of every lottery on our platform. Our smart contracts are designed to be secure, auditable, and resistant to manipulation,....",
            "3"
        ],
         
        [   
            contactOpen,
            setContactOpen,
            "Contact Us",
            "We value the input of our community. Your feedback and suggestions play a crucial role in shaping the future of DreamEther. Join our community forums, share your ideas, and be part of the decentralized lottery....","4"
        ]
    ]

    function foot(commands){
        return(
            <Row>
                        <h6 onClick={()=>commands[1](!commands[0])}
                            aria-controls={commands[4]}
                            aria-expanded={commands[0]}
                            className="footerTitle"
                            >
                                {commands[2]}
                        </h6>
                        <Collapse in={commands[0]}>
                            <div 
                                className="footerContent" 
                                id={commands[4]}>
                                    {commands[3]}
                            </div>
                        </Collapse>
            </Row>
        )
    }

    return(
        <div id="footer">
            <Container id="footerContainer">    
                {footerCommands.map((key)=>{
                    return(foot(key))
                })}        
            </Container>    
        </div>
    )
    
};



export default Footer;

