var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'WrkzWalletShell';
config.appDescription = 'WrkzCoin Wallet';
config.appSlogan = '';
config.appId = 'work.wrkz.walletshell';
config.appGitRepo = 'https://github.com/wrkzcoin/WrkzWalletShell';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 17856;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'wrkz';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'wrkz-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v0.2.9";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 7856;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://myexplorer.wrkz.work/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'wrkz-nodes.wrkz.work';


// remote node list update url, set to null if you don't have one
// for TRTL:
// raw list: https://raw.githubusercontent.com/turtlecoin/turtlecoin-nodes-json/master/turtlecoin-nodes.json
// filtered: https://trtl.nodes.pub/api/getNodes
config.remoteNodeListUpdateUrl = 'https://raw.githubusercontent.com/wrkzcoin/wrkzcoin-nodes-json/master/wrkzcoin-nodes.json';

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = false;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'node-pr1.wrkz.work:17856',
  'node-pr2.wrkz.work:17856',
  'node-pr3.wrkz.work:17856',
  'node-sg1.wrkz.work:17856',
  'node-us1.wrkz.work:17856',
  'wrkz-stroppy.ddns.net:17856',
  'wrkz.stx.nl:17856',
];
config.remoteNodeCacheSupported = false;
config.remoteNodeSslSupported = false;

// your currency name
config.assetName = 'WrkzCoin';
// your currency ticker
config.assetTicker = 'WRKZ';
// your currency address prefix, for address validation
config.addressPrefix = 'Wrkz';
// standard wallet address length, for address validation
config.addressLength = 98;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 0.05;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to represent human readable value
config.decimalPlaces = 2;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'WrkzWalletShell Donation',
    address: 'WrkzRNDQDwFCBynKPc459v3LDa1gEGzG3j962tMUBko1fw9xgdaS9mNiGMgA9s1q7hS1Z8SGRVWzcGc8Sh8xsvfZ6u2wJEtoZB',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
