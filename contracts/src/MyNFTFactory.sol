// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MyNFTEvent.sol";

contract MyNFTFactory {
    MyNFTEvent[] public deployedNFTs;

    function deployNFT(
        string memory name,
        string memory description,
        string memory tokenURI
    ) public {
        MyNFTEvent newNFT = new MyNFTEvent(name, description, tokenURI);
        deployedNFTs.push(newNFT);
    }

    function getDeployedNFTs() public view returns (MyNFTEvent[] memory) {
        return deployedNFTs;
    }
}
