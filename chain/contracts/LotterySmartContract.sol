// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

// remove shoe manager 

contract lotterySmartContract{
    
    fallback() external payable {}
    receive() external payable {}

    struct managerDetails {
        bool status;
        uint amount;
        address payable [] candidate;
    }
    struct playerDetails{
        uint noOfRound ;
        uint completedRound;
        uint rewardAmount;
        mapping (address=>bool) partManager;
    }

    address[]   listOfManager;
    mapping(address=>managerDetails) public  Managers;
    mapping (address=>playerDetails) public Players;

    
    function start() public returns(string memory){
        require(Managers[msg.sender].status == false,"already started lottery");
        Managers[msg.sender].status=true;
        listOfManager.push(msg.sender);
        return("started");
    }

    function randMod()  private view returns(uint){
        uint randNonce = 0;
        return uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,randNonce)));
    }
     
    function end() public payable {
        require(Managers[msg.sender].status == true,"have not started lottery");
        if(Managers[msg.sender].candidate.length==0){
            delete(Managers[msg.sender]);
            for(uint i=0;i<listOfManager.length;i++){
                if(listOfManager[i]==msg.sender){
                    delete(listOfManager[i]);
                    break ;
                }
            }
            
        }else{

            uint index=randMod()%Managers[msg.sender].candidate.length;
            address payable  winnerAdress = payable(Managers[msg.sender].candidate[index]);
           ( bool sent,) = winnerAdress.call{value:msg.value}("");
            require(sent,"tran is failed");
            Players[winnerAdress].rewardAmount += msg.value;
            for(uint i=0;i<Managers[msg.sender].candidate.length;i++){
                Players[Managers[msg.sender].candidate[i]].noOfRound -=1;
                Players[Managers[msg.sender].candidate[i]].completedRound +=1;
                Players[Managers[msg.sender].candidate[i]].partManager[msg.sender]=false;
            }
            delete(Managers[msg.sender]);
            for(uint i=0;i<listOfManager.length;i++){
                if(listOfManager[i]==msg.sender){
                    delete(listOfManager[i]);
                    break ;
                }
            }
        }
    }

    function buy(address  _room ) public payable {
        require(_room != msg.sender,"you cant enter as u are manager");
        require(Managers[_room].status==true,"this is not active");
        require(Players[msg.sender].partManager[_room]==false,"already buy Lottery");
        Players[msg.sender].partManager[_room]=true;
        address payable room = payable(_room);
        (bool sent,)=room.call{value:msg.value}("");
        require(sent, "Transfer failed");
        Players[msg.sender].noOfRound +=1;
        Managers[_room].candidate.push(payable (msg.sender));
        Managers[_room].amount += msg.value;
    }

    function showManager() view public returns(address[] memory) {
        return (listOfManager);
    }

    function playerlist(address _room) public  view returns(address payable []  memory) {
        return (Managers[_room].candidate);
    }
 
    function managerCommand() public view returns(bool,uint,uint){
        return(Managers[msg.sender].status, Managers[msg.sender].amount,Managers[msg.sender].candidate.length);
    }
    function playerCommand() public view returns(uint,uint,uint){
        return(Players[msg.sender].noOfRound,Players[msg.sender].completedRound,Players[msg.sender].rewardAmount);
    }

}