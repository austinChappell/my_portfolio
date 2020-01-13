// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Text from '../../../components/Text';
import { space } from '../../../constants';

// Local Typings
export interface SkillProps {
  imageFileName: string;
  skillName: string;
}

// Local Variables
const Image = styled.img({
  width: 100,
});
const Wrapper = styled.li({
  alignItems: 'center',
  display: 'flex',
  flexBasis: '30%',
  flexDirection: 'column',
  margin: space.lg,
});

// Component Definition
const Skill: React.FC<SkillProps> = (props) => {
  const src = require(`../../../assets/images/skills/${props.imageFileName}`);

  return (
    <Wrapper>
      <Image
        alt={props.skillName}
        src={src}
      />

      <Text
        as="h6"
        fontSize="sm"
      >
        {props.skillName}
      </Text>
    </Wrapper>
  )
}

export default Skill;
