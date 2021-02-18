import React, { useState, useContext, useEffect } from 'react';
import Styles from './styles';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import logo from '../../images/logo.png'
import { useHistory } from "react-router-dom";
import api from "../../services/api"
import { Context } from "../../context/mainContext";

export default function Login() {

    const context = useContext(Context)
    const History = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {

        if (context.user?.username)
            History.push('/profile/' + context.user.username)



    }, [context.user?.username])
    const loginHandle = async () => {

        try {
            const { data } = await api.post('/session', { email, password })
            const profile = await api.get('/users/' + data.username)
            localStorage.setItem('token', data.token)
            context.setToken(data.token);
            context.setUser(profile.data);
            History.push('/profile/' + profile.data.username)
        }
        catch(err) {

            setErrMessage('Email or password invalid')
        }

    }
    return (
        <Styles>
            <img src={logo} />
            <Card>

                <div className='buttonContainer'>

                    <div className='inputContainer'>
                        <Input value={email} onChange={(t)=>{setEmail(t);setErrMessage('')}} placeholder={'E-mail'} width='90%' />
                        <Input value={password} onChange={(t)=>{setPassword(t);setErrMessage('')}}  type={'password'} placeholder={'Password'} width='90%' />
                        <label className='errMessage'>{errMessage? errMessage: ' '}</label>
                    </div>

                    <Button onClick={loginHandle} name='Login' width='90%' />
                    <label className='buttonSignup' onClick={() => History.push('/register')}>Don't have an account? Sign-up</label>

                </div>

            </Card>
        </Styles>
    );
}
