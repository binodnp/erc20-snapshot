"use strict";

const fs = require("fs");
const path = require("path");

const { promisify } = require("util");

const existsAsync = promisify(fs.exists);
const makeDirectoryAsync = promisify(fs.mkdir);
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const ensureDirectoryExists = async directory => {
  try {
    await makeDirectoryAsync(directory, { recursive: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports.ensureDirectory = async directory => {
  ensureDirectoryExists(directory);
};

module.exports.writeFile = async (filePath, data) => {
  await ensureDirectoryExists(path.dirname(filePath));
  await writeFileAsync(filePath, JSON.stringify(data, null, 2));
};

module.exports.parseFile = async filePath => {
  if (await existsAsync(filePath)) {
    const contents = await readFileAsync(filePath);
    return JSON.parse(contents.toString());
  }

  return null;
};
