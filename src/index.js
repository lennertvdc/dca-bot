const { Spot } = require("@binance/connector");
const config = require("./config");

const options = config.env === "production" ? {} : { baseURL: "https://testnet.binance.vision" };
const client = new Spot(config.api.key, config.api.secret, options);

module.exports.handler = async () => {
	const fiat = await getAsset(config.fiat.asset);
	if (fiat.free >= config.fiat.amount) {
		const symbol = config.fiat.asset + config.currency;
		const order = await client.newOrder(symbol, "SELL", "MARKET", { quantity: config.fiat.amount });
		const currencyQty = order.data.cummulativeQuoteQty;

		for (const trade of config.trades) {
			const quoteOrderQty = floor((trade.percentage / 100) * currencyQty, 2);
			const symbol = trade.asset + config.currency;
			await client.newOrder(symbol, "BUY", "MARKET", { quoteOrderQty });
		}
	}
};

async function getAsset(asset) {
	const account = await client.account();
	return account.data.balances.filter((balance) => balance.asset === asset)[0];
}

function floor(float, decimals) {
	float = float.toString();
	float = float.slice(0, float.indexOf(".") + decimals + 1);
	return Number(float);
}
