const user = require('../Models/user');

exports.userLogin = (req, res) => {
    const { username, password } = req.body;
    let isAuthenticated, message;
    user.find({
        username, password
    })
        .then(response => {
            if (response.length == 0) {
                isAuthenticated = false;
                message = "user Not Authenticated"
            }
            else {
                isAuthenticated = true;
                message = "user Authenticated"
            }
            res.status(200).json(
                {
                    isAuthenticated,
                    message,
                    user: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.userSignUp = (req, res) => {
    const { username, password, firstname, lastname } = req.body;

    let userObj = new user({
        username, password, firstname, lastname
    })

    userObj.save()
        .then(response => {
            res.status(200).json(
                {
                    message: "User SignedUp Successfully",
                    user: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}