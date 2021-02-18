const jwt = require('jsonwebtoken');
const jwtConfig = require('../jwtConfig/jwt.json')

module.exports = (req, res, next) => {


    var token = req.headers.authorization;


    if (!token)
        return res.status(401).send({
            status: "error",
            error: "Token inválido"
        })

    token = token.split(" ")[1]

    jwt.verify(token, jwtConfig.secret, (err, decoded) => {

        if (err)
            return res.status(401).send({
                status: "error",
                error: "Token inválido"
            })

        req.userId = decoded.id
        return next();

    })

}