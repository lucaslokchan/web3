var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'https://ropsten.infura.io/v3/2612abfb42ce416ab76eea0ff87890a9');


const address = '0xBCc6A4C1E64cbC1FE21A9c3D9633f7d86Dd05F2C'

web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
  }).then(() => console.log("Address: " + address + "\nBalance: " + balance + " ETH"))

//.then(console.log)

//web3.eth.getBlock('latest').then(console.log)

web3.eth.getGasPrice().then(console.log)
