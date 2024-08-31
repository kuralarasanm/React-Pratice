import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = (props) => {
	const [age, setAge] = useState(20);

	const [address, setAddress] = useState({
		addressLine1: '14 read road',
		town: 'react town',
	});

	const handleUpdateAll = () => {
		setAge(35);
		setAddress({
			addressLine1: 'new address',
			town: 'new town',
		});
	};

	//handling simple forms - username, password
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = () => {
		alert(`username: ${username} password: ${password}`);
		// validation, API calls etc
	};

	// conditional render - showing/hide a modal
	const [showText, setShowText] = useState(false);

	// working with lists - rendering a list people

	const [people, setPeople] = useState([
		{ name: 'chris', job: 'developer' },
		{ name: 'jenny', job: 'developer' },
		{ name: 'claire', job: 'developer' },
  ]);
  
  const addPerson = () => {
    setPeople([...people, { name: "Jim", job: "developer"}]);
  }

	return (
		<div className='container mt-5'>
			<div><b>age:</b> {age}</div>
			<button className='btn btn-danger' onClick={() => setAge((previousAge) => previousAge + 1)}>Increase age</button>
			<hr />
			<div><b>address line 1:</b> {address.addressLine1}</div>
			<div><b>town: </b>{address.town}</div>
			<div>
				<button className='btn btn-info' onClick={() => setAddress({ addressLine1: 'new addresss', town: 'new town' })}>update address</button>
			</div>
			<hr />
			<div>
				<button class="btn btn-warning" onClick={handleUpdateAll}>Update all</button>
			</div>
			<hr />
			<form onSubmit={handleSubmit}>
        <label htmlFor="">user name:</label>
				<input value={username} onChange={(event) => setUsername(event.target.value)}></input>
        <label htmlFor="">password:</label>
				<input value={password} onChange={(event) => setPassword(event.target.value)}></input>
				<button class="btn btn-success" type='onSubmit'>Submit</button>
			</form>
			<hr />
			{showText ? <span>Hello I am a modal :</span> : null}
			<div>
				<button class="btn btn-primary" onClick={() => setShowText(!showText)}>Toggle text</button>
			</div>
			<hr />
			{people.map((person) => (
				<div>
					<ul>
          <li>{person.name} is a {person.job}</li>
          </ul>
				</div>
			))}
      <button class="btn btn-secondary" onClick={addPerson}>Add a person</button>
		</div>
	);
};

export default App;