import { useState } from 'react';
import { Form, Logo, Stats, PackingList } from './components';

function App() {
  const [items, setItems] = useState([]);

  const handleAddNewItem = (newItem) => {
    setItems((currentItems) => [...currentItems, newItem]);
  };

  const handleDeleteItem = (itemId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  };

  const handleDoneItem = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      'Are you sure that you want to clear all items?'
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddNewItem={handleAddNewItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onDoneItems={handleDoneItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
