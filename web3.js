var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'https://ropsten.infura.io/v3/2612abfb42ce416ab76eea0ff87890a9');


const address = '0xBCc6A4C1E64cbC1FE21A9c3D9633f7d86Dd05F2C'
const faucet_address = '0x1A90780c89dBb15aAfa26ED52931b4631A304616'

function balance(address){
    web3.eth.getBalance(address, (err, wei) => {
        balance = web3.utils.fromWei(wei, 'ether')
      }).then(() => console.log("Address: " + address + "\nBalance: " + balance + " ETH"))
    }
//.then(console.log)

//web3.eth.getBlock('latest').then(console.log)

//web3.eth.getGasPrice().then(console.log)

//balance(address)
//balance(faucet_address)


//Read Data from Smart Contracts
//https://www.dappuniversity.com/articles/web3-js-intro
//contract.methods.xyz (See ABI)

dai_address = '0xaD6D458402F60fD3Bd25163575031ACDce07538D'

abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_burner","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]

const contract = new web3.eth.Contract(abi, dai_address)

contract.methods.totalSupply().call((err, result) => { console.log("Total Supply: " + result) })
contract.methods.name().call((err, result) => { console.log("Name: " + result) })
contract.methods.symbol().call((err, result) => { console.log("Symbol: " + result) })
contract.methods.balanceOf(address).call((err, result) => { console.log("Balance in Account: " + result) })
contract.methods.INITIAL_SUPPLY().call((err, result) => { console.log("Initial Supply: " + result) })
