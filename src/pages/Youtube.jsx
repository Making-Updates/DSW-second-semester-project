import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Youtube from '../components/Youtube/Youtube';

const Page = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>YouTube</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Youtube</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {/* Insert components under here */}
                <Youtube />
                {/* <ExploreContainer name="Youtube" /> */}
            </IonContent>
        </IonPage>
    );
};

export default Page;
