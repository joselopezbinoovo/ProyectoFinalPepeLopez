var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

var usuarios = require("./routes/users");
var productos = require("./routes/productos");
var auth = require("./routes/auth");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//Rutas

app.use("/api/usuarios/", usuarios);
app.use("/api/productos/", productos);
app.use("/api/auth/", auth);

//Conexion
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("tienda", "postgres", "root", {
  host: "192.168.0.78",
  dialect: "postgres",
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("la app ha arrancado");
  
  sequelize
    .authenticate()
    .then(() => {
      console.log("Nos hemos conectado a la base de datos");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });
});

module.exports = app;
