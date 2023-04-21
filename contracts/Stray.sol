// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

contract Stray is ERC721A, Ownable {
    uint256 public maxSupply = 100;
    uint256 public tokenPrice = 1 gwei;
    string private _baseTokenURI;
	address payable public withdrawWalletAddress;

    constructor() ERC721A("Stray", "STRAY") {}

    function mint(uint256 quantity) external payable {
		require(_totalMinted() + quantity <= maxSupply, 'Sold Out');
		require(msg.value >= quantity * tokenPrice, 'Invalid Funds');
        _mint(msg.sender, quantity);
    }

	function withdraw() external onlyOwner {
		(bool success, ) = withdrawWalletAddress.call{ value: address(this).balance }('');
		require(success, 'withdraw failed');
	}

	function setBaseURI(string calldata baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
    }

	function setTokenPrice(uint256 price) external onlyOwner {
		tokenPrice = price;
	}

	function setMaxSupply(uint256 supply) external onlyOwner {
		maxSupply = supply;
	}

	// OVERRIDE FUNCTIONS
	function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
		require(_exists(tokenId), 'Token does not exist');
		return string(abi.encodePacked(_baseTokenURI, _toString(tokenId), ".json"));
	}

    function _baseURI() internal view override returns (string memory) {
		require(bytes(_baseTokenURI).length == 0, 'please set BaseTokenURI');
        return _baseTokenURI;
    }
}