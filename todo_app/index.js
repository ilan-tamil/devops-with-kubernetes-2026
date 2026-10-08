const http = require("node:http");

const port = Number.parseInt(process.env.PORT ?? "3000", 10);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error("PORT must be a valid TCP port.");
  process.exit(1);
}

const server = http.createServer((_request, response) => {
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Todo app</title>
  </head>
  <body>
    <main>
      <h1>Todo app</h1>
      <p>Server started in port ${port}</p>
    </main>
  </body>
</html>`;

  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(html);
});

server.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
