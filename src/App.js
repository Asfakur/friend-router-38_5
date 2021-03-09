import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Friend from './Friend/Friend';


function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  }, [])

  return (
    <div >
      <h1>Friends : {friends.length}</h1>
      {
        friends.map(friend =><Friend friend={friend} key={friend.id}></Friend>)
      }
    </div>
  );
}

export default App;
