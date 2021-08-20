export const homeController = (req, res) => {
    res.render("screens/home")
};

export const searchController = (req, res) => {
    res.render("screens/search")
};

export const imageController = (req, res) => {
    res.render("screens/image")
};

export const likeController = (req, res) => {
    res.render("screens/like")
};

export const loginController = (req, res) => {
    const loginFlog = req.userLoginFlag || false;

    let isAuthenticated = false;

    if (loginFlog) {
        isAuthenticated = true;
    }

    if (isAuthenticated) {
        loginController(req, res);
    } else {
        res.render("screens/login");
    }
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
                if (user.userId === input_id && user.userPassword == input_pass) {
                    loginFlag = true;

                    sess.userId = user._id;
                }
            })
        );
        req.userLoginFlag = loginFlag;
        loginController(req, res);
    } catch (e) {
        console.log("[SYSTEM] 사용자가 로그인을 시도하였지만 에러가 발생했습니다.")
        loginController(req, res);
    }
};

