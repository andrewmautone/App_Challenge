import React,{useState} from 'react';
import Styles from './styles';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import logo from '../../images/logo.png'
import {useHistory} from "react-router-dom";
export default function Login() {

    const History = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errMessage,setErrMessage] = useState('');

    return (
        <Styles>
              <img src={logo}/>
            <Card>
                
                <div className='buttonContainer'>
                  
                    <div className='inputContainer'>
                        <Input value={email} onChange={setEmail} placeholder={'E-mail'} width='90%' />
                        <Input value={password} onChange={setPassword} type={'password'} placeholder={'Password'} width='90%' />
                        <label className='errMessage'>{errMessage && ' '}</label>
                    </div>
                   
                    <Button onClick={()=>History.push('/profile')} name='Login' width='90%' />
                    <label className='buttonSignup' onClick={()=>History.push('/register')}>Don't have an account? Sign-up</label>
                   
                </div>
            </Card>
        </Styles>
    );
}
