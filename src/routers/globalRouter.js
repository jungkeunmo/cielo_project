import express from "express";
import {
    homeController,
} from "../controllers/globalContollr";

const globalRouter = express.Router();

globalRouter.get("/", homeController);

export default globalRouter;