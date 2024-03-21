// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFTEvent is ERC1155{
    string public name;
    string public description;
    string public tokenURI;

    constructor(
        string memory _name,
        string memory _description,
        string memory _tokenURI
    ) ERC1155(_tokenURI) {
        name = _name;
        description = _description;
        tokenURI = _tokenURI;
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
            {
        _mintBatch(to, ids, amounts, data);
    }
}
