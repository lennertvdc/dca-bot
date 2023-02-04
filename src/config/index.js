require("dotenv").config();

const config = {
	env: process.env.NODE_ENV,
	api: {
		key: process.env.API_KEY,
		secret: process.env.API_SECRET,
	},
	fiat: {
		asset: "EUR",
		amount: 50,
	},
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
