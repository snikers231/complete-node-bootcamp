const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");
const replaceTemplate = require("./modules/replaceTemplate");

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

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, "utf-8");
const parsedData = JSON.parse(data);

const templateCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, "utf-8");
const templateOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, "utf-8");
const templateProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, "utf-8");

const server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url, true);
  const pathName = urlObj.pathname;

  // Overview page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const cardsHtml = parsedData.map(
        cardData => replaceTemplate(templateCard, cardData)
      ).join("");
    const output = templateOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);

    res.end(output);

  // Product page
  } else if (pathName === "/product") {
    const product = parsedData.find((obj) => obj.id === +urlObj.query.id);

    if (product) {
      const output = replaceTemplate(templateProduct, product);
      res.writeHead(200, {
        "Content-type": "text/html",
      });
      res.end(output);
    } else {
      res.writeHead(404, {
        "Content-type": "text/html",
      });
      res.end("<h1>Product not found</h1>");
    }

  // API
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);

  // Not found
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>404 Page not found</h1>");
  }

});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});