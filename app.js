const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");

const routes = require("./routes/routes.js");

const express = require("express");
const app = express();
const port = 3000;

app.engine("handlebars", handlebars.engine({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);


app.listen(port, function () {
    console.log(`The Best App In The World ™️ listening on port ${port}!`);
});
