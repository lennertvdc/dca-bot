const { Spot } = require("@binance/connector");
const config = require("./config");

(async () => {
	const client = new Spot(config.api.key, config.api.secret);
	const testClient =
		config.env === "production"
			? null
			: new Spot(config.testApi.key, config.testApi.secret, { baseURL: "https://testnet.binance.vision" });
})();
