require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember social grid prize olympic general'; 
let testAccounts = [
"0xd59b544fb51a559cd5bba3006164d2a7f922bdd2bbb92c53f69051167acc079b",
"0x612edae2cac65a07e6fae5a227739271f3af1f8cd0319b891fe938703b32e670",
"0xf80de300e5004a6faebcbc2ddae1940f904091c4d11c06aa87b2b21617a4b93f",
"0x51edb7c66490ea2462cbb83a5ee0e9891fb2d934b33dc33b09259e4ec8c3b9e7",
"0xddd95a57dbb5dd312b902729c94d8c1531e0bb87e0bb2d10d3ec98f30b5c868c",
"0xcd4612fdbf6b7395968354ffeb9a0c8e19d0e28a093c3101fd45c8d9c97200a6",
"0x7847e0008c7b2d047da6a5804a06082470491afa56134395235090e75ab6474f",
"0x8f93804ec158c6a931b64b76e8c24cf3f2c2aa6c47d9a17748fd032556712093",
"0x781473aca40f1fcb2696452d7a2317b05a90df6e5ffea988e1d173ce1163f0ef",
"0x973330dd46e4de639b051de24bda24a70a05541dcba081d039ea79b1385758ed"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

