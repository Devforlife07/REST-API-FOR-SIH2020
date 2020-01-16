const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    let token = req.headers.authorization
    if (!token) {
        return res.status(401).send({
            message: "Unauthorized"
        })
    }
    let tokenValue = token.split(" ")[1];
    let user = jwt.verify(tokenValue, process.env.SECRET);
    req.user = user
    next();
}