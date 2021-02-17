import React from 'react';
import Styles from './styles';

export default function Input({placeholder,width,value,onChange,type}) {
    return (
        <Styles style={{width:width}}>
            
           <input value={value} 
           onChange={(elm) => onChange &&  onChange(elm.target.value)}
           type={type && type}
            placeholder={placeholder}
            />

        </Styles>
    );
}
