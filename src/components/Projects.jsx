import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        
        <ProjectsGrid>
          <ProjectCard>
            <ProjectHeader>
              <ProjectTitle>Finite Element Solution of Bone Fracture Healing</ProjectTitle>
              <ProjectOrg>University of Tehran</ProjectOrg>
            </ProjectHeader>
            <ProjectDescription>
              Developed a comprehensive mathematical model for bone fracture healing using finite element methods. 
              The model incorporates multiphysics coupling of mechanical, biological, and chemical processes.
            </ProjectDescription>
            <ProjectTags>
              <ProjectTag>Finite Element</ProjectTag>
              <ProjectTag>Biomechanics</ProjectTag>
              <ProjectTag>MATLAB</ProjectTag>
            </ProjectTags>
          </ProjectCard>
          
          <ProjectCard>
            <ProjectHeader>
              <ProjectTitle>AI-Powered Structural Topology Optimization</ProjectTitle>
              <ProjectOrg>HPC Lab</ProjectOrg>
            </ProjectHeader>
            <ProjectDescription>
              Implemented reinforcement learning algorithms to optimize structural designs with minimal material usage 
              while maintaining structural integrity and performance requirements.
            </ProjectDescription>
            <ProjectTags>
              <ProjectTag>AI</ProjectTag>
              <ProjectTag>Optimization</ProjectTag>
              <ProjectTag>Python</ProjectTag>
            </ProjectTags>
          </ProjectCard>
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 15px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
`;

const ProjectOrg = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #11ABB0;
  margin: 0;
`;

const ProjectDescription = styled.p`
  color: #555;
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const ProjectTag = styled.span`
  background: rgba(17, 171, 176, 0.1);
  color: #11ABB0;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
`;

export default Projects;