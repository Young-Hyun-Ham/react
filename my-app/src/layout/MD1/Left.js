import React from 'react';
import './TreeItems.css'; // Import CSS module
import menuItems from './MenuData';
import MenuItem from './MenuItem';

const Left = () => {
  return (
    <>
      {/* Links for navigation 
      <Link to="/">Home</Link>
      <Link to="/R031">017</Link>
      */}
      <div className='menuItem'>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} params={item.params} />
        ))}
      </div>
    </>
  );
};

export default Left;
