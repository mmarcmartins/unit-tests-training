import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import ListStore from './store/ListStore';
import { loadAllUsers, createUser } from './store/ListEvents';

const axios = require('axios');

const ListEffector = () => {  

  const ListState = useStore(ListStore);
  
  const getUsers = async () => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');      
    createUser(users.data);
  }

  useEffect(() => {
     loadAllUsers(true);
     getUsers();
     loadAllUsers(false);  
  },[])

  return (
    <div>
      <h1>Um titulo bonitão</h1>
      { ListState.isLoading && (
        <span>Loading ...</span>
      )}            
      <ul>          
        {ListState.users.map((user, index) => (
          <li key={index}>
            {user.name}
          </li>
        ))}
      </ul>      
    </div>
  )
}
export default ListEffector;