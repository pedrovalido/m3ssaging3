// have a function to enter the lottery
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { abi, contractAddresses } from "../constants"
import { useWeb3Contract, useMoralis } from "react-moralis"

interface contractAddressesInterface {
    [key: string]: string[]
}
// This might need updates when we are using deploys in different chains
export default function SendMessage() {
    const addresses: contractAddressesInterface = contractAddresses
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId: string = parseInt(chainIdHex!).toString()
    const m3ssaging3Address = chainId in addresses ? addresses[chainId][0] : null
    const [input1,setInput1]= useState("");
    const [input2,setInput2]= useState("");
    const {
        runContractFunction: sendMessageToAddress 
    } = useWeb3Contract({
        abi: abi,
        contractAddress: m3ssaging3Address!, // specify the networkId
        functionName: "sendMessageToAddress",
        params: {_receiver: input1,_message: input2},
    })
    
    useEffect(() => {
        if (isWeb3Enabled) {
        }
    }, [isWeb3Enabled])

    return (
        <div className="p-5">
            {m3ssaging3Address ? (
                <div className="">
                    <h1>SendMessage Section</h1>
                    <div>Reciver Adress</div>
                    <input id="input 1" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setInput1(e.target.value);
                    }}>
                    </input>
                    <div>Message</div>
                    <input id="input 2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setInput2(e.target.value);
                    }}>
                    </input>
                    <br />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
                        onClick={async function () {
                            await sendMessageToAddress()
                        }}>Send Message
                    </button>
                </div>
            ) : (
                <div>No M3ssaging3 Address Deteched</div>
            )}
        </div>
    )
}