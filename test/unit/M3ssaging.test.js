const { assert, expect } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("M3ssaging3 Unit Tests", function () {
          let m3ssaging3, m3ssaging3Contract, user, default_address

          beforeEach(async () => {
              accounts = await ethers.getSigners() // could also do with getNamedAccounts
              user = accounts[1]
              default_address = ethers.utils.getAddress("0xd115bffabbdd893a6f7cea402e7338643ced44a6")
              await deployments.fixture(["m3ssaging3"]) // Deploys module needed
              m3ssaging3Contract = await ethers.getContract("M3ssaging3", accounts[0]) // Returns a new connection to the M3ssaging3 contract
              m3ssaging3 = m3ssaging3Contract.connect(user) // Returns a new instance of the M3ssaging contract connected to player
          })

          // no tests for constructor since it is empty

          describe("addContact", function () {
              it("records contact when it is added", async () => {
                  /*
                  await m3ssaging3.addContact(default_address, "Rodrigo")
                  const contractUser = await m3ssaging3.get_contact(0)
                  assert.equal(player.address, contractPlayer)
                  */
              })
              it("emits event after adding contact correctly", async () => {
                  await expect(m3ssaging3.addContact(default_address, "Rodrigo")).to.emit(m3ssaging3, "NewContact")
              })
          })
          describe("sendMessage", function () {})

          describe("transferMoney", function () {})
      })
