import { expect } from "chai";
import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe('HelloWorld', () => {

    let hellowWorldContract: HelloWorld;
    let accounts: SignerWithAddress[];

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        const hellowWorldFactory = await ethers.getContractFactory('HelloWorld');
        hellowWorldContract = await hellowWorldFactory.deploy() as HelloWorld;
        await hellowWorldContract.deployed();
    })
    it('Should give a Hello World', async () => {
        const helloWorldText = await hellowWorldContract.helloWorld();
        expect(helloWorldText).to.equal('Hello World!');

    })

    it('Should set owner to deployer account', async () => {
        const contrcatOwner = await hellowWorldContract.owner();
        //const accounts = await ethers.getSigners();
        expect(contrcatOwner).to.equal(accounts[0].address)
    })

    it("Should not let other address to call transferOwnerShip", async () => {
        let account = accounts[0];
        await expect(hellowWorldContract.connect(account).transferOwnership(accounts[1].address)).to.be.revertedWith("Caller is not the owner");
    });
})