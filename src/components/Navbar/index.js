import React from 'react';
import { FaBars } from 'react-icons/fa'; // THESE ARE ICONS FROM REACT SO U DONT IMPORT
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

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Meta Fruits</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="mintNFT">Mint An NFT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="roadmap">Roadmap</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="team">Team</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="utility">Utility</NavLinks>
            </NavItem>
          </NavMenu>
          <Navbtn>
            <NavBtnLink to="/connectwallet"> Connect Wallet</NavBtnLink>
          </Navbtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
