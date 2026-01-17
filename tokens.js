import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const usdtAddress = "0xYourUSDTContract";
const usdcAddress = "0xYourUSDCContract";
const abi = [];

export async function connectWallet() {
  const provider = getProvider();
  const accounts = await provider.send("eth_requestAccounts", []);
  const address = accounts[0];

  const usdt = await getTokenBalance(usdtAddress, address);
  const usdc = await getTokenBalance(usdcAddress, address);

  return { usdt, usdc };
}

async function getTokenBalance(tokenAddress, user) {
  const provider = getProvider();
  const contract = new ethers.Contract(tokenAddress, abi, provider);
  return await contract.balanceOf(user);
}
