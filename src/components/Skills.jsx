import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  const skills = [
    { name: 'Python, MATLAB', level: 90, category: 'Programming' },
    { name: 'PyTorch, TensorFlow, Scikit-learn', level: 90, category: 'AI & Machine Learning' },
    { name: 'Finite Element Analysis, Abaqus', level: 90, category: 'Engineering Software' },
    { name: 'Optimization, Reinforcement Learning', level: 90, category: 'Frameworks & Methods' }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillInfo>
                <SkillName>{skill.name}</SkillName>
                <SkillCategory>{skill.category}</SkillCategory>
              </SkillInfo>
              <SkillBarWrapper>
                <SkillBar width={skill.level} />
                <SkillPercentage>{skill.level}%</SkillPercentage>
              </SkillBarWrapper>
            </SkillItem>
          ))}
        </SkillsContainer>
      </Container>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
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

const SkillsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SkillItem = styled.div`
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SkillName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
  
  @media (max-width: 576px) {
    margin-bottom: 5px;
  }
`;

const SkillCategory = styled.span`
  font-size: 14px;
  color: #11ABB0;
  background: rgba(17, 171, 176, 0.1);
  padding: 4px 10px;
  border-radius: 20px;
`;

const SkillBarWrapper = styled.div`
  position: relative;
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

const SkillBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.width}%;
  background: linear-gradient(to right, #11ABB0, #0F9295);
  border-radius: 5px;
  transition: width 1.5s ease-in-out;
`;

const SkillPercentage = styled.span`
  position: absolute;
  right: 0;
  top: -25px;
  font-size: 14px;
  font-weight: 600;
  color: #11ABB0;
`;

export default Skills;