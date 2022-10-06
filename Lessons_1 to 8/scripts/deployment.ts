import { ethers } from "ethers";
import * as dotenv from 'dotenv';
dotenv.config()

const PROPOSALS = ['Proposal 1', 'Proposal 2', 'Proposal 3'];

function covertStringArrayToBytes32(array: string[]) {
    const bytes32Array = [];
    for (let index = 0; index < array.length; index++) {
        bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
    }
    return bytes32Array;
}

async function main() {
    const options = {
        alchemy: process.env.ALCHEMY_API_KEY,
        infura: process.env.INFURA_API_KEY,
    }

    console.log({ options });

    //     const provider = ethers.getDefaultProvider('goerli');
    //     const lastBlock = await provider.getBlock('latest');
    //     console.log({ lastBlock });
    //     console.log('Delpoying ballot contracts');
    //     console.log('Proposals: ')
    //     PROPOSALS.forEach((element, index) => {
    //         console.log(`Proposal N. ${index + 1}: ${element}`);
    //     });
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
