import React from 'react';
import Styles from './styles';

export default function Button({name,color,backgroundColor,width,onClick}) {
    return (
        <Styles onClick={onClick} style={{backgroundColor:backgroundColor,color:color,width:width}}>
            
            <label>{name}</label>

        </Styles>
    );
}
