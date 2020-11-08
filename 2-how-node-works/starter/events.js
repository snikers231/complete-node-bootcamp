const EventEmitter = require("events");
const fs = require("fs");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("There was a new Sale!");
});
myEmitter.on("newSale", (stock) => {
  console.log("Customer name is Jonas!");
  console.log(stock, " is a cost");
});

myEmitter.emit("newSale", 9);

