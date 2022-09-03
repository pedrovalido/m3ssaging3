// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract M3ssaging3 {
    
    struct User {
        string name;
        mapping(string => address) contacts;
        mapping(address=>Message[]) chat;
        mapping(address=>uint256) counterMessages;
    }

    struct Message {
        string message;
        address sender;
        address receiver;
    }

    mapping(address=>User) users;

    //new contact added "pedro - 0xas23fj2..."
    event NewContact(string name, address contact);
    //message sent to 0x1b42ub41..."
    event MessageSent(address receiver);

    constructor() {
        
    }


    function addContact (address contact, string memory name) public {
        users[msg.sender].contacts[name] = contact;
        emit NewContact(name, contact);
    }

    function sendMessage (address _receiver, string memory _message) public {
        //create message
        Message memory message = Message(_message, msg.sender, _receiver);
        
        User storage sender = users[msg.sender];
        User storage receiver = users[_receiver];
        //store in sender
        sender.chat[_receiver][sender.counterMessages[_receiver]++] = message;
        //store in receiver
        receiver.chat[msg.sender][receiver.counterMessages[msg.sender]++] = message;
        
        emit MessageSent(_receiver);
    }

}
