const http = require("http");

const { app } = require("./app");

const PORT = 1050;

const server = http.createServer({ app });

server.listen(PORT, () => {
  console.log(`server started at port:::${PORT}`);
});
