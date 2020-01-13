// External Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Internal Dependencies
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactSuccess from './pages/ContactSuccess';

// Component Definition
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={Home}
          exact
          path="/"
        />
        <Route
          component={ContactSuccess}
          exact
          path="/contact"
        />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
