const http = require("node:http");
const crypto = require("node:crypto");

const port = Number.parseInt(process.env.PORT ?? "3000", 10);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error("PORT must be a valid TCP port.");
  process.exit(1);
}

const randomString = crypto.randomUUID();

const server = http.createServer((_request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Log output is running.\n");
});

server.listen(port, () => {
  console.log(`Server started in port ${port}`);
});

setInterval(() => {
  console.log(`${new Date().toISOString()}: ${randomString}`);
}, 5000);
