module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',

    MONGO_CONNECT_URL: process.env.MONGO_CONNECT_URR || 'mongodb://localhost:27017/list-db',
    PORT: process.env.PORT || 5000,
};
