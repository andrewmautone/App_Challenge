const express = require('express')
const api = require('../services/api')
const helper = require('../helper/helper')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const jwtConfig = require('../jwtConfig/jwt.json')
class UserController {

    store = async (req, res) => {
        const body = req.body;

        const {data} = await api.get('/users', { params: { email:body.email.toLowerCase() } });
        
        if(data.length  > 0)
         return res.status(400).send(helper.createError('Email already in use'))
        
         try{
         const userData = helper.validateUser(body);
         const newUser =  await api.post('/users',{...userData,password:await bcrypt.hash(userData.password,12)})
         const token = jwt.sign({id:newUser.data.id,username:newUser.data.username},jwtConfig.secret,jwtConfig.options)

         return res.status(200).send({...newUser.data,email:newUser.email.toLowerCase(),password:undefined,token})
         }
         catch(err){

            return res.status(400).send(err);
         }
     

    }
    update = async (req, res) => {

        if(req.userId != req.params.id)
        return res.status(400).send(helper.createError('Not authorized'))


        const oldData = await api.get('/users/'+req.params.id);
        const body = req.body;
        
        oldData.data['bio'] = body.bio;

        try {
           
            const response = await api.put('/users/' + req.params.id,  oldData.data);
            res.status(200).send({...response.data,password:undefined})

        }
        catch (err) {
            return res.status(400).send(helper.createError('Not authorized'))
        }

       

    }
    index = async (req, res) => {
    
        const username = req.params.username;
        try {
        const response = await api.get('/users', { params: { username } });
        res.status(200).send({ ...response.data[0], password: undefined })
        }
        catch (err) {
            return res.status(500).send('Error')
          }

    }
    auth = async (req, res) => {
        try {
        const response = await api.get('/users/'+req.userId);
        res.status(200).send({ ...response.data, password: undefined })
        }
        catch (err) {
            return res.status(500).send('Error')
          }

    }




}
module.exports = new UserController();
