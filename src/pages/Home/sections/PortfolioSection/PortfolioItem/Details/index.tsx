// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Text from '../../../../../../components/Text';
import { space, colors } from '../../../../../../constants';

// Local Typings
export interface DetailsProps {
  technologies: string[];
  title: string;
}

// Local Variables
const Wrapper = styled.div({
  alignItems: 'center',
  borderBottom: `1px solid ${colors.gray10}`,
  display: 'flex',
  flexDirection: 'column',
  marginTop: space.xl,
  paddingBottom: space.md,
  width: '100%',
});
const List = styled.ul({
  display: 'flex',
});
const ListItem = styled.li({
  alignItems: 'center',
  borderBottom: `2px solid ${colors.brand}`,
  color: colors.brand,
  display: 'flex',
  justifyContent: 'center',
  marginRight: space.lg,
  padding: `${space.xs}px`,
});

// Component Definition
const Details: React.FC<DetailsProps> = (props) => {
  return (
    <Wrapper>
      <List>
        {props.technologies.map(technology => (
          <ListItem key={technology}>
            <Text
              as="h6"
              fontSize="sm"
              padding={0}
            >
              {technology}
            </Text>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

export default Details;
