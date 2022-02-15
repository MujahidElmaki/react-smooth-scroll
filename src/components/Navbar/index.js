import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'; // THESE ARE ICONS FROM REACT SO U DONT IMPORT
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Navbtn,
  NavBtnLink,
} from './NavbarElements';
import Utility from '../Utility';
function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Meta Fruits
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="Roadmap"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Roadmap
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Team"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Team
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="utility"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Utilites
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Gallery"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Start Minting
                </NavLinks>
              </NavItem>
            </NavMenu>
            <Navbtn>
              <NavBtnLink to="/connectwallet"> Connect Wallet</NavBtnLink>
            </Navbtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
