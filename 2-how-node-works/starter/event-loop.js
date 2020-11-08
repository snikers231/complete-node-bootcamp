const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 2;

setImmediate(() => { console.log("Immidiate 1 finished"); });

fs.readFile("./test-file.txt", "utf-8", () => {
  console.log("File reading 1 finished");

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " password encrypted");
  } )
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " password encrypted");
  } )
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " password encrypted");
  } )
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " password encrypted");
  } )
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " password encrypted");
  } )
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " password encrypted");
  } )
});

setTimeout(() => { console.log("Timer 1 finished"); }, 0);

console.log("Hello from top level code");