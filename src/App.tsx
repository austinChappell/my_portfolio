// External Dependencies
import React from 'react';

// Internal Dependencies
import Welcome from './sections/Welcome';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import Nav from './components/Nav';

// Component Definition
const App: React.FC = () => {
  return (
    <main>
      <Welcome />

      <Nav
        navItems={[
          { label: 'Portfolio' },
          { label: 'Skills' },
          { label: 'About' },
          { label: 'Contact' },
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
