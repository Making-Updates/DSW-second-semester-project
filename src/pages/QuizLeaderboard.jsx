import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Page = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Quiz Leaderboard</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Quiz leaderboard</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {/* Insert components under here */}
                <ExploreContainer name="Quiz Leaderboard" />
            </IonContent>
        </IonPage>
    );
};

export default Page;
