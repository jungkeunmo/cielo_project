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
    editBoardController,
    questionController,
    questiondetailController,
    questioncreateController,
    questioncreatepostController,
    questiondeletpostController,
    questioneditpostController,
    questioneditController
} from "../controllers/globalContollr";

const globalRouter = express.Router();

//login
globalRouter.get("/", loginController);
globalRouter.get("/signup", signupController);
globalRouter.get("/changepass", changepassController);

//screen main
globalRouter.get("/home", homeController);
globalRouter.get("/search", searchController);
globalRouter.get("/image", imageController);
globalRouter.get("/like", likeController);
globalRouter.get("/profile", profileController);

//image page
globalRouter.get("/imagecreate", imagecreateController);
globalRouter.get("/settings", settingsController);
globalRouter.get("/detail", detailController);
globalRouter.get("/edit", editController);

//question 
globalRouter.get("/question", questionController);
globalRouter.get("/questiondetail", questiondetailController);
globalRouter.get("/questioncreate", questioncreateController);
globalRouter.get("/questionedit", questioneditController);

//login post
globalRouter.post("/signin", signinController);
globalRouter.post("/signupPost", signupPostController);
globalRouter.post("/changepassPost", changepassPostController);

//image page post
globalRouter.post("/imagePost", imagePostController);
globalRouter.post("/deleteBoard", deleteBoardController);
globalRouter.post("/editBoard", editBoardController);

//question post
globalRouter.post("/questioncreatepost", questioncreatepostController);
globalRouter.post("/questiondeletepost", questiondeletpostController);
globalRouter.post("/questioneditpost", questioneditpostController);

export default globalRouter;