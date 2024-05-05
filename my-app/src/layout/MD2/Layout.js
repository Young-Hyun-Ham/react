import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import TabbedContent from './TabbedContent';
import './Layout.css'; // Importing CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import menuItems from './MenuData';
import MenuItem from './MenuItem';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import MainContent from './MainContent';

const Layout = () => {
  // tab Content 추가 부분 start
  const [tabs, setTabs] = useState([{id: 'home', title: <i className="fas fa-home"></i>, content: <MainContent /> }]);
  const [activeTab, setActiveTab] = useState('home');

  const handleItemSelected = (item) => {
      
    item.isDelete = false;

    // Check if the tab already exists, if not add it
    const existingTab = tabs.find(tab => tab.id === item.id);
    if (!existingTab) {
      const newTab = {
        id: item.id,
        title: item.title,
        //content: `Loaded content for ${item.title}`,
        content: item.content,
        path: item.path  // Assume each item has a 'path' property for navigation
      };
      setTabs([...tabs, newTab]);
    }
    setActiveTab(item.id);
  };

  const removeTab = (tabId) => {
    // Prevent removing the Home tab
    if (tabId === 'home') return;

    const updatedTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(updatedTabs);
    setActiveTab(updatedTabs.length ? updatedTabs[0].id : 'home');

    menuItems.map(lev1 => {
      lev1.children.map(lev2 => {
        lev2.children.map(lev3 => {
          if (lev3.id === tabId) lev3.isTabDelete = true;
        })
      });
    });
  };

  const removeAllTabs = () => {
    // Reset to only include the Home tab
    setTabs([{id: 'home', title: <i className="fas fa-home"></i>, content: <MainContent /> }]);
    setActiveTab('home');

    menuItems.map(lev1 => {
      lev1.children.map(lev2 => {
        lev2.children.map(lev3 => {
          lev3.isTabDelete = true;
        })
      });
    });
  };
  
  // Inline style for the home tab
  const homeTabStyle = {
    width: '64px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '5px'
  };
  // tab Content 추가 부분 end

  return (
    <Router>
      <div className="app-container">
        {/* left | tabContent 버전 */}
        <div className="menu-panel">
            {menuItems.map(item => (
                <MenuItem key={item.id} item={item} onItemSelected={handleItemSelected} />
            ))}
        </div>
        <div className="content-panel">
            <Nav tabs>
                {tabs.map(tab => (
                    <NavItem key={tab.id} style={tab.id === 'home' ? homeTabStyle : {}}>
                        <NavLink className={activeTab === tab.id ? 'active' : ''} onClick={() => handleItemSelected(tab)}>
                            {tab.title}
                        </NavLink>
                        {tab.id !== 'home' && (
                            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                                alt="Close"
                                className="tab-close-button"
                                onClick={(e) => { e.stopPropagation(); removeTab(tab.id); }} />
                        )}
                    </NavItem>
                ))}
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                  alt="Close All Tabs"
                  className="all-tabs-close-button"
                  onClick={removeAllTabs} />
            </Nav>
            {/* 
            <TabContent activeTab={activeTab}>
              <Routes>
                  {menuItems.map(tab => (
                      <Route path={tab.path} element={<TabPane tabId={tab.id}>{tab.content}</TabPane>} key={tab.id} />
                  ))}
              </Routes>
            </TabContent>
            */}
            <TabContent activeTab={activeTab}>
                {tabs.map(tab => (
                    <TabPane tabId={tab.id} key={tab.id}>
                        {tab.content}
                    </TabPane>
                ))}
            </TabContent>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
