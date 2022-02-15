import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaDiscord, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About Us </FooterLinkTitle>
                <FooterLink to="/connectwallet"> Management</FooterLink>
                <FooterLink to="/connectwallet"> How it works</FooterLink>
                <FooterLink to="/connectwallet"> Testimonials</FooterLink>
                <FooterLink to="/connectwallet"> Investors </FooterLink>
                <FooterLink to="/connectwallet"> Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Contact Us </FooterLinkTitle>
                <FooterLink to="/connectwallet"> Email</FooterLink>
                <FooterLink to="/connectwallet"> Instagram</FooterLink>
                <FooterLink to="/connectwallet"> Discord</FooterLink>
                <FooterLink to="/connectwallet"> Twitter</FooterLink>
                <FooterLink to="/connectwallet"> Opensea</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About Us </FooterLinkTitle>
                <FooterLink to="/connectwallet"> Management</FooterLink>
                <FooterLink to="/connectwallet"> How it works</FooterLink>
                <FooterLink to="/connectwallet"> Testimonials</FooterLink>
                <FooterLink to="/connectwallet"> Investors </FooterLink>
                <FooterLink to="/connectwallet"> Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> About Us </FooterLinkTitle>
                <FooterLink to="/connectwallet"> Management</FooterLink>
                <FooterLink to="/connectwallet"> How it works</FooterLink>
                <FooterLink to="/connectwallet"> Testimonials</FooterLink>
                <FooterLink to="/connectwallet"> Investors </FooterLink>
                <FooterLink to="/connectwallet"> Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                {' '}
                metafruits
              </SocialLogo>
              <WebsiteRights>
                MetaFruits © {new Date().getFullYear()} All rights reserved{' '}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.twitter.com/datboymaki"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Discord">
                  <FaDiscord />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
}

export default Footer;
