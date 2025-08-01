require('dotenv').config()
const express = require("express");
const app = express();
const itemsRouter = require("./routes/itemsRouter");
const pagesRouter = require("./routes/pagesRouter");
const categoriesRouter = require("./routes/categoriesRouter");

app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use('/', pagesRouter);
app.use('/items', itemsRouter);
app.use("/categories", categoriesRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`RPG Shop listening on port ${port}`)
})
