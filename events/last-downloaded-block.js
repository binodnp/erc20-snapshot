"use strict";

const fs = require("fs");

const enumerable = require("linq");

const Parameters = require("../parameters").get();

const { promisify } = require("util");
const readdirAsync = promisify(fs.readdir);
const folderExistsAsync = promisify(fs.exists);

module.exports.get = async symbol => {
  const downloadFolder = Parameters.eventsDownloadFolder.replace("{token}", symbol);

  if (!(await folderExistsAsync(downloadFolder))) {
    return 0;
  }
  const files = await readdirAsync(downloadFolder);

  return enumerable
    .from(files)
    .select(x => {
      return parseInt(x.replace(".json", "")) || 0;
    })
    .max(x => x);
};
