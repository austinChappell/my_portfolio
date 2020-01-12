// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Text from '../../../../components/Text';
import { space, colors } from '../../../../constants';

// Local Typings
export interface DetailsProps {
  description: string;
  technologies: string[];
  title: string;
}

// Local Variables
const Wrapper = styled.div({
  // alignItems: 'flex-end',
  display: 'flex',
  // justifyContent: 'space-between',
  flexDirection: 'column',
  marginLeft: space.xl,
  width: '100%',
});
const List = styled.ul({
  display: 'flex',
  listStyle: 'none',
  padding: 0,
});
const ListItem = styled.li({
  alignItems: 'center',
  backgroundColor: colors.secondaryDark,
  color: colors.white,
  display: 'flex',
  marginRight: space.lg,
  padding: `${space.xs}px`,
})

// Component Definition
const Details: React.FC<DetailsProps> = (props) => {
  return (
    <Wrapper>
      <Text
        as="h2"
        fontSize="lg"
      >
        {props.title}
      </Text>

      <Text as="p">
        {props.description}
      </Text>

      <List>
        {props.technologies.map(technology => (
          <ListItem key={technology}>
            <Text
              as="span"
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
