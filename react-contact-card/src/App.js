import './styles.css';
import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';

const App = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=10')
			.then((response) => response.json())
			.then((data) => {
				setContacts(data.results);
			});
	}, []);

	return (
		<>
			{contacts.map((contact) => (
				<ContactCard
					avatar={contact.picture.large}
					name={contact.name.first + ' ' + contact.name.last}
					email={contact.email}
					age={contact.dob.age}
				/>
			))}
		</>
	);
};

export default App;
