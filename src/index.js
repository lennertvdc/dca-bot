const { Spot } = require("@binance/connector");
const config = require("./config");

const options = config.env === "production" ? {} : { baseURL: "https://testnet.binance.vision" };
const client = new Spot(config.api.key, config.api.secret, options);

(async () => {
	const fiatAsset = config.env === "production" ? config.fiat.asset : "BNB";
	const currency = config.env === "production" ? config.currency : "USDT";
	const fiat = await getAsset(fiatAsset);
	if (fiat.free >= config.fiat.amount) {
		const symbol = fiatAsset + currency;

		const order = await client.newOrder(symbol, "BUY", "MARKET", { quantity: config.fiat.amount });
		const currencyQty = order.data.cummulativeQuoteQty;
		console.log(currencyQty);

		// const exchangeInfo = await client.exchangeInfo();
		// console.log(exchangeInfo.data.symbols[0].filters);

		config.trades.forEach(async (trade) => {
			const quoteOrderQty = floor((trade.percentage / 100) * currencyQty, 2);
			console.log(quoteOrderQty);
			const symbol = trade.asset + currency;
			try {
				const order = await client.newOrder(symbol, "BUY", "MARKET", { quoteOrderQty });
				console.log(order.data);
			} catch (error) {
				console.log(error);
			}
		});

		const account = await client.account();
		console.log(account.data.balances);
	}
})();

async function getAsset(asset) {
	const account = await client.account();
	return account.data.balances.filter((balance) => balance.asset === asset)[0];
}

function floor(float, decimals) {
	float = float.toString();
	float = float.slice(0, float.indexOf(".") + decimals + 1);
	return Number(float);
}
