import React, { useContext } from 'react';
import Styles from './styles';
import api from '../../services/api';
import { Context } from '../../context/mainContext'
export default function ConnectionCard({ id,name, assign, icon, interact, url }) {
    const context = useContext(Context)
    const connectHandle = async () => {

        if (assign) {
            const { data: user } = await api.post('/connection/remove/'+id)
            context.setUser(user)
        }
        else {
            const { data: user } = await api.post('/connection/add/'+id)
            context.setUser(user)
        }
    }
    return (
        <Styles style={{ height: !interact && '7em', cursor: !interact && 'pointer' }} onClick={() => !interact && window.open(url, '_blank')}>
            <p>{name}</p>
            <img src={icon} />
            {interact &&
                <div onClick={connectHandle} className='assignButton' style={{ backgroundColor: assign ? '#280807' : null }}>

                    <p>{assign ? 'Disconnect' : 'Connect'}</p>
                </div>
            }
        </Styles>
    );
}
