import React from 'react';
import styled from 'styled-components';

const Education = () => {
  return (
    <EducationSection id="education">
      <Container>
        <SectionTitle>Education & Research</SectionTitle>
        
        <Timeline>
          <TimelineItem>
            <TimelineIcon />
            <TimelineContent>
              <TimelineHeader>
                <h3><a href="https://ut.ac.ir/en" target="_blank" rel="noopener noreferrer">University of Tehran</a></h3>
                <TimelinePeriod>2019 - 2022</TimelinePeriod>
              </TimelineHeader>
              <TimelinePosition>M.Sc. in Structural Engineering</TimelinePosition>
              <TimelineDescription>
                <p>Thesis: Mathematical Modeling of Bone Fracture Healing</p>
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineIcon />
            <TimelineContent>
              <TimelineHeader>
                <h3>Graduate Research Assistant, HPC Lab</h3>
                <TimelinePeriod>2021 - Present</TimelinePeriod>
              </TimelineHeader>
              <TimelinePosition>University of Tehran</TimelinePosition>
              <TimelineDescription>
                <ul>
                  <li>Developed finite element models for bone fracture healing.</li>
                  <li>Applied machine learning to engineering datasets.</li>
                  <li>Researched topology optimization and AI-driven structural design.</li>
                </ul>
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </EducationSection>
  );
};

const EducationSection = styled.section`
  background-color: #f8f8f8;
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #e0e0e0;
    left: 50px;
    margin-left: -1.5px;
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 50px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: 50px;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #11ABB0;
  transform: translateX(-50%);
  z-index: 1;
  box-shadow: 0 0 0 4px rgba(17, 171, 176, 0.2);
  
  @media (max-width: 768px) {
    left: 30px;
    width: 16px;
    height: 16px;
  }
`;

const TimelineContent = styled.div`
  position: relative;
  margin-left: 90px;
  background: white;
  border-radius: 6px;
  padding: 25px 30px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  &:before {
    content: '';
    position: absolute;
    right: 100%;
    top: 15px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid white;
    border-bottom: 10px solid transparent;
  }
  
  @media (max-width: 768px) {
    margin-left: 60px;
    padding: 20px;
  }
`;

const TimelineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin: 0;
    
    a {
      color: #333;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: #11ABB0;
      }
    }
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    
    h3 {
      margin-bottom: 5px;
    }
  }
`;

const TimelinePeriod = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #11ABB0;
  background: rgba(17, 171, 176, 0.1);
  padding: 4px 10px;
  border-radius: 20px;
`;

const TimelinePosition = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #666;
  margin: 0 0 15px 0;
`;

const TimelineDescription = styled.div`
  color: #555;
  font-size: 15px;
  line-height: 1.7;
  
  p {
    margin: 0 0 10px 0;
  }
  
  ul {
    margin: 0;
    padding-left: 20px;
    
    li {
      margin-bottom: 8px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default Education;