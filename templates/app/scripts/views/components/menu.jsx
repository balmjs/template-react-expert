import React, { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';
import axios from 'axios';
import { isDev } from '@/config';

function MyMenu() {
  let [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = `/api/menu${isDev ? '' : '.json'}`;
      let response = await axios.get(url);
      let { code, message, data } = response.data;
      if (code === 200) {
        setMenu(data);
      } else {
        alert(message);
      }
    };

    if (!menu.length) {
      fetchData();
    }
  });

  return (
    <nav>
      <ul className="site-menu">
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={item.url} replace>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MyMenu;
