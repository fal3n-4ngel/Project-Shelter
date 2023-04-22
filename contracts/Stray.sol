// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

contract Stray is ERC721A, Ownable {
    uint256 public maxSupply;
    uint256 public tokenPrice = 1 gwei;
    string private _baseTokenURI;
	address payable public withdrawWalletAddress;

    constructor(uint256 max_supply, string memory base_token_URI) ERC721A("Stray", "STRAY") {
		maxSupply = max_supply;
		_baseTokenURI = base_token_URI;
	}

    function mint(uint256 quantity) external payable {
		require(_totalMinted() + quantity <= maxSupply, 'Not enough supply left');
		require(msg.value >= quantity * tokenPrice, 'Insufficent Funds');
        _mint(msg.sender, quantity);
    }


	function withdraw() external onlyOwner {
		(bool success, ) = withdrawWalletAddress.call{ value: address(this).balance }('');
		require(success, 'withdraw failed');
	}

	function getMaxSupply() public view returns (uint256)  {
		return maxSupply;
	}

	function getOwnerTokens(address owner) public view returns (uint[] memory) {
		uint[] memory result = new uint[](balanceOf(owner));
		uint count = 0;
		for(uint i = 0; i < _totalMinted(); i++) {
			if(ownerOf(i) == owner) {
				result[count] = i;
				count++;
				if(count == balanceOf(owner)) break;
			}
		}
		return result;
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

	function setWithdrawWalletAddress(address payable wallet) external onlyOwner {
		withdrawWalletAddress = wallet;
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