import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Row>
          <ProfileColumn>
            <ProfileImage src="images/formalpic.jpg" alt="Mohammad Zamani" />
          </ProfileColumn>
          
          <ContentColumn>
            <SectionTitle>About Me</SectionTitle>
            
            <AboutText>
              I am a Research Fellow at the <a href="http://chpc.ut.ac.ir" target="_blank" rel="noopener noreferrer">High Performance Computing Lab</a>, <a href="http://civeng.ut.ac.ir" target="_blank" rel="noopener noreferrer">School of Civil Engineering</a>, <a href="http://ut.ac.ir" target="_blank" rel="noopener noreferrer">University of Tehran</a>, under the supervision of <a href="https://chpc.ut.ac.ir/smohammadi" target="_blank" rel="noopener noreferrer">Professor Soheil Mohammadi</a>.  
              <br /><br />
              I earned my M.Sc. in Structural Engineering from the same institution, also under his supervision.  
              <br /><br />
              I have served as a mentor and project TA at the <a href="https://Chpc.ut.ac.ir/" target="_blank" rel="noopener noreferrer">CHPC Lab</a>.  
              <br /><br />
              My research focuses on AI-driven engineering solutions, computational modeling, optimization algorithms, and intelligent design systems.
            </AboutText>
            
            <InfoRow>
              <ContactInfo>
                <SectionSubtitle>Contact Info</SectionSubtitle>
                <ContactDetails>
                  <span>Mohammad Zamani</span>
                  <span>
                    <a href="http://chpc.ut.ac.ir" target="_blank" rel="noopener noreferrer">CHPC Lab</a>,
                    <br />
                    <a href="http://www.ut.ac.ir/" target="_blank" rel="noopener noreferrer">University of Tehran</a>, Tehran, Iran.
                  </span>
                  <span>
                    Email: <a href="mailto:mail.zamani.m@gmail.com">mail.zamani.m@gmail.com</a>
                  </span>
                </ContactDetails>
              </ContactInfo>
              
              <DownloadColumn>
                <DownloadButton 
                  href="https://drive.google.com/file/d/1QPrZ_y0eYGE48SKffOHR7PodPnrQBMlV/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faDownload} /> Resume (CV)
                </DownloadButton>
              </DownloadColumn>
            </InfoRow>
          </ContentColumn>
        </Row>
      </Container>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  background-color: #fff;
  padding: 90px 0 72px;
  position: relative;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileColumn = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
  }
`;

const ContentColumn = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 220px;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 25px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 3px;
    background: #11ABB0;
  }
`;

const SectionSubtitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`;

const AboutText = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 30px;
  
  a {
    color: #11ABB0;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #0F9295;
      text-decoration: underline;
    }
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  
  @media (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

const ContactDetails = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.8;
  
  span {
    display: block;
    margin-bottom: 10px;
  }
  
  a {
    color: #11ABB0;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #0F9295;
      text-decoration: underline;
    }
  }
`;

const DownloadColumn = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  
  @media (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
    justify-content: flex-start;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  background: #11ABB0;
  color: #fff;
  padding: 12px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  svg {
    margin-right: 8px;
  }
  
  &:hover {
    background: #0F9295;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export default About;