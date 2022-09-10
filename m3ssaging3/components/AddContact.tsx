// have a function to enter the lottery
import { useWeb3Contract, useMoralis } from "react-moralis"
import { abi, contractAddresses } from "../constants"
import { useEffect, useState } from "react"

interface contractAddressesInterface {
    [key: string]: string[]
}
// This might need updates when we are using deploys in different chains
export default function LotteryEntrance() {
    const addresses: contractAddressesInterface = contractAddresses
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId: string = parseInt(chainIdHex!).toString()
    const m3ssaging3Address = chainId in addresses ? addresses[chainId][0] : null
    const [input1,setInput1]= useState("");
    const [input2,setInput2]= useState("");
    const {
        runContractFunction: addContact
    } = useWeb3Contract({
        abi: abi,
        contractAddress: m3ssaging3Address!, // specify the networkId
        functionName: "addContact",
        params: {contact: input1, name: input2},
    })

    useEffect(() => {
        if (isWeb3Enabled) {
        }
    }, [isWeb3Enabled])

    return (
        <div className="p-5">
            {m3ssaging3Address ? (
                <div className="">
                    <h1>AddContact Section</h1>
                    <div>Contract Address</div>
                    <input id="input 1" onChange= {(e: React.ChangeEvent<HTMLInputElement>)=> {
                        setInput1(e.target.value);}}>                 
                    </input>
                    <div>Contact Name</div>
                    <input id="input 2" onChange= {(e: React.ChangeEvent<HTMLInputElement>)=> {
                        setInput2(e.target.value);}}>
                    </input>          
                    <br />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
                        onClick={async function () {
                            await addContact()
                        }}>Add Contact
                    </button>
                </div>
            ) : (
                <div>No M3ssaging3 Address Deteched</div>
            )}
        </div>
    )
}