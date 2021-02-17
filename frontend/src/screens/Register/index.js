import React,{useState} from 'react';
import Styles from './styles';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import logo from '../../images/logo.png';

export default function Register() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [name,setName] = useState('');
    const [errMessage,setErrMessage] = useState('');

    return (
        <Styles>
              <img src={logo}/>
            <Card>
                
                <div className='buttonContainer'>
                  
                    <div className='inputContainer'>
                        <Input value={name} onChange={setName} placeholder={'Name'} width='90%' />
                        <Input value={email} onChange={setEmail} placeholder={'E-mail'} width='90%' />
                        <Input value={password} onChange={setPassword} type={'password'} placeholder={'Password'} width='90%' />
                        <Input value={confirmPassword} onChange={setConfirmPassword} type={'password'} placeholder={'Confirm Password'} width='90%' />
                        <label className='errMessage'>{errMessage && ' '}</label>
                    </div>
                   
                    <Button name='Register' width='90%' />
                   
                   
                </div>
            </Card>
        </Styles>
    );
}
