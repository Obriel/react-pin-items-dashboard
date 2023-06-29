import React, { useState } from 'react';

const Page2 = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', color: 'red', pinned: false },
    { id: 2, name: 'Item 2', color: 'green', pinned: false },
    { id: 3, name: 'Item 3', color: 'blue', pinned: false },
  ]);

  const handlePin = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, pinned: !item.pinned } : item
    );
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Page 2</h1>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{ backgroundColor: item.color }}
            onClick={() => handlePin(item.id)}
            className={item.pinned ? 'pinned' : ''}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page2;