const express = require("express");
const { PORT } = require("./config");
const apiRoutes = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("------------src/index.js--------------");
app.use("/api", apiRoutes);



app.listen(PORT, () => {
  console.log(`server serving on port : ${PORT}\nhttp://localhost:3000`);
});
