import React, { useState, useEffect,useContext } from 'react';
import Styles from './styles';
import logo from '../../images/logo.png'
import steam from '../../images/steam.png'
import battlenet from '../../images/battlenet.png'
import origin from '../../images/origin.png'
import riot from '../../images/riot.png'
import RoundImage from '../../components/RoundImage';

import {Context} from "../../context/mainContext";
import { useHistory } from "react-router-dom";

export default function HeaderBar() {
    const images = {
        Steam: steam,
        BattleNet: battlenet,
        Origin: origin,
        Riot: riot


    }
    const context = useContext(Context)
    const History = useHistory();
    return (
        <Styles>
           <div className='topBarBackground'>
                <img onClick={()=>History.push('/profile')}src={logo} style={{width:document.body.clientWidth < 500 && 65}} className='logo' />
                {context.user?.username ? <div className='profilePic'>
                    <RoundImage size={85} />
                    <div className='profileTopInfos'>

                        <label className='profileName' style={{cursor:'pointer'}} onClick={()=>History.push('/profile')}>{context.user?.username}</label>
                        <div className='exitAndIcons'>
                            <div className='iconsContainer'>

                        {Object.keys(context.user?.connections).map(elm =>
                            
  
                            <img onClick={()=>window.open(context.user?.connections[elm].url,'_blank')} src={images[elm]} />

                        ) 
                      
                        }
                               
                            </div>

                            <label className='exitLabel' onClick={() => {History.push('/login');localStorage.clear();context.setToken('');context.setUser({})}}>Exit</label>
                        </div>
                    </div>

                </div>: <label className='profileName' onClick={()=>History.push('/login')} style={{marginRight:20,cursor:'pointer'}}>Login</label>}

            </div>
        </Styles>
    );
}
