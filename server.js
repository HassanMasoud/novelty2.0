if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const favicon = require("express-favicon");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

const indexRoute = require("./routes/index");
const authorRoute = require("./routes/authors");
const bookRoute = require("./routes/books");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(methodOverride("_method"));
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ limit: "10mb", extended: false }));
app.use(favicon(__dirname + "/public/favicon.ico"));

app.use("/", indexRoute);
app.use("/authors", authorRoute);
app.use("/books", bookRoute);

app.listen(process.env.PORT || 3000, () => "Server started");
