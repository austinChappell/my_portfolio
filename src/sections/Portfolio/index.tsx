// External Dependencies
import React from 'react';

// Internal Dependencies
import Section from '../../components/Section';
import { ids } from '../../constants';
import PortfolioItem from './PortfolioItem';

// Local Variables
const portfolioItems = [
  {
    fileName: 'chess_game',
    label: 'Chess Game',
  },
  {
    fileName: 'ellee_bakery',
    label: 'Ellee Bakery',
  },
  {
    fileName: 'calculator',
    label: 'Calculator',
  },
  {
    fileName: 'itunes_search',
    label: 'Music Search',
  },
];

// Component Definition
const Portfolio: React.FC = () => {
  return (
    <Section id={ids.portfolio}>
      {portfolioItems.map(item => (
        <PortfolioItem
          imageAltName={item.label}
          imageFileName={item.fileName}
          key={item.label}
        />
      ))}
    </Section>
  )
}

export default Portfolio;
