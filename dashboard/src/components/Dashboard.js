import React, { useState } from 'react';

const Dashboard = () => {
  const [pinnedItems, setPinnedItems] = useState([]);

  const handlePin = (item) => {
    const updatedItems = [...pinnedItems, item];
    setPinnedItems(updatedItems);
  };

  const handleUnpin = (id) => {
    const updatedItems = pinnedItems.filter((item) => item.id !== id);
    setPinnedItems(updatedItems);
  };

  const compareItems = (a, b) => {
    if (a.page < b.page) {
      return -1;
    }
    if (a.page > b.page) {
      return 1;
    }
    if (a.page === b.page) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    }
    return 0;
  };

  const sortedItems = pinnedItems.sort(compareItems);

  return (
    <div>
      <h1>Dashboard</h1>
      {sortedItems.length === 0 ? (
        <p>No pinned items yet!</p>
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <li
              key={item.id}
              style={{ backgroundColor: item.color }}
              onClick={() => handleUnpin(item.id)}
              className="pinned"
            >
              {item.name} - {item.page}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;