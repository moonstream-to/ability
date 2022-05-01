const Web3 = require("web3");

function deduplicate(abi) {
  const web3 = new Web3();
  let deduplicatedAbi = [];
  let methodSelectors = {};
  let eventSignatures = {};

  abi.forEach((item) => {
    if (item.type === "event") {
      const signature = web3.eth.abi.encodeEventSignature(item);
      if (eventSignatures[signature] === undefined) {
        eventSignatures[signature] = item;
        deduplicatedAbi.push(item);
      }
    } else {
      const selector = web3.eth.abi.encodeFunctionSignature(item);
      if (methodSelectors[selector] === undefined) {
        methodSelectors[selector] = item;
        deduplicatedAbi.push(item);
      }
    }
  });

  return deduplicatedAbi;
}

module.exports = { deduplicate };
