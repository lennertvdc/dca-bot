const { Spot } = require("@binance/connector");
const config = require("./config");

const client = new Spot(config.api.key, config.api.secret);
const testClient =
	config.env === "production"
		? null
		: new Spot(config.testApi.key, config.testApi.secret, { baseURL: "https://testnet.binance.vision" });

(async () => {
	const fiatAsset = await getFiatAsset(config.fiat.asset);
	if (fiatAsset?.free >= config.fiat.amount) {
		// Convert fiat into usdt
	}
})();

async function getFiatAsset(fiat) {
	const userAsset = config.env !== "production" ? await client.userAsset({ asset: fiat }) : null;
	return userAsset?.data[0];
}
