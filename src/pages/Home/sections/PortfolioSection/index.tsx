// External Dependencies
import React from 'react';

// Internal Dependencies
import Section from '../../../../components/Section';
import {
  colors,
  ids,
} from '../../../../constants';
import PortfolioItem from './PortfolioItem';
import PortfolioItemList from './PortfolioItemList';
import Container from '../../../../components/Container';
import SectionTitle from '../../../../components/SectionTitle';

// Local Typings
interface SinglePortfolioItem {
  description: string;
  fileName: string;
  githubLink: string;
  label: string;
  siteLink: string;
  technologies: string[];
}

// Local Variables
const portfolioItems: SinglePortfolioItem[] = [
  {
    description: 'This is a chess game I built for fun. It is a challenge in using complex logic to manipulate the DOM. It also uses web sockets to allow for multi-player games!',
    fileName: 'chess_game',
    githubLink: 'https://github.com/austinChappell/chess-game-react',
    label: 'Chess Game',
    siteLink: 'https://chess-game-react.herokuapp.com',
    technologies: ['React', 'Node', 'MongoDB', 'socket.io'],
  },
  {
    description: 'A cookie decorating website I built for my wife. It includes an image gallery, an e-commerce shop, and a custom admin CMS.',
    fileName: 'ellee_bakery',
    githubLink: 'https://github.com/austinChappell/ellee-bakery-node',
    label: 'Ellee Bakery',
    siteLink: 'https://ellee-bakery.herokuapp.com',
    technologies: ['Node', 'EJS', 'MongoDB', 'Stripe'],
  },
  {
    description: 'This is a calculator app I built while in my coding bootcamp.',
    fileName: 'calculator',
    githubLink: 'https://github.com/austinChappell/calculator',
    label: 'Calculator',
    siteLink: 'https://tiy-calculator.netlify.com/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    description: 'This is an iTunes search site I built while in my coding bootcamp. It consumes an API without a front-end framework.',
    fileName: 'itunes_search',
    githubLink: 'https://github.com/austinChappell/week-four-project',
    label: 'Music Search',
    siteLink: 'https://austinchappell.github.io/week-four-project',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

// Component Definition
const PortfolioSection: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.gray05}
      id={ids.portfolio}
    >
      <Container>
        <SectionTitle>
          Portfolio
        </SectionTitle>

        <PortfolioItemList>
          {portfolioItems.map(item => (
            <PortfolioItem
              description={item.description}
              imageAltName={item.label}
              imageFileName={item.fileName}
              githubLink={item.githubLink}
              key={item.label}
              siteLink={item.siteLink}
              technologies={item.technologies}
              title={item.label}
            />
          ))}
        </PortfolioItemList>
      </Container>
    </Section>
  )
}

export default PortfolioSection;
