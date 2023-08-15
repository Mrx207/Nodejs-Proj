const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("wlecome home");
  }
  if (req.url === "/about") {
    res.end("wlecome about");
  }
  res.end(`<h1>Oops</h1>
  <p>We cant find your page</p>
  <a href="/">home</a>`);
});

server.listen(5000);
