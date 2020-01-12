// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import DesktopPreview from './DesktopPreview';
import Details, { DetailsProps } from './Details';
import Card from '../../../components/Card';
import Text from '../../../components/Text';

// Local Typings
interface Props extends DetailsProps {
  description: string;
  imageAltName: string;
  imageFileName: string;
}

// Local Variables
const Container = styled.li({
  display: 'flex',
  margin: 20,
  width: '40%',
  
  '@media only screen and (max-width: 900px)': {
    width: '100%',
  },
})
const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

// Component Definition
const PortfolioItem: React.FC<Props> = (props) => {
  return (
    <Container>
      <Card>
        <Wrapper>
          <Text
            as="h3"
            fontSize="lg"
          >
            {props.title}
          </Text>

          <DesktopPreview
            screenshotProps={{
              alt: props.imageAltName,
              fileName: props.imageFileName,
            }}
          />

          <Details
            technologies={props.technologies}
            title={props.title}
          />

          <Text as="p">
            {props.description}
          </Text>
        </Wrapper>
      </Card>
    </Container>
  )
}

export default PortfolioItem;
