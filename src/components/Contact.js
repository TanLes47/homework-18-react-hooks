import React from 'react';
import './style/Contacts.css';
import telephone from './assets/phone.png';
import man from './assets/man.png';
import woman from './assets/woman.png';
import anonymous from './assets/anonymous.png';

const Contact = ({ firstName, lastName, phone, gender }) => {
    return (
        <>
            <div className='container'>
                <div className='main_info'>
                    <div className='icon'>
                        <img src={gender === 'male' ? man : gender === 'female' ? woman : anonymous} alt='' />
                    </div>
                    <div className='info'>
                        <div className='name'> {firstName + ' ' + lastName}
                        </div>
                        <div className='number_phone'> {phone}
                        </div>
                    </div>
                    <div className='phone'>
                        <img src={telephone} alt='' />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Contact;
