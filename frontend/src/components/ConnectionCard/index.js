import React from 'react';
import Styles from './styles';

export default function ConnectionCard({ children, name, id, assign,icon }) {
    return (
        <Styles>
            <p>{name}</p>
            <img src={icon}/>
            <div className='assignButton' style={{ backgroundColor: assign ? '#280807' : null }}>
              
                <p>{assign ? 'Desassociar' : 'Associar'}</p>
            </div>
        </Styles>
    );
}
