import React from "react";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinksTitle>About Me</FooterLinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Contact Me</FooterLinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>

        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinksTitle>Videos</FooterLinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Social Media</FooterLinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            SWARAJ
          </SocialLogo>
          <WebsiteRights>Swaraj © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
