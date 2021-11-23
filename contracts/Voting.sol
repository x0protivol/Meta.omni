//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "hardhat/console.sol";

contract VotingFactory {
    address[] public deployedVotings;

    function createVoting(uint price, uint timelimit, uint successnumber) public {
      require(successnumber > 1, "successnumber should integer");
      Voting newVoting = new Voting(price, timelimit, successnumber, msg.sender);
      deployedVotings.push(address(newVoting));
    }

    function getDeployedVotings() public view returns (address[] memory) {
        return deployedVotings;
    }
}

contract Voting {
  enum VoterStatus {unverified, verified}
  
  struct Itemvoter {
    uint itemnumber; // item ID.
    address voterAddress; // The address of the voter
    VoterStatus status;    // The Voter send money or not
  }
      
  mapping(address => Itemvoter) itemVoters;
  address[] public itemVoterList;

  uint  minSuccesssNumber;
  uint  baseTimePeriod;
  uint  Itemprice;
  address owner;

  event Voteradded(uint indexed itemID);

  modifier onlyOwner{
      require(msg.sender == owner, "Only allowed for owner");
      _;
  }

  modifier onlyVerifiedVoters {
      Itemvoter storage voter = itemVoters[msg.sender];
      require(voter.status == VoterStatus.verified);
      _;
  }

  constructor (uint _itemPrice, uint _baseTimePeriod, uint _minSuccesssNumber, address _owner) {      
      Itemprice = _itemPrice;
      baseTimePeriod = _baseTimePeriod;
      minSuccesssNumber = _minSuccesssNumber;
      owner = _owner;      
  }

  function registerVote(address _voter, uint _itemPrice, uint _ItemId) public payable {
    uint price = _itemPrice;
    (bool success, ) = owner.call{value: price}("");
    require(success, "Failed to send ETH");
    require(baseTimePeriod > 0, "This vote is over already");
    (, , VoterStatus temp) = getItemvoter(_voter);
    require(temp == VoterStatus.unverified, "Revoting error");
    // require(itemvoter.status == VoterStatus.unverified, "you are already voted");
    price = 0;
    Itemvoter storage itemvoter = itemVoters[_voter];
    itemvoter.itemnumber = _ItemId;
    itemvoter.voterAddress = _voter;
    itemvoter.status = VoterStatus.verified;

    itemVoterList.push(_voter);
    emit Voteradded(_ItemId);
  }

  function setBaseTimePeriod(uint _baseTimePeriod) external onlyOwner {
    require(baseTimePeriod > _baseTimePeriod, 
    "Can't count up limit time");
    baseTimePeriod = _baseTimePeriod;
  }

  function getItemvoters() public view returns(address[] memory) {
    return itemVoterList;
  }
  
  function getItemvoter(address _address) public view returns (uint, address, VoterStatus) {
    // require(itemVoters[_address].voterAddress != address(0x0), "Vote address error");
    return (itemVoters[_address].itemnumber,
      itemVoters[_address].voterAddress,
      itemVoters[_address].status);
  }
  
  function countItemvoters() public view returns (uint) {
      return itemVoterList.length;
  } 

  function postpone(uint _baseTimePeriod) external onlyOwner {
    require(0 == itemVoterList.length || minSuccesssNumber <=  itemVoterList.length, 
    "Can't postpone ongoing vote");
    baseTimePeriod = _baseTimePeriod;
  }

  function isOngoing() public view returns (bool status) {
    if (baseTimePeriod == 0) {
        status = false;
    } else {
        status = true;
    }
  }
}

contract MintNFT is ERC1155, Ownable {
  constructor() ERC1155("") {}

  function setURI(string memory newuri) public onlyOwner {
      _setURI(newuri);
  }

  function mint(address account, uint256 id, uint256 amount, bytes memory data)
      public
      onlyOwner
  {
      _mint(account, id, amount, data);
  }

  function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
      public
      onlyOwner
  {
      _mintBatch(to, ids, amounts, data);
  }

  function transfertoVoters(
    address[] memory itemVoterList,
    uint256[] memory ids,
    uint256[] memory amounts,
    bytes memory data
    ) public onlyOwner {

    for(uint num = 0; num < itemVoterList.length ; num ++){
      safeBatchTransferFrom(msg.sender, itemVoterList[num],ids, amounts, data);
    }    

  }

}
