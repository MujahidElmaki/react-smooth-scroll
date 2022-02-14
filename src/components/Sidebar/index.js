import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

function Sidebar() {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="mintNFT">Mint An NFT</SidebarLink>
          <SidebarLink to="roadmap">Roadmap</SidebarLink>
          <SidebarLink to="team">Team</SidebarLink>
          <SidebarLink to="utility">Utility</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/connectwallet"> </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
