const web3 =  require('./web3connect');

exports.checkTransaction = id => {
  return web3.eth.getTransaction(id);
};

exports.getReceipt = id => {
  return web3.eth.getTransactionReceipt(id);
};
