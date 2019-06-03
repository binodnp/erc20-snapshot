#!/usr/bin/env node
"use strict";

const Balances = require("./balances");
const Config = require("./config");
const Events = require("./events/blockchain");
const Export = require("./export");

const start = async () => {
  await Config.checkConfig();
  const format = Config.getConfig().format;
  const result = await Events.get();

  console.log("Calculating balances of %s (%s)", result.name, result.symbol);
  const balances = await Balances.createBalances(result);

  console.log("Exporting balances");
  await Export.exportBalances(result.symbol, balances, format);
};

(async () => {
  try {
    await start();
  } catch (e) {
    console.error(e);
  }
})();
