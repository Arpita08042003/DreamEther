import { createContext } from "react";
import { useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const [selectedAddress,setSelectedAddress] = useState(Number("0xdc"));
    const [balanceInEther,setBalanceInEther] = useState(0);
    const [ connected,setConnected]=useState(0);

    const data ={
        selectedAddress,
        setSelectedAddress,
        balanceInEther,
        setBalanceInEther,
        connected,
        setConnected
    }
    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
}

export {AppProvider,AppContext};
