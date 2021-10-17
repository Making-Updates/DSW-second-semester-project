import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Twitter from '../components/Twitter/Twitter';

const Page = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Twitter</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Twitter</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {/* Insert components under here */}
                {/* <ExploreContainer name="Twitter" /> */}
                <Twitter />
            </IonContent>
        </IonPage>
    );
};

export default Page;
