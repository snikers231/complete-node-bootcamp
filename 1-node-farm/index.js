const fs = require("fs");
const http = require("http");
const url = require("url");

// blocking, sync way
// const text = fs.readFileSync("./txt/names.txt", "utf-8");

// let namesArray = text.split("\n");
// namesArray = namesArray.map((name) => {
//   return (`His name is ${name}`);
// })

// namesArray.push(`${new Date().toString()} is current timestamp`);

// fs.writeFileSync("./output/output.txt", namesArray.join("\n"));

// console.log("File has updated");

// Non blocking, async way
// fs.readFile("./txt/read-this.txt", "utf-8", (error, data) => {
//   console.log(data);
// })
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/") {
    res.end("This is a root");
  } else if (pathName === "/overview") {
    res.end("Thit is an OVERVIEW");
  } else if (pathName === "/product") {
    res.end("Thit is an PRODUCT PAGE ");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "MyOwnHeader": "TestHeader",
    });
    res.end("<h1>404 Page not found</h1>");
  }

});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});