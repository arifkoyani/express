import app from "./app.js";
app.listen(4040, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Server is running doe...");
});

// import Class from "./class.js";
// import fs from "fs";
// // const server=require("../backend/index") this is CSSMatrixComponent.js (bydefault), its slow
// console.log("start");
// Server();
// Class();
// console.log("hello world salam");
// setTimeout(() => {
//   console.log("this is timer call");
// }, 1000);

// setImmediate(() => {
//   console.log("interImmediate");
// }, [0]);

// fs.readFile("./index.html", "base64", (err, data) => {
//   if (err) {
//     console.log("nnot read");
//     return;
//   }
//   console.log("file read successfully", data);
// });

// // fs.writeFile("./index.html", "hello", (e, data) => {
// //   console.log("this is data now", data);
// // });

// console.log("end");
