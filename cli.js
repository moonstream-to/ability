const fs = require("fs");
const { deduplicate } = require("./index.js");

const args = process.argv.slice(2);

inputABI = JSON.parse(fs.readFileSync(args[0]).toString());

deduplicatedABI = deduplicate(inputABI);

console.log(JSON.stringify(deduplicatedABI, null, 4));
