"use strict";

const FileHelper = require("../file-helper");
const Parameters = require("../parameters").get();

const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
};

module.exports.tryBlockByBlock = async (contract, start, end, symbol) => {
  const blocks = range(start, end);

  let counter = 0;
  for await (const i of blocks) {
    counter++;
    console.log("%d% Block %d of %d", Math.floor((counter / (end - start)) * 100), i, end);

    const pastEvents = await contract.getPastEvents("Transfer", { fromBlock: i, toBlock: i });

    if (pastEvents.length) {
      console.info("Successfully imported ", pastEvents.length, " events");

      const file = Parameters.eventsDownloadFilePath.replace(/{token}/g, symbol).replace(/{blockNumber}/g, pastEvents[0].blockNumber);
      FileHelper.writeFile(file, pastEvents);
    }
  }
};
