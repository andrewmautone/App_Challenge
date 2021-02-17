import React, { useState } from 'react';
import Styles from './styles';

import RoundImage from '../../components/RoundImage';

export default function Profile() {

    const [email, setEmail] = useState('');


    return (
        <Styles>
            <div className='topBarBackground'>
                <div className='profilePic'>
                    <RoundImage size={100} />
                </div>
            </div>



        </Styles>
    );
}
