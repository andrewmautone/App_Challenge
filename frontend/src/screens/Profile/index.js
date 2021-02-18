import React, { useState } from 'react';
import Styles from './styles';
import logo from '../../images/logo.png'
import steam from '../../images/steam.png'
import battlenet from '../../images/battlenet.png'
import origin from '../../images/origin.png'
import riot from '../../images/riot.png'
import RoundImage from '../../components/RoundImage';
import Button from '../../components/Button';
import ConnectionCard from '../../components/ConnectionCard';
import { useHistory } from "react-router-dom";
import { FaPen } from "react-icons/fa";



export default function Profile() {
    const History = useHistory();
    const [email, setEmail] = useState('');
    const [editingBio, setEditingBio] = useState(false);
    const [bio, setBio] = useState('');


    return (
        <Styles>
            <div className='topBarBackground'>
                <img src={logo} className='logo' />
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

                            <label className='exitLabel' onClick={() => History.push('/login')}>Sair</label>
                        </div>
                    </div>

                </div>

            </div>


            <div className='contentPlace'>
                <div>
                    <RoundImage size={170} />
                    <label className='profileName'>Andrew Mautone</label>
                    {!editingBio ?
                        <div className='profileBioContainer'>
                            <p>{bio}</p>

                            <FaPen color={'white'} size={10} onClick={() => setEditingBio(true)} />
                        </div>
                        :
                        <div >
                            <textarea maxlength="35" className='textAreaBioEdit' cols={30} value={bio} onChange={(t) => setBio(t.target.value)} />
                            <Button width='100%' height={30} name='Salvar' onClick={() => setEditingBio(false)} />
                        </div>
                    }
                </div>
                <div className='breakLine' />
                <div>
                    <label className='divisionText'>Conexões</label>
                </div>
                <div>
                    <div className='connectionsContainer'>
                        <ConnectionCard icon={steam} assign={true} name='Steam' />
                        <ConnectionCard icon={battlenet} assign={false} name='BattleNet' />
                        <ConnectionCard icon={steam} assign={true} name='Steam' />
                        <ConnectionCard icon={steam} assign={true} name='Steam' />
                        <ConnectionCard icon={steam} assign={true} name='Steam' />

                    </div>
                </div>

            </div>
        </Styles>
    );
}
