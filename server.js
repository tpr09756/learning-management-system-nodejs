const http = require('http');

require("dotenv").config();

require("./config/dbConnect")
const app = require('./app/app');





const PORT = process.env.PORT || 2020;

// Server
const server = http.createServer(app);
server.listen(PORT, console.log(`Server is running on port ${PORT}`))