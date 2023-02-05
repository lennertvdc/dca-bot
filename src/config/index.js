require("dotenv").config();

const config = {
	env: process.env.NODE_ENV,
	api: {
		key: process.env.API_KEY,
		secret: process.env.API_SECRET,
	},
};

if (config.env === "production") {
	Object.assign(config, require("./production"));
} else {
	Object.assign(config, require("./development"));
}

module.exports = config;
