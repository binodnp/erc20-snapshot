"use strict";

const fs = require("fs");
const inquirer = require("inquirer");

const Parameters = require("./parameters").get();

const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);
const fileExists = promisify(fs.exists);

module.exports.checkConfig = async () => {
  const exists = await fileExists(Parameters.configFileName);

  if (exists) {
    return;
  }

  const config = await inquirer.prompt(Parameters.configQuestions);
  await writeFileAsync("./snapshot.config.json", JSON.stringify(config, null, 2));
  console.info("Configuration file was successfully created. Please run the program again.");
  process.exit();
};

module.exports.getConfig = () => {
  try {
    const contents = fs.readFileSync(Parameters.configFileName);
    return JSON.parse(contents);
  } catch (e) {
    console.error("Configuration file was not found.");
  }
};
