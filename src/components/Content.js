import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { CSSTransitionGroup } from 'react-transition-group'
import { Route, Switch, useLocation } from 'react-router';

import './SlideTransition.css'
import { Container } from 'react-bootstrap';

function Content() {

  const location = useLocation();

  function LayoutWrapper({ children }) {
    return (
      <div className="d-flex flex-column justify-content-center h-100 position-absolute w-100">
        <div className="d-flex flex-row justify-content-center position-relative">
          {children}
        </div>
      </div>
    )
  }

  return (
    <CSSTransitionGroup
      transitionName="slide"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      component="div">
      <Switch key={location.key} location={location}>
        <Route path='/' exact>
          <LayoutWrapper>
            <About />
          </LayoutWrapper>
        </Route>
        <Route path='/work'>
          <LayoutWrapper>
            <Work />
          </LayoutWrapper>
        </Route>
        <Route path='/contact'>
          <LayoutWrapper>
            <Contact />
          </LayoutWrapper>
        </Route>
      </Switch>
    </CSSTransitionGroup>

  );
}

export default Content;
