
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Addnew (){
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Fetch Items
  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Add Item
  const addItem = async () => {
    if (!name.trim() || !description.trim()) {
      alert('Please provide both a name and a description.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/items', { name, description });
      fetchItems();
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding item:', error.message);
    }
  };

  // Delete Item
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      // Update state locally for a better UX
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };

  return (
    <div>
      <h1>React + Node.js + MongoDB CRUD</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - {item.description}
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Addnew;