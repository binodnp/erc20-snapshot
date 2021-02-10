"use strict";

const Web3 = require("web3");

const Config = require("./config").getConfig();
const Parameters = require("./parameters").get();

const web3 = new Web3(new Web3.providers.HttpProvider((Config || {}).provider || "http://localhost:8545"));
const contractAddress = (Config || {}).contractAddress;

module.exports.getContract = () => {
  const contract = new web3.eth.Contract(Parameters.abi, contractAddress);
  return contract;
};
