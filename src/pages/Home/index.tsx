// External Dependencies
import React from 'react';

// Internal Dependencies
import WelcomeSection from './sections/WelcomeSection';
import PortfolioSection from './sections/PortfolioSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import Nav from '../../components/Nav';
import { ids } from '../../constants';

// Component Definition
const Home: React.FC = () => {
  return (
    <main>
      <WelcomeSection />

      <Nav
        navItems={[
          { 
            label: 'Portfolio',
            scrollToSelector: `#${ids.portfolio}`,
          },
          {
            label: 'Skills',
            scrollToSelector: `#${ids.skills}`,
          },
          {
            label: 'Contact',
            scrollToSelector: `#${ids.contact}`,
          },
        ]}
      />

      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

export default Home;
