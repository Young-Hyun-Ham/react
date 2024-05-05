
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TreeItems.css'; // Import CSS module


const MenuItem = ({ item, onItemSelected }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;
    
    const toggle = (event) => {
        // 탭삭제 초기화
        item.isTabDelete = false;
        if (item.lev === 3) { 
            setIsOpen(true);
        } else {
            setIsOpen(!isOpen);
        } 

        if (!hasChildren) handleClick(event);
    }
  
    // Ensure click events are handled properly
    const handleClick = (event) => {
        event.preventDefault();  // Prevent default link behavior
        event.stopPropagation(); // Stop event from bubbling up
        onItemSelected(item);    // Call the handler passed down from the parent
    };

    return (
        <div className="menuItem">
            <div className={`menuItemTitle ${isOpen && !item.isTabDelete ? 'open' : ''}`} onClick={toggle}>
                {hasChildren ? item.title : <Link to={item.path} state={item.params}>{item.title}</Link>}
            </div>
            {isOpen && hasChildren && (
                <div className="menuItemChildren" >
                {item.children.map((child) => (
                    <MenuItem key={child.id} item={child} onItemSelected={onItemSelected} />
                ))}
                </div>
            )}
        </div>
    );
    
    return (
        <div>
            <div onClick={handleClick} style={{ cursor: 'pointer', padding: '5px', border: '1px solid #ccc', marginTop: '2px' }}>
                {item.title}
            </div>
            {item.children && (
                <div style={{ marginLeft: '20px' }}>
                    {item.children.map(child => (
                        <MenuItem key={child.id} item={child} onItemSelected={onItemSelected} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuItem;
