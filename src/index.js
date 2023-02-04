const { Spot } = require("@binance/connector");
const config = require("./config");

const options = config.env === "production" ? {} : { baseURL: "https://testnet.binance.vision" };
const client = new Spot(config.api.key, config.api.secret, options);

(async () => {
	const fiatAsset = config.env === "production" ? config.fiat.asset : "BUSD";
	const fiat = await getAsset(fiatAsset);
	if (fiatAsset.free >= config.fiat.amount) {
		// Convert fiat into usdt
	}
})();

async function getAsset(asset) {
	const account = await client.account();
	return account.data.balances.filter((balance) => balance.asset === asset);
}
