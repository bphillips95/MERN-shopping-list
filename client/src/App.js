import React, {useState} from 'react';
import './App.css';

function App() {

  const [items, setItems] = useState([])

  fetch("http://localhost:5000/api/items")
  .then(r => r.json())
  .then(items => setItems(items))
  .catch(err => console.log(err))
  return (
       <h3>
         {items.map(item => item.name)}
       </h3>
  );
}

export default App;
