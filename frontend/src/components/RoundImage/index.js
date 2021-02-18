import React from 'react';
import Styles from './styles';
import defaultPhoto from '../../images/defaultPhoto.png';

export default function Input({size}) {
    return (
        <Styles style={{width:size,height:size,borderRadius:size}}>
            <img src={defaultPhoto} style={{width:size,borderRadius:size,height:size}}/>


           

        </Styles>
    );
}
