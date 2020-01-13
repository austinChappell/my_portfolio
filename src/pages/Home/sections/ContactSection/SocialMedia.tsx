// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Icon from '../../../../components/Icon';
import { space } from '../../../../constants';

// Local Variables
const iconSize = 40;

const List = styled.ul({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: space.xl,
});
const ListItem = styled.li({
  margin: space.sm,
});

// Component Definition
const SocialMedia: React.FC = () => {
  return (
    <List>
      <ListItem>
        <a href="https://twitter.com/AWCwebdeveloper">
          <Icon
            color="white"
            name="twitter"
            size={iconSize}
          />
        </a>
      </ListItem>

      <ListItem>
        <a href="https://github.com/austinChappell">
          <Icon
            color="white"
            name="github"
            size={iconSize}
          />
        </a>
      </ListItem>

      <ListItem>
        <a href="https://medium.com/@AWCwebdeveloper">
          <Icon
            color="white"
            name="medium"
            size={iconSize - 8}
          />
        </a>
      </ListItem>
    </List>
  )
}

export default SocialMedia;
