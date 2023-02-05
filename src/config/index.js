require("dotenv").config();

const config = {
	env: process.env.NODE_ENV,
	api: {
		key: process.env.API_KEY,
		secret: process.env.API_SECRET,
	},
	fiat: {
		asset: "EUR",
		amount: 0.2,
	},
	currency: "USDT",
	trades: [
		{
			asset: "BTC",
			percentage: 60,
		},
		{
			asset: "ETH",
			percentage: 40,
		},
	],
};

module.exports = config;
