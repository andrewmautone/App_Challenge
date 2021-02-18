import React, { useState, useEffect, useContext } from 'react';
import Styles from './styles';
import logo from '../../images/logo.png'
import steam from '../../images/steam.png'
import battlenet from '../../images/battlenet.png'
import origin from '../../images/origin.png'
import riot from '../../images/riot.png'
import RoundImage from '../../components/RoundImage';
import Button from '../../components/Button';
import ConnectionCard from '../../components/ConnectionCard';
import HeaderBar from '../../components/HeaderBar';
import { useHistory, useParams } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import api from '../../services/api';
import { Context } from "../../context/mainContext";

export default function Profile() {
    const images = {
        Steam: steam,
        BattleNet: battlenet,
        Origin: origin,
        Riot: riot
    }
    
    const params = useParams();
    const History = useHistory();
    const [editingBio, setEditingBio] = useState(false);
    const [profile, setProfile] = useState({});
    const [bio, setBio] = useState('');
    const context = useContext(Context)


    const editBio = async () => {

        setEditingBio(false)
        const response = await api.put('/users/' + profile.id, { bio })
        setProfile({ ...profile, bio: response.data.bio })

    }
    const getUserInfo = async () => {

        try {
            const response = await api.get('/users/' + params.username)
            if ((Object.keys(response.data) == 0))
                return History.push('/profile')
            setProfile(response.data)
        }
        catch {


        }

    }
    useEffect(() => {
        getUserInfo();

    }, [])

    return (
        <Styles>
            <HeaderBar />

            <div className='contentPlace'>
                <div>
                    <RoundImage size={170} />
                    <label className='profileName'>{params.username}</label>
                    {!editingBio ?
                        <div className='profileBioContainer'>
                            <p>{profile.bio}</p>

                            {params.username == context.user?.username && <FaPen color={'white'} size={10} onClick={() => setEditingBio(true)} />}
                        </div>
                        :
                        <div >
                            <textarea maxlength="35" className='textAreaBioEdit' cols={30} value={bio} onChange={(t) => setBio(t.target.value)} />
                            <Button width='100%' height={30} name='Salvar' onClick={() => editBio()} />
                        </div>
                    }
                </div>
                <div className='breakLine' />
                <div>
                    <label className='divisionText'>Connections</label>
                </div>
                <div className='connectionsContainer'>


                    { params.username == context.user?.username ?

                        context.connectionTypes?.map((elm) =>

                            <ConnectionCard key={elm.id} id={elm.id}
                                icon={images[elm.name]}
                                interact={true}
                                assign={context.user?.connections[elm.name]}
                                name={elm.name} />

                        )

                        :     
                        profile?.connections &&
                        Object.keys(profile?.connections).map((elm) =>

                        <ConnectionCard key={elm.id} id={elm.id}
                         url={context.connectionTypes.find(con => con.name == elm).url}
                            icon={images[elm]}
                            assign={true}
                            interact={false}
                            name={elm} 
                            />
                        
                    )}



                </div>

            </div>
        </Styles>
    );
}
