// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

/**
 * @title CrossFiToken
 * @dev A simple ERC-20 token with minting and burning capabilities.
 */
contract CrossFiToken {
    string public tokenName = "CrossFi Token";
    string public tokenSymbol = "CFI";
    uint256 public totalSupply;
    uint8 public constant decimals = 18;
    address public owner;
    
    // Event emitted when tokens are minted
    event TokensMinted(address indexed to, uint256 amount);

    // Event emitted when tokens are burned
    event TokensBurned(address indexed from, uint256 amount);

    /**
     * @dev Constructor that initializes the token.
     */
    constructor() {
        owner = msg.sender;
        _mint(owner, 1_000_000_000 * (10 ** decimals));
    }

    /**
     * @dev Mints new tokens and assigns them to the specified address.
     * @param to The address to receive the minted tokens.
     * @param amount The amount of tokens to mint.
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
        emit TokensMinted(to, amount);
    }

    /**
     * @dev Burns tokens from the caller's address.
     * @param amount The amount of tokens to burn.
     */
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
        emit TokensBurned(msg.sender, amount);
    }
}
