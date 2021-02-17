import React, { useState } from 'react';
import Styles from './styles';
import logo from '../../images/logo.png'
import steam from '../../images/steam.png'
import battlenet from '../../images/battlenet.png'
import origin from '../../images/origin.png'
import riot from '../../images/riot.png'
import RoundImage from '../../components/RoundImage';
import {useHistory} from "react-router-dom";



export default function Profile() {
    const History = useHistory();
    const [email, setEmail] = useState('');


    return (
        <Styles>
            <div className='topBarBackground'>
                <img src={logo} className='logo'/>
                <div className='profilePic'>
                    <RoundImage size={85} />
                    <div className='profileTopInfos'>

                        <label className='profileName'>Andrew Mautone</label>
                        <div className='exitAndIcons'>
                            <div className='iconsContainer'>
                                <img src={steam} />
                                <img src={battlenet} />
                                <img src={origin} />
                                <img src={riot} />
                            </div>
                            <label className='exitLabel' onClick={()=>History.push('/login')}>Sair</label>
                        </div>
                    </div>

                </div>

            </div>



        </Styles>
    );
}
