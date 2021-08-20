import express from "express";
import {
    loginController,
    homeController,
    imageController,
    searchController,
    likeController,
    signinController,
    profileController,
    signupController
} from "../controllers/globalContollr";

const globalRouter = express.Router();

globalRouter.get("/", loginController);
globalRouter.get("/home", homeController);
globalRouter.get("/search", searchController);
globalRouter.get("/image", imageController);
globalRouter.get("/like", likeController);
globalRouter.get("/profile", profileController);
globalRouter.get("/signup", signupController);

globalRouter.post("/signin", signinController);

export default globalRouter;