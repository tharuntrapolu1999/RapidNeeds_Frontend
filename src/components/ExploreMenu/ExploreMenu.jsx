import React from 'react';
import './ExploreMenu.css';
import { menu_list, esse_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div>
      {/* First section: Explore our Food */}
      <div className='explore-menu' id='explore-menu'>
        <h1 className='h1e'>Explore our Food</h1>
        <p className='explore-menu-text'>Choose from a diverse variety of food that satisfies your cravings.</p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                key={index}
                className='explore-menu-list-item'
              >
                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                <p className='item_menu'>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>

      {/* Second section: Explore other Essentials */}
      <div className='explore-menu' id='esse-menu'>
        <h1 className='h1e'>Explore other Essentials</h1>
        <p className='explore-menu-text'>Check out a variety of Daily Essentials.</p>
        <div className="explore-menu-list">
          {esse_list.map((item, index) => {
            return (
              <div key={index} className='explore-menu-list-item'>
                <img className="active" src={item.esse_image} alt={item.esse_name} />
                <p className='item_menu'>{item.esse_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ExploreMenu;
