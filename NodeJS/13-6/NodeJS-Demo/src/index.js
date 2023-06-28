


const validate = require("./middleware/user");

const express = require("express");
const app = express();
const port = 3000;
const bookRouter = require("./routes/book");
const userRouter = require("./routes/user");
// const getUserById=require('./routes/user');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRouter = require("./routes/products");

app.use("/api/v1/", bookRouter);
app.use("/api/v1/", userRouter);

app.use("/v2/", productRouter);

// function validate(req, res, next) {
//   const { username,password } = req.body;
//   console.log(username);
//   if (username === undefined || username==="" || username.length>20) {
//     next("Username is null or too long!");
//   }
//   if (password === undefined || password==="" || password.length>8) {
//     next("password is null or too long!");
//   }
//   next();
// }
app.post("/users", validate.validate, function (req, res) {
  console.log(typeof req.body);
  res.json(req.body);
});

//phần này dùng để chỉnh thông báo lỗi, hiện message something bad occur thay vì Username is null!
// app.use((err, req, res, next) => {
//   console.log(err);
//   res.json({ message: "something bad occur" });
// });

// app.listen(PORT,function (err){

// })


//gui tin nhan qua lai
// app.get("/message/:msg", (req, res) => {
//   let msg = req.params.msg;
//   console.log("message: ", msg);
//   res.send("message is sent...");
// });
app.use("/", (request, response) => response.send("Hello, server is online"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
