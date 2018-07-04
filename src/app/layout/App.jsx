import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react';

//COMPONENTS
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventForm from '../../features/event/EventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PiopleDashboard/PeopleDashboard';
import UserDetailed from '../../features/user/UserDetailedPage/UserDetailedPage';
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>

        <Route path='/(.+)' component={() => (
          <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route exact path='/events' component={EventDashboard} />
                <Route exact path='/event/:id' component={EventDetailedPage} />
                <Route path='/people' component={PeopleDashboard} />
                <Route exact path='/profile/:id' component={UserDetailed} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route exact path='/createEvent' component={EventForm} />
              </Switch>
            </Container>
          </div>
        )} />
      </div>
    );
  }
}

export default App;