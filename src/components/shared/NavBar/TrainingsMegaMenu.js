import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {

          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                data-aos="zoom-in"
              >
                <div className="dropdown-link-items">
                  <div className="image">
                    <img src={item.image} />
                  </div>
                  <div className="link-content">
                    <h4> {item.title}</h4>
                    <h6> {item.description}</h6>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
