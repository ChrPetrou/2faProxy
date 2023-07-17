var http = require("http");
var httpProxy = require("http-proxy");
const PORT = 8000;
var proxy = httpProxy.createProxyServer({});

proxy.on("error", function (err, req, res) {
  res.writeHead(500, {
    "Content-Type": "text/plain",
  });

  res.end("Sorry, an error occurred.");
});

var server = http.createServer(function (req, res) {
  proxy.web(req, res, { target: "http://localhost:4000" });
});

console.log("Proxy server listening on port 8000");
server.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
