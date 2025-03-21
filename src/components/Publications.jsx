import React from 'react';
import styled from 'styled-components';

const Publications = () => {
  return (
    <PublicationsSection id="publications">
      <Container>
        <SectionTitle>Publications</SectionTitle>
        
        <PublicationsList>
          <PublicationItem>
            <PublicationTitle>
              Finite Element Solution of Coupled Multiphysics Reaction-Diffusion Equations for Fracture Healing
            </PublicationTitle>
            <PublicationDetails>
              Published in <PublicationJournal>Computers in Biology and Medicine, 2024</PublicationJournal>
            </PublicationDetails>
            <PublicationDescription>
              This paper presents a novel computational approach to modeling the complex biological processes 
              involved in bone fracture healing using advanced finite element methods.
            </PublicationDescription>
          </PublicationItem>
          
          <PublicationItem>
            <PublicationTitle>
              Biomechanics of Hard Tissues (Parts 6.1 & 6.4)
            </PublicationTitle>
            <PublicationDetails>
              Book Chapter in <PublicationJournal>Multiscale Biomechanics</PublicationJournal>, Wiley (2023)
            </PublicationDetails>
            <PublicationDescription>
              Contributed two key chapters to this comprehensive textbook, focusing on the mechanical properties 
              and computational modeling of bone and other hard tissues.
            </PublicationDescription>
          </PublicationItem>
        </PublicationsList>
      </Container>
    </PublicationsSection>
  );
};

const PublicationsSection = styled.section`
  background-color: #fff;
  padding: 90px 0;
  position: relative;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 50px;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -15px;
    width: 50px;
    height: 3px;
    background: #11ABB0;
    transform: translateX(-50%);
  }
`;

const PublicationsList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PublicationItem = styled.div`
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PublicationTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0 0 15px 0;
`;

const PublicationDetails = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
`;

const PublicationJournal = styled.span`
  font-style: italic;
  color: #11ABB0;
`;

const PublicationDescription = styled.p`
  color: #555;
  font-size: 15px;
  line-height: 1.7;
  margin: 0;
`;

export default Publications;