// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

interface ITokenizedVotes {}

contract TokenizedBallot {
    uint256 referenceBlock;
    ITokenizedVotes public tokenContract;
    struct Proposal {
        bytes32 name;
        uint256 voteCount;
    }

    Proposal[] public proposals;

    constructor(
        bytes32[] memory proposalNames,
        address _tokenContract,
        uint256 _referenceBlock
    ) {
        for (uint256 i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({voteCount: 0, name: proposalNames[i]}));
        }
        tokenContract = ITokenizedVotes(_tokenContract);
        referenceBlock = _referenceBlock;
    }

    ffunction winningProposal() public view returns (uint256 winningProposal_) {
        uint256 winningVoteCount = 0;
        for (uint256 p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    function winnerName() external view returns (bytes32 winnerName_) {
        winnerName_ = proposals[winningProposal()].name;
    }

}
