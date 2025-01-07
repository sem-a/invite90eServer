const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors({
  origin: 'https://sem-a.github.io/inivite90e/', // Укажите разрешённый источник
  methods: ['GET', 'POST'], // Разрешите необходимые методы
  allowedHeaders: ['Content-Type'] // Разрешите заголовки по необходимости
}));

app.use(logger("dev"));

app.use(express.static('public'));

// Отправляем файл index.html при запросе к /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", require("./routes/index"));

module.exports = app;
