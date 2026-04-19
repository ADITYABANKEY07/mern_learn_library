// Example #1 Stream example

// const fs = require("fs")

// const readbleStream = fs.createReadStream("adi.txt", "utf8");
// const writeableStream = fs.createWriteStream("output.txt");

// readbleStream.pipe(writeableStream)

// writeableStream.on("finish", ()=>{
//     console.log("File copy completed successfully");
// })
// readbleStream.on("error", (err)=>{
//     console.log("Error is to reading txt"+err);
// })
// writeableStream.on("error", ()=>{
//     console.error("Error writing file", err);
// })

// Example #2 Readable stream example

// const fs = require("fs");

// Create a readable stream from a file

// const readbleStream = fs.createReadStream("adi.txt", {
//   encoding: "utf8",
//   highWaterMark: 64 * 1024, // 64kb chunks
// });

// Events for readable streams

// readbleStream.on("data", (chunk) => {
//   console.log(`Received ${chunk.length} bytes of data`);
//   console.log(chunk);
// });

// readbleStream.on("end", () => {
//   console.log("No more data to read");
// });
// readbleStream.on("error", (err) => {
//   console.error("Error reading from  file", err);
// });

// Example #3 Writeable stream example

const fs = require("fs");

// Create a WriteAble Stream from a file

const writeableStream = fs.createWriteStream("output.txt");

// Events For WriteAble Streams

writeableStream.write("Hello");
writeableStream.write("Hello World");
writeableStream.write("Hello Aditya");

writeableStream.end();

writeableStream.on("finish", () => {
  console.log("File copy completed successfully");
});

writeableStream.on("error", (err) => {
  console.error("Error writing to stream", err);
});
