// External Dependencies
import React from 'react';

// Internal Dependencies
import Welcome from './sections/Welcome';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import Nav from './components/Nav';
import { ids } from './constants';

// Component Definition
const App: React.FC = () => {
  return (
    <main>
      <Welcome />

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
            label: 'About',
            scrollToSelector: `#${ids.about}`,
          },
          {
            label: 'Contact',
            scrollToSelector: `#${ids.contact}`,
          },
        ]}
      />

      <Portfolio />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}

export default App;
