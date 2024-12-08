const express = require("express");
const app = express();

const indexRouter = require("./routes/index");

app.use("/", indexRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`서버 http://localhost:${PORT}`);
});
