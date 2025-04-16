import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DestinationManager from './components/DestinationManager';
import Statistics from './components/Statistics';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/destinations" component={DestinationManager} />
        <Route path="/admin/statistics" component={Statistics} />
        <Route path="/" exact>
          <h1>Trang chủ</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
