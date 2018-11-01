var CustomerProfilesModule = require('./CustomerProfiles');
var TransactionReportingModule = require('./TransactionReporting');


const transactionId = process.argv && process.argv[2];

// CustomerProfilesModule.createCustomerProfileFromTransaction(transactionId, console.log);
TransactionReportingModule.getUnsettledTransactionList(console.log);