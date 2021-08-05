import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { logoTwitter, logoYoutube, bugOutline, timerOutline, clipboardOutline, settingsOutline } from 'ionicons/icons';
import './Menu.css';

const appPages = [
  {
    title: 'FreeCodeCamp Twitter',
    url: '/page/Twitter',
    iosIcon: logoTwitter,
    mdIcon: logoTwitter
  },
  {
    title: 'FreeCodeCamp YouTube',
    url: '/page/Youtube',
    iosIcon: logoYoutube,
    mdIcon: logoYoutube
  },
  {
    title: 'MLH Hackathons',
    url: '/page/Mlh',
    iosIcon: bugOutline,
    mdIcon: bugOutline
  },
  {
    title: 'Quiz',
    url: '/page/Quiz',
    iosIcon: timerOutline,
    mdIcon: timerOutline
  },
  {
    title: 'Quiz Leaderboard',
    url: '/page/QuizLeaderboard',
    iosIcon: clipboardOutline,
    mdIcon: clipboardOutline
  },
  {
    title: 'Settings',
    url: '/page/Settings',
    iosIcon: settingsOutline,
    mdIcon: settingsOutline
  }
];

const Menu = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="page-list">
          <IonListHeader>DSW Semester 2 Project</IonListHeader>
          {/* TODO: add logged in user email address */}
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
