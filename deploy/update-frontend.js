const { frontEndContractsFile, frontEndAbiFile } = require("../helper-hardhat-config")
const fs = require("fs")
const { network } = require("hardhat")

module.exports = async () => {
    if (process.env.UPDATE_FRONTEND) {
        console.log("Writing to front end...")
        await updateContractAddresses()
        await updateAbi()
        console.log("Front end written!")
    }
}

async function updateAbi() {
    const m3ssaging3 = await ethers.getContract("M3ssaging3")
    fs.writeFileSync(frontEndAbiFile, m3ssaging3.interface.format(ethers.utils.FormatTypes.json))
}

async function updateContractAddresses() {
    const m3ssaging3 = await ethers.getContract("M3ssaging3")
    const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (network.config.chainId.toString() in contractAddresses) {
        if (!contractAddresses[network.config.chainId.toString()].includes(m3ssaging3.address)) {
            contractAddresses[network.config.chainId.toString()].push(m3ssaging3.address)
        }
    } else {
        contractAddresses[network.config.chainId.toString()] = [m3ssaging3.address]
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
}
module.exports.tags = ["all", "frontend"]
