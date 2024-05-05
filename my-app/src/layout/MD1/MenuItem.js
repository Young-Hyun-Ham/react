
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TreeItems.css'; // Import CSS module

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="menuItem">
        <div className={`menuItemTitle ${isOpen ? 'open' : ''}`} onClick={toggle}>
            {hasChildren ? item.title : <Link to={item.path} state={item.params}>{item.title}</Link>}
        </div>
        {isOpen && hasChildren && (
            <div className="menuItemChildren">
            {item.children.map((child) => (
                <MenuItem key={child.id} item={child} />
            ))}
            </div>
        )}
    </div>
    );
};

export default MenuItem;