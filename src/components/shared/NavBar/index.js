import React, { useState } from 'react';
import Logo from "./Logo"
import { Link, NavLink } from 'react-router-dom';
import TrainingsMegaMenu from './TrainingsMegaMenu';
import ServicesMegaMenu from './ServicesMegaMenu';
import search from "../../../assets/search.png"
import Modal from "../../shared/Modal"
import Appointment from "../../pages/Appointment"
import Contact from "../../pages/Contact"
import SignUp from '../../pages/SignUp';
import Login from "../../pages/Login"
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [isPop1Open, setIsPop1Open] = useState(false)
  const { t } = useTranslation();

  const hideNPop1Modal = () => {
    setIsPop1Open(false)
  }

  const [isPop2Open, setIsPop2Open] = useState(false)

  const hideNPop2Modal = () => {
    setIsPop2Open(false)
  }

  const [isPop3Open, setIsPop3Open] = useState(false)

  const hideNPop3Modal = () => {
    setIsPop3Open(false)
  }

  const [isPop4Open, setIsPop4Open] = useState(false)

  const hideNPop4Modal = () => {
    setIsPop4Open(false)
  }

  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false)
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    }
    else
      setNavbar(false);
  }
  const openTrainingDropDown = () => {
    setDropdown(true)
  }
  const openServicesDropDown = () => {
    setDropdown1(true)
  }

  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <Logo />
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink exact to='/' className='nav-links' onClick={closeMobileMenu}>
              {t('navBar.Home')}
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>
              {t('navBar.About')}
            </NavLink>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              className='nav-links'
              onClick={openTrainingDropDown}
            >
              {t('navBar.Tranings')} <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <TrainingsMegaMenu />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              className='nav-links'
              onClick={openServicesDropDown}
            >
              {t('navBar.Services')}  <i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <ServicesMegaMenu />}
          </li>
          <li className='nav-item'>
            <div
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <button className="nav-item-buttons" onClick={() => setIsPop1Open(!isPop1Open)} > {t('navBar.Appointment')}</button>
              <Modal
                show={isPop1Open}
                handleClose={hideNPop1Modal}
              >
                <Appointment />
              </Modal>
            </div>
          </li>
          <li className='nav-item'>
            <div
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <button className="nav-item-buttons" onClick={() => setIsPop2Open(!isPop2Open)}> {t('navBar.Contact')}</button>
              <Modal
                show={isPop2Open}
                handleClose={hideNPop2Modal}
              >
                <Contact />
              </Modal>
            </div>
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              <img src={search}></img>
            </Link>
          </li>
          <li className='nav-item'>
            <div
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <button className="solid-button" onClick={() => setIsPop3Open(!isPop3Open)}>{t('btn.login')}</button>
              <Modal
                show={isPop3Open}
                handleClose={hideNPop3Modal}
              >
                <Login />
              </Modal>
            </div>
          </li>
          <li className='nav-item'>
            <div
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <button className="outline-button-navbar" onClick={() => setIsPop4Open(!isPop4Open)}>{t('btn.signUp')}</button>
              <Modal
                show={isPop4Open}
                handleClose={hideNPop4Modal}
              >
                <SignUp />
              </Modal>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
