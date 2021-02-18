import React, { useState,useContext } from 'react';
import Styles from './styles';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import logo from '../../images/logo.png';
import api from '../../services/api';
import { useHistory } from "react-router-dom";
import { Context } from "../../context/mainContext";

export default function Register() {
    const History = useHistory();
    const context = useContext(Context)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errMessage, setErrMessage] = useState('');
   
    function validateEmail(email) {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    }
    const getUserInfo = async () => {

        const response = await api.get('/users')
        context.setUser(response.data)
        History.push('/profile/'+response.data.username)
        
    }

    const createAccount = async () => {
        setErrMessage("")
     
        if (/[^A-Za-z0-9]/.test(username)){
            setErrMessage("Name cannot contain special characters")
            return;
        }
        if (!username){
            setErrMessage("Invalid username")
            return;
        }
        if (username.length < 2){
            setErrMessage("Username is too short")
            return;
        }
        if (!validateEmail(email)){
            setErrMessage("Invalid email")
            return;
        }
        if (!password) {
            setErrMessage("Invalid password")
            return;
        }
        if (password.length < 5) {
            setErrMessage("Password is too short")
            return;
        }
        if (confirmPassword != password) {
            setErrMessage("Password mismatch")
            return;
        }
       
   
        setErrMessage("")
        
        try{
        const userData = (await api.post('/users',{username,password,email})).data;
        localStorage.setItem('token',userData.token);
        getUserInfo();
        }
        catch{

            setErrMessage("Email already taken")
        }

    }

    return (
        <Styles>
            <img src={logo} />
            <Card>

                <div className='buttonContainer'>

                    <div className='inputContainer'>
                        <Input value={username} onChange={setUsername} placeholder={'Username'} width='90%' />
                        <Input value={email} onChange={setEmail} placeholder={'E-mail'} width='90%' />
                        <Input value={password} onChange={setPassword} type={'password'} placeholder={'Password'} width='90%' />
                        <Input value={confirmPassword} onChange={setConfirmPassword} type={'password'} placeholder={'Confirm Password'} width='90%' />
                        <label className='errMessage'>{errMessage? errMessage: ' '}</label>
                    </div>

                    <Button onClick={createAccount} name='Register' width='90%' />


                </div>
            </Card>
        </Styles>
    );
}
