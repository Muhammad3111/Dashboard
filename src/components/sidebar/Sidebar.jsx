import { useState } from 'react';
import { AiOutlineAppstore, AiOutlineShoppingCart, AiOutlineShopping, AiOutlineLogout, AiOutlineMessage, AiOutlinePieChart, AiOutlineSetting, AiOutlineUsergroupAdd, AiFillCodeSandboxCircle } from 'react-icons/ai';
import { SiAccusoft } from 'react-icons/si';
import './sidebar.scss';

export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);

  return (
    <section className='sidebar'>
      <div className='top'>
        <div className="brand">
          <AiFillCodeSandboxCircle />
          <span>Prime Coder</span>
        </div>
        <div className="links">
          <ul>
            <li className={currentLink === 1 ? 'active' : ''}
              onClick={() => setCurrentLink(1)}
            >
              <a href="#">
                <AiOutlineAppstore />
                <span className="border">Dashboard</span>
              </a>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <a href="#">
                <AiOutlineShoppingCart />
                <span className="border">Orders</span>
              </a>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <a href="#">
                <AiOutlineShopping />
                <span className="border">Products</span>
              </a>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <a href="#">
                <AiOutlinePieChart />
                <span className="border">Overview</span>
              </a>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <a href="#">
                <AiOutlineUsergroupAdd />
                <span className="border">Customers</span>
              </a>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}
            >
              <a href="#">
                <AiOutlineMessage />
                <span className="border">Message</span>
              </a>
            </li>
            <li
              className={currentLink === 7 ? "active" : "none"}
              onClick={() => setCurrentLink(7)}
            >
              <a href="#">
                <AiOutlineSetting />
                <span className="border">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="map">
        <SiAccusoft />
        <span>Unlock more information<br />
          now ! Upgrade to
          <a href="#"><strong> PRO</strong></a>
        </span>
      </div>
      <div className="logout">
        <a href="#">
          <AiOutlineLogout />
          <span>Logout</span>
        </a>
      </div>
    </section>
  );
}
