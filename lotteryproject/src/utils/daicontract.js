import { ethers } from "ethers";
import lotterySmartContract from './lotterySmartContract.json';
import { contractAddress } from "./constant";

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner();
const daiContract = new ethers.Contract(contractAddress,lotterySmartContract.abi,provider);
const daiContractWithSigner = daiContract.connect(signer);

export {provider,daiContractWithSigner};