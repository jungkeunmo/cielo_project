import User from "../models/User";
import Image from "../models/Image";
import dotenv from "dotenv";
dotenv.config();

export const loginController = (req, res) => {
    const loginFlog = req.userLoginFlag || false;

    let isAuthenticated = false;

    if (loginFlog) {
        isAuthenticated = true;
    }

    if (isAuthenticated) {
        homeController(req, res);
    } else {
        res.render("screens/login");
    }
};

export const homeController = (req, res) => {
    res.render("screens/home");
};

export const searchController = (req, res) => {
    res.render("screens/search")
};

export const imageController = async (req, res) => {
    const ImageList = await Image.find({}, {});

    console.log(ImageList);

    res.render("screens/image", { ImageList });
};

export const likeController = (req, res) => {
    res.render("screens/like")
};

export const signinController = async (req, res) => {
    const sess = req.session;

    let loginFlag = false;

    const input_id = req.body.input_id;
    let input_pass = req.body.input_pass;
    input_pass = String(input_pass);


    try {
        const result = await User.find();

        Promise.all(
            result.map(user => {
                if (user.userId === input_id && user.userPassword === input_pass) {
                    loginFlag = true;

                    sess.userId = user._id;
                }
            })
        );
        req.userLoginFlag = loginFlag;
        console.log("[SYSTEM] 사용자가 로그인을 하였습니다.")
        loginController(req, res);
    } catch (e) {
        console.log("[SYSTEM] 사용자가 로그인을 시도하였지만 에러가 발생했습니다.")
        loginController(req, res);
    }
};

export const profileController = (req, res) => {
    res.render("screens/profile")
};

export const signupController = (req, res) => {
    res.render("screens/signup")
};

export const signupPostController = async (req, res) => {
    const {
        body: { input_id, input_pass },
    } = req

    try {
        const result = await User.create({
            userId: input_id,
            userPassword: input_pass,
        });

        loginController(req, res);
    } catch (e) {
        console.log(e);
        signupController(req, res);
    }
};

export const settingsController = (req, res) => {
    res.render("screens/settings")
};

export const changepassController = (req, res) => {
    res.render("screens/changepass")
};

export const changepassPostController = (req, res) => {
    res.render("screens/changepassPost")
};

export const imagecreateController = (req, res) => {
    res.render("screens/imagecreate")
};

export const imagePostController = async (req, res) => {
    const {
        body: { img, title, author, desc },
    } = req

    try {
        const D = new Date();
        let year = D.getFullYear();
        let month = D.getMonth() + 1;
        let date = D.getDate();

        month = month < 10 ? `0${month}` : month;
        date = date < 10 ? `0${date}` : date;

        const resultDate = `${year}-${month}-${date}`;

        const result = await Image.create({
            img: img,
            title: title,
            description: desc,
            author: author,
            created: resultDate,
        });

        imageController(req, res);
    } catch (e) {
        console.log(e);
        profileController(req, res);
    }
};

export const editController = async (req, res) => {
    const {
        query: { id },
    } = req;

    try {
        const result = await Image.findOne({ _id: id });

        res.render("screens/edit", { I: result });
    } catch (e) {
        console.log(e);
        imageController(req, res);
    }
};


export const detailController = async (req, res) => {
    const {
        query: { id },
    } = req;

    const mode = process.env.NODE_ENV;

    let IS_DEV = false;

    if (mode === "develop") IS_DEV = true;


    try {
        const result = await Image.findOne({ _id: id });

        res.render("screens/detail", { I: result, dev: IS_DEV });
    } catch (e) {
        console.log(e);
        homeController(req, res);
    }
};

export const deleteBoardController = async (req, res) => {
    const {
        body: { id },
    } = req;

    try {
        const result = await Image.deleteOne({ _id: id });
        imageController(req, res);
    } catch (e) {
        console.log(e);
        homeController(req, res);
    }
};

export const editBoardController = async (req, res) => {
    const {
        body: { id, img, title, desc, author },
    } = req;

    try {
        const result = await Image.updateOne({ _id: id }, {
            $set: {
                img: img,
                title: title,
                description: desc,
                author: author,
            },
        });
        imageController(req, res);
    } catch (e) {
        console.log(e);
        imageController(req, res);
    }

};