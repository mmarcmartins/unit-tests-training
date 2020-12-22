import React, { useState, useEffect} from 'react';
const axios = require('axios');

const List = (props) => {  

  const { myFunction = new Function() , ...otherProps} = props;
  const [appUsers, setAppUsers] = useState([]);
  
  const getUsers = async () => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');         
    setAppUsers(users.data);
  }
  
  useEffect(() => {
     getUsers();
  },[])

  return (
    <div>
      <h1>Um titulo bonitão</h1>
      <ul>          
        {appUsers.map((user, index) => (
          <li key={index}>
            {user.name}
          </li>
        ))}
      </ul>      
    </div>
  )
}
export default List;