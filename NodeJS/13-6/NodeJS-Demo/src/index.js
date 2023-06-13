// console.log("hello");
// console.log(0.1 + 0.2);

const express = require("express");
const app = express();
const port = 3000;
const bookRouter= require('./routes/book');
const userRouter= require('./routes/user');
// const getUserById=require('./routes/user');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const productRouter = require('./routes/products');



app.use('/v1/',bookRouter);
app.use('/v1/',userRouter);

app.use('/v2/',productRouter);


// app.get("/message/:msg", (req, res) => {
//   let msg = req.params.msg;
//   console.log("message: ", msg);
//   res.send("message is sent...");
// });
app.use("/", (request, response) => response.send("Hello "));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 