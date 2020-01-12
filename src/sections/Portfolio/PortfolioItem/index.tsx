// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import DesktopPreview from './DesktopPreview';
import Details, { DetailsProps } from './Details';
import Card from '../../../components/Card';
import Text from '../../../components/Text';
import Links, { LinksProps } from './Links';
import Description from './Description';

// Local Typings
interface Props extends DetailsProps, LinksProps {
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
});
const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

// Component Definition
const PortfolioItem: React.FC<Props> = (props) => {
  return (
    <Container>
      <Card>
        <Wrapper>
          <Text
            alignment="center"
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

          <Description>
            {props.description}
          </Description>

          <Links
            githubLink={props.githubLink}
            siteLink={props.siteLink}
          />
        </Wrapper>
      </Card>
    </Container>
  )
}

export default PortfolioItem;
