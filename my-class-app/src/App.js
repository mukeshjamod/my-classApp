import React  from 'react';
import './App.css';
import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Mahi' },
  { id: 'u2', name: 'Amtra' },
  { id: 'u3', name: 'Devu' },
];


function App() {
    const usersContext  = {
      users: DUMMY_USERS
    }


  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder/>
    </UsersContext.Provider>

  
  );
}

export default App;
