// External Dependencies
import React from 'react';

// Internal Dependencies
import Section from '../../components/Section';
import { ids } from '../../constants';
import PortfolioItem from './PortfolioItem';
import Container from '../../components/Container';

// Local Variables
const portfolioItems = [
  {
    description: 'This is a chess game I built for fun. It is a challenge in using complex logic to manipulate the DOM. It also uses web sockets to allow for multi-player games!',
    fileName: 'chess_game',
    label: 'Chess Game',
    technologies: ['React', 'Node', 'MongoDB', 'socket.io'],
  },
  {
    description: 'A cookie decorating website I built for my wife. It includes an image gallery, an e-commerce shop, and a custom admin CMS.',
    fileName: 'ellee_bakery',
    label: 'Ellee Bakery',
    technologies: ['Node', 'EJS', 'MongoDB', 'Stripe'],
  },
  {
    description: 'This is a calculator app I built while in my coding bootcamp.',
    fileName: 'calculator',
    label: 'Calculator',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    description: 'This is an iTunes search site I built while in my coding bootcamp. It consumes an API without a front-end framework.',
    fileName: 'itunes_search',
    label: 'Music Search',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

// Component Definition
const Portfolio: React.FC = () => {
  return (
    <Section id={ids.portfolio}>
      <Container>
        {portfolioItems.map(item => (
          <PortfolioItem
            description={item.description}
            imageAltName={item.label}
            imageFileName={item.fileName}
            key={item.label}
            technologies={item.technologies}
            title={item.label}
          />
        ))}
      </Container>
    </Section>
  )
}

export default Portfolio;
