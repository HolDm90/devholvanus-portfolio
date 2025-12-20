// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SkillBadge is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    constructor() ERC721("DevHolvanus Skill Badge", "DHSB") Ownable(msg.sender) {
        tokenCounter = 0;
    }

    function mintSkillBadge(string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newTokenId = tokenCounter;
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenCounter++;
        return newTokenId;
    }
}
