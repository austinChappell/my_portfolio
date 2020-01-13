// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Skill, { SkillProps } from './Skill';

// Local Variables
const skills: SkillProps[] = [
  {
    imageFileName: 'react.svg',
    skillName: 'React',
  },
  {
    imageFileName: 'graphql.png',
    skillName: 'GraphQL',
  },
  {
    imageFileName: 'typescript.png',
    skillName: 'TypeScript',
  },
  {
    imageFileName: 'nodejs_logo.png',
    skillName: 'NodeJS',
  },
  {
    imageFileName: 'postgres.svg',
    skillName: 'PostgreSQL',
  },
  {
    imageFileName: 'mongodb.png',
    skillName: 'MongoDB',
  },
];
const List = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: 960,
});

// Component Definition
const Skills: React.FC = () => {
  return (
    <List>
      {skills.map(skill => (
        <Skill
          key={skill.skillName}
          {...skill}
        />
      ))}
    </List>
  )
}

export default Skills;
