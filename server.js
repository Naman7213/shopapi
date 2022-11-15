const http = require("http");
const port = 5000 || process.env.PORT;
const app = require("./app");

const server = http.createServer(app);

require("./conn")

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
