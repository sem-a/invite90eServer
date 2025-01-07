const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors({
  origin: 'http://mame45.ru/', // Укажите разрешённый источник
  methods: ['GET', 'POST'], // Разрешите необходимые методы
  allowedHeaders: ['Content-Type'] // Разрешите заголовки по необходимости
}));

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", require("./routes/index"));

module.exports = app;
