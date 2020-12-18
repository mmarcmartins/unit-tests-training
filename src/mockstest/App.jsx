import React, { useState } from 'react';
const axios = require('axios');

const App = (props) => {  

  const { myFunction = new Function() , ...otherProps} = props;
  const [appUsers, setAppUsers] = useState([]);
  const [loading, setLoading] = useState('...');

  const getUsers = async () => {
    setLoading('loading');
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');            
    setAppUsers(users.data);
    setLoading('not loading');
  }

  const handleClick = async () => {
    myFunction();
    await getUsers();
  }

  return (
    <div>
      <h1>Um titulo bonito</h1>
      <span>{loading}</span>
      <ul>
        {appUsers.map((user, index) => (
          <li key={index}>
            {user.name}
          </li>
        ))}
      </ul>
      <button onClick={() => handleClick()}>Carregar usuários</button>      
    </div>
  )
}
export default App;