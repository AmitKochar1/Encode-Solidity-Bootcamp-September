import { expect } from "chai";
import { ethers } from "hardhat";
import { MyERC20Token } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

const INITIAL_SUPPLY = 10000;

describe("basic tests to understand ERC20", () => {
    let MyERC20Contract: MyERC20Token;
    let accounts = SignerWithAddress[0];

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        const MyERC20ContractFactory = await ethers.getContractFactory("MyERC20Token");
        MyERC20Contract = await MyERC20ContractFactory.deploy(INITIAL_SUPPLY);
        await MyERC20Contract.deployed();
    });

    it('Should have zero total supply at deployment', async () => {
        const totalSupplyBN = await MyERC20Contract.totalSupply();
        const decimals = await MyERC20Contract.decimals();
        const totalSupply = parseFloat(ethers.utils.formatUnits(totalSupplyBN, decimals)); //ether utili to convert the big number, parse to convert the string to number;
        expect(totalSupply).to.equal(INITIAL_SUPPLY);
    })

    it('Triggers the Transfer event with the address of the sender when sending transaction', async () => {
        const senderAddress = accounts[0].address;
        const recieveAddress = accounts[1].address;
        await expect(MyERC20Contract.transfer(recieveAddress, 1)).to.emit(MyERC20Contract, "Transfer").withArgs(senderAddress, recieveAddress, 1);
    })

});