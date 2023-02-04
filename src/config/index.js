require("dotenv").config();

const config = {
	env: process.env.NODE_ENV,
	api: {
		key: process.env.API_KEY,
		secret: process.env.API_SECRET,
	},
	testApi: {
		key: process.env.TESTNET_API_KEY,
		secret: process.env.TESTNET_API_SECRET,
	},
	fiat: "EUR",
	trades: [
		{
			asset: "BTC",
			currency: "USDT",
			currencyQty: 30,
		},
		{
			asset: "ETH",
			currency: "USDT",
			currencyQty: 20,
		},
	],
};

module.exports = config;
