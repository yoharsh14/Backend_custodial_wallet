import {} from "dotenv/config";
import { Web3 } from "web3";
const node = process.env.apiKey || ""; // add apikey from Getblock(polygon mumbai testnet)
const privateKey = process.env.privateKey || ""; // add your private key here.

export const createAccount = async () => {
  const web3 = new Web3(node);
  let account = await web3.eth.accounts.create();
  return account;
};

export const SendEth = async (account1, account2, amount) => {
  const web3 = new Web3(node);
  try {
    const receipt = await web3.eth.sendTransaction({
      from: account2,
      to: account1,
      value: web3.utils.toWei(amount, "ether"),
      gas: "300000",
    });
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

export const balance = async (web3, account) => {
  let bal = await web3.eth.getBalance(account);
  return web3.utils.fromWei(bal, "ether");
};
const main = async () => {
  const web3 = new Web3(node);
  //   let account = await createAccount(web3);
  let MainWalletAccount = await web3.eth.accounts.wallet.add(privateKey);
  account = await web3.eth.accounts.wallet.add(account.privateKey);
  let addressOfWalletAccount = MainWalletAccount[0].address;
  console.log(await balance(web3, addressOfWalletAccount));
  //   console.log(addressOfWalletAccount);
  //   SendEth(web3,account.address, addressOfWalletAccount, "0.001");
};

// amount entered > cost of asset+fees+gasFees;
// first fees will be deducated and transafered to the company wallet
// left amount will be transafered used for transaction;
