require("dotenv").config();

const config = {
    api: {
        key: process.env.API_KEY,
        secret: process.env.API_SECRET,
    }
}

module.exports = config;