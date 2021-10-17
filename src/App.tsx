import { IonApp, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Menu from './components/Menu';

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
import 'bootstrap/dist/css/bootstrap.min.css';

import { UserContext } from './context/UserContext';
import { useState } from 'react';
import Router from './Router';

const App = () => {
	const [user, setUser] = useState<any | null>('Not Logged In');
	return (
		<UserContext.Provider value={[user, setUser]}>
			<IonApp>
				<IonReactRouter>
					<IonSplitPane contentId='main'>
						<Menu />
						<Router />
					</IonSplitPane>
				</IonReactRouter>
			</IonApp>
		</UserContext.Provider>
	);
};

export default App;
