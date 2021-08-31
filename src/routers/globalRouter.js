import express from "express";
import {
    loginController,
    homeController,
    imageController,
    searchController,
    likeController,
    signinController,
    profileController,
    signupController,
    settingsController,
    signupPostController,
    changepassController,
    changepassPostController,
    imagePostController,
    imagecreateController,
    detailController,
    deleteBoardController,
    editController,
    editBoardController
} from "../controllers/globalContollr";

const globalRouter = express.Router();

globalRouter.get("/", loginController);
globalRouter.get("/home", homeController);
globalRouter.get("/search", searchController);
globalRouter.get("/image", imageController);
globalRouter.get("/imagecreate", imagecreateController);
globalRouter.get("/like", likeController);
globalRouter.get("/profile", profileController);
globalRouter.get("/signup", signupController);
globalRouter.get("/settings", settingsController);
globalRouter.get("/changepass", changepassController);
globalRouter.get("/detail", detailController);
globalRouter.get("/edit", editController);


globalRouter.post("/signin", signinController);
globalRouter.post("/signupPost", signupPostController);
globalRouter.post("/changepassPost", changepassPostController);
globalRouter.post("/imagePost", imagePostController);
globalRouter.post("/deleteBoard", deleteBoardController);
globalRouter.post("/editBoard", editBoardController);

export default globalRouter;