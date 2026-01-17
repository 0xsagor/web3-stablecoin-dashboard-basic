import { connectWallet, getBalances } from "./tokens.js";
import { getPrices } from "./api.js";

document.getElementById("connectBtn").onclick = async () => {
  const balances = await connectWallet();
  const prices = await getPrices();

  const total =
    balances.usdt * prices.usdt +
    balances.usdc * prices.usdc;

  document.getElementById("usdt").innerText = "USDT: " + balances.usdt;
  document.getElementById("usdc").innerText = "USDC: " + balances.usdc;
  document.getElementById("total").innerText = "Total USD: " + total;
};
