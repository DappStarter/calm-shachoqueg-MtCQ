require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot custom cost misery assume imitate private flush gift'; 
let testAccounts = [
"0xf77cf83fd7e61d496c4aa27bff2970f9e2770a768755f23a42d6a1f373599124",
"0x154e725c63090226fc09a2be17f9daa3dc66ae2bad4d02439648f144c0259548",
"0x79bfe57e6d29aeb4b65618834f6c29aa8ed2578bbd4f9eb326a09786fee0e765",
"0x88ca7a6b3435cd1139b3be080c2d72554293823cfa46df1737c618bd1cbf2b47",
"0x492c9cb57708d97109b90baadbfaaef9ba95a4252c64cb1899f7dcdfb019698c",
"0xb97c01abc5ccc0cbf6bd53ccb509b843064fe839d4f8a3ab026a043b2a26b95d",
"0x7cb175ef74c2948812fbf9c5ce990075b7557897fbdfe50046e7e4b259fbd3ff",
"0x75a2eca5cce2c724aaed3f926e54ba4c66e9580912f77292a74b0a3b9b5b0af9",
"0xa10c505bf30868731898c4fff364a3110ec50a3b7d40f51391028d971997d853",
"0xb4bf0bed008a8a040e8edb16ec979cbb91e6e2ef60814d33b7ffd03085f3c99b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

