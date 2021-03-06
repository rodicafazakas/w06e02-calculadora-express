require("dotenv").config();
const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT || 5000;

initializeServer(port);