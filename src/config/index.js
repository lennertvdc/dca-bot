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
			percentage: 60,
		},
		{
			asset: "ETH",
			currency: "USDT",
			percentage: 40,
		},
	],
};

module.exports = config;
