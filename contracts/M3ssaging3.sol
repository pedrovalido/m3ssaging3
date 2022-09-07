// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract M3ssaging3 {
    
    struct User {
        mapping(string => address) contacts;
        mapping(string=>bool) contactExists;
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
    //message sent to "0x1b42ub41..."
    event MessageSent(address receiver);
    //"amount" sent to "0xskwc..."
    event MoneySent(uint256 amount, address receiver);

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

    function sendMessage (string memory contact, string memory _message) public {
        
        sendMessage(users[msg.sender].contacts[contact], _message);
    }

    function transferMoney (address receiver) public payable {
        uint256 amount = msg.value;
        (bool success, ) = receiver.call{value: amount}("");
        require(success, "There was an error! Transfer failed.");
        emit MoneySent(amount, receiver);

    }

    function transferMoney (string memory contact) public payable {
        require(users[msg.sender].contactExists[contact], "Contact doesnt exist");
        transferMoney(users[msg.sender].contacts[contact]);
    }

}
