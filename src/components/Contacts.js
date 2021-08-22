import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import "./style/Contacts.css";

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

const Contacts = () => {
    const [searchItem, setSearchItem] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = contacts.filter(contact =>
            contact.firstName.toLowerCase().includes(searchItem.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(searchItem.toLowerCase()) ||
            contact.phone.toLowerCase().includes(searchItem.toLowerCase())
        );
        setSearchResults(results);
    }, [searchItem]);

    const handleSearchChange = (e) => {
        setSearchItem(e.target.value)
    }
    return (
        <div className='wrapper'>
            <div className='contact'>
                <span className='contacts'>Contacts</span>
            </div>
            <div className='input'>
                <input type='text' placeholder='search' onChange={handleSearchChange}
                    value={searchItem} />
            </div>
            <div className='contacts_wrapper'> {searchResults.map((contact, index) =>
                <Contact firstName={contact.firstName}
                    lastName={contact.lastName}
                    phone={contact.phone}
                    gender={contact.gender}
                    key={index}
                />)}
            </div>
        </div>
    )
}

export default Contacts;