import React from 'react';
import Styles from './styles';

export default function ConnectionCard({  name, id, assign, icon,interact,url }) {
    return (
        <Styles style={{ height:!interact &&'7em',cursor:!interact &&'pointer'}} onClick={()=>!interact &&window.open(url, '_blank')}>
            <p>{name}</p>
            <img src={icon} />
            {interact &&
                <div className='assignButton' style={{ backgroundColor: assign ? '#280807' : null }}>

                    <p>{assign ? 'Disconnect' : 'Connect'}</p>
                </div>
            }
        </Styles>
    );
}
