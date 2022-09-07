const { ethers } = require("ethers");
const { getContractAddress } = require("ethers/lib/utils");

async function connect() {
    if (typeof window.ethereum != "undefined") {
        await ethereum.request({ method: "eth_requestAccounts" });
    }
}

async function execute() {
    const contractAddress = "0x5Fbb2315678AFECB367F032D93f642F64180aa3";
    const abi = yo
}


module.exports = {
    connect,
    //execute,
};