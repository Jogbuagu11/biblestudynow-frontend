import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <ul>
        <li><Link to="/bible-studies">Bible Studies</Link></li>
        <li><Link to="/sermons">Sermons</Link></li>
        <li><Link to="/devotionals">Devotionals</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
