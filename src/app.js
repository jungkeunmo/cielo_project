import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import path from "path";
import expessSession from "express-session";
import globalRouter from "./routers/globalRouter";

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    expessSession({
        secret: "@#@$MYSIGN#@$#$",
        resave: false,
        saveUninitialized: true,
    })
);

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log(`✅http://localhost:${PORT} , CIELO SERVER START✅`);
});