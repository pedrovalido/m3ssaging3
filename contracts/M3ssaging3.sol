// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract M3ssaging3 {
    
    struct user {
        string name;
        mapping(string => address) contacts;   
    }

    mapping(address=>user) users;

    event NewContact(string name, address contact);


    constructor() {
        
    }


    function addContact (address contact, string memory name) public {
        users[msg.sender].contacts[name] = contact;
        emit NewContact(name, contact);
    }

}
