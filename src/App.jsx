import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

// Import components
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      <Header id="home">
        <Nav>
          <NavList>
            <NavItem><StyledLink to="home" smooth={true}>Home</StyledLink></NavItem>
            <NavItem><StyledLink to="about" smooth={true}>About</StyledLink></NavItem>
            <NavItem><StyledLink to="education" smooth={true}>Education</StyledLink></NavItem>
            <NavItem><StyledLink to="works" smooth={true}>Works</StyledLink></NavItem>
            <NavItem><StyledLink to="projects" smooth={true}>Projects</StyledLink></NavItem>
            <NavItem><StyledLink to="publications" smooth={true}>Publications</StyledLink></NavItem>
            <NavItem><StyledLink to="skills" smooth={true}>Skills</StyledLink></NavItem>
            <NavItem><StyledLink to="about" smooth={true}>Contact</StyledLink></NavItem>
          </NavList>
        </Nav>

        <Banner>
          <BannerText>
            <h3><span>My name is</span></h3>
            <h1>Mohammad Zamani</h1>
            <h3>
              <span>
                I am a Researcher and Developer in Computational Mechanics, Artificial Intelligence, and Biomedical Modeling, 
                focusing on Finite Element Analysis, Topology Optimization, and Reinforcement Learning in Engineering. 
                I am passionate about AI-driven solutions for structural and biomedical challenges and have a deep interest 
                in computational design and intelligent systems.
              </span>
            </h3>
            <SocialLinks>
              <SocialLink href="https://github.com/maxzamani" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/mohammad-zamani-087925189/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </SocialLink>
              <SocialLink href="https://scholar.google.com/citations?user=2nRWu88AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGooglePlus} />
              </SocialLink>
              <SocialLink href="mailto:mail.zamani.m@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </SocialLink>
            </SocialLinks>
          </BannerText>
        </Banner>
      </Header>
      
      {/* Main Content Sections */}
      <About />
      <Education />
      <Work />
      <Projects />
      <Publications />
      <Skills />
      
      {/* Footer */}
      <Footer>
        <FooterContainer>
          <FooterSocialLinks>
            <SocialLink href="https://github.com/maxzamani" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/mohammad-zamani-087925189/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>
            <SocialLink href="https://scholar.google.com/citations?user=2nRWu88AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGooglePlus} />
            </SocialLink>
            <SocialLink href="mailto:mail.zamani.m@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </SocialLink>
          </FooterSocialLinks>
          <Copyright>© {new Date().getFullYear()} Mohammad Zamani. All rights reserved.</Copyright>
          <BackToTop>
            <StyledLink to="home" smooth={true}>Back to Top</StyledLink>
          </BackToTop>
        </FooterContainer>
      </Footer>
    </div>
  );
};

const Header = styled.header`
  background: #161415 url(images/header-background.jpg) no-repeat top center;
  background-size: cover !important;
  background-attachment: fixed;
  height: 100vh;
  min-height: 500px;
  width: 100%;
  position: relative;
`;

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 20px 10px;
  display: inline-block;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #11ABB0;
  }
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 0 20px;
`;

const BannerText = styled.div`
  color: #fff;
  
  h1 {
    font-size: 90px;
    font-weight: 700;
    margin: 0;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, .8);
    
    @media (max-width: 768px) {
      font-size: 60px;
    }
    
    @media (max-width: 480px) {
      font-size: 48px;
    }
  }
  
  h3 {
    font-size: 18px;
    line-height: 1.9em;
    margin: 0;
    
    span {
      color: #A8A8A8;
    }
    
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #11ABB0;
    transform: translateY(-3px);
  }
`;

const Footer = styled.footer`
  background: #111;
  padding: 50px 0;
  color: #fff;
  text-align: center;
`;

const FooterContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Copyright = styled.p`
  color: #888;
  font-size: 14px;
  margin: 0 0 20px 0;
`;

const BackToTop = styled.div`
  margin-top: 20px;
  
  a {
    font-size: 14px;
  }
`;

export default App;