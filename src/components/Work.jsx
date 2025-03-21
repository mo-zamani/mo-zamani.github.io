import React from 'react';
import styled from 'styled-components';

const Work = () => {
  return (
    <WorkSection id="works">
      <Container>
        <SectionTitle>Work Experience</SectionTitle>
        
        <WorkItem>
          <WorkHeader>
            <WorkTitle>Teaching Assistant</WorkTitle>
            <WorkCompany>University of Tehran & Shahid Beheshti University</WorkCompany>
          </WorkHeader>
          <WorkDescription>
            <WorkList>
              <WorkListItem>Engineering Mathematics (2022 - 2024)</WorkListItem>
              <WorkListItem>Finite Element Methods (2023 - 2024)</WorkListItem>
              <WorkListItem>Mechanics of Materials II (2021 - 2022)</WorkListItem>
            </WorkList>
          </WorkDescription>
        </WorkItem>
      </Container>
    </WorkSection>
  );
};

const WorkSection = styled.section`
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

const WorkItem = styled.div`
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  transition: all 0.3s ease;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const WorkHeader = styled.div`
  margin-bottom: 20px;
`;

const WorkTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #333;
  margin: 0 0 10px 0;
`;

const WorkCompany = styled.h4`
  font-size: 18px;
  font-weight: 500;
  color: #11ABB0;
  margin: 0;
`;

const WorkDescription = styled.div`
  color: #555;
  font-size: 16px;
  line-height: 1.7;
`;

const WorkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const WorkListItem = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 8px;
    height: 8px;
    background: #11ABB0;
    border-radius: 50%;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export default Work;