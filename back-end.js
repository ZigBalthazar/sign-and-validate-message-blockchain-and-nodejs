const ethers = require('ethers');

// Create a wallet to sign the message with
let privateKey = 'YOUR PRIVATE KEY with 0x';
let wallet = new ethers.Wallet(privateKey);

console.log("signer address ::: ",wallet.address);



let message = "YOUR MESSAGE";

// Sign the string message
const signMessage=async() =>{
    let flatSig = await wallet.signMessage(message);
    let sig = ethers.utils.splitSignature(flatSig);

    console.log("v param = ",sig.v);
    console.log("r param = ",sig.r);
    console.log("s param = ",sig.s);

}
signMessage()



