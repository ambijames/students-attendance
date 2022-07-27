require("dotenv").config();
const http = require("http");
const PORT = process.env.PORT || 8000;
const mongoConnect = require("./src/services/mongoConnect");

const { app } = require("./app");

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`server is listening on Port::::${PORT}`);
  });
}

startServer();
