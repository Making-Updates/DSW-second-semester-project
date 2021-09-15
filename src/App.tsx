import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

import Mlh from './pages/Mlh';
import Quiz from './pages/Quiz';
import QuizLeaderboard from './pages/QuizLeaderboard';
import Settings from './pages/Settings';
import Twitter from './pages/Twitter';
import Youtube from './pages/Youtube';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Forgot from './pages/ForgotPassword';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Bootstrap CSS */
import './bootstrap/css/bootstrap.css';

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Mlh" />
            </Route>
            <Route path="/page/Mlh" exact={true}>
              <Mlh />
            </Route>
            <Route path="/page/Quiz" exact={true}>
              <Quiz />
            </Route>
            <Route path="/page/QuizLeaderboard" exact={true}>
              <QuizLeaderboard />
            </Route>
            <Route path="/page/Settings" exact={true}>
              <Settings />
            </Route>
            <Route path="/page/Twitter" exact={true}>
              <Twitter />
            </Route>
            <Route path="/page/Youtube" exact={true}>
              <Youtube />
            </Route>
            <Route path="/page/Login" exact={true}>
              <Login />
            </Route>
            <Route path="/page/Register" exact={true}>
              <Register />
            </Route>
            <Route path="/page/Forgot" exact={true}>
              <Forgot />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
