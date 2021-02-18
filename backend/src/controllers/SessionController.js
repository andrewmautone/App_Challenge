const api = require('../services/api')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const jwtConfig = require('../jwtConfig/jwt.json')
const helper = require('../helper/helper')

class SessionController {

    login = async  (req, res) => {
  
        const body = req.body;
        
        if(!body.password || !body.email)
        return res.status(400).send(helper.createError('Your need to send password and email'));

      

        const {data} = await api.get('/users', { params: { email:body.email.toLowerCase() } });

        if(data.length <= 0)
        return res.status(401).send(helper.createError('Your email or password is invalid'));

        if(await bcrypt.compare(body.password,data[0].password)){
            const token = jwt.sign({id:data[0].id,username:data[0].username},jwtConfig.secret,jwtConfig.options)
            return res.send({token,username:data[0].username})

        }

        return res.status(401).send(helper.createError('Your email or password is invalid'));

    }
    




}
module.exports = new SessionController();
