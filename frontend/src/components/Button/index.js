import React from 'react';
import Styles from './styles';

export default function Button({name,color,backgroundColor,width,height,onClick}) {
    return (
        <Styles onClick={onClick} style={{backgroundColor,color,width,height}}>
            
            <label>{name}</label>

        </Styles>
    );
}
