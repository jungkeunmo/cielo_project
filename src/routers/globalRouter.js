import express from "express";
import {
    homeController, imageController, searchController, likeController, loginController
} from "../controllers/globalContollr";

const globalRouter = express.Router();

globalRouter.get("/", homeController);
globalRouter.get("/search", searchController);
globalRouter.get("/image", imageController);
globalRouter.get("/like", likeController);
globalRouter.get("/login", loginController);

export default globalRouter;