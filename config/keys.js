const userName = 'alexandr';
const userPassword = 'jYbmOezv';
const dBName = 'fullstack';

// const mongoUri = `mongodb+srv://${userName}:${userPassword}@fullstack.fdqhi.mongodb.net/${dBName}?retryWrites=true&w=majority`;
const mongoUri = `mongodb://localhost:27017/fullstack`;

const jwtToken = 'dev-jwt'

module.exports = { mongoUri, jwtToken };

