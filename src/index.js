const { Spot } = require("@binance/connector");
const config = require("./config");

const client = new Spot(config.api.key, config.api.secret);

client
	.accountSnapshot("SPOT")
	.then((response) => console.log(response.data.snapshotVos));

console.log(config);
