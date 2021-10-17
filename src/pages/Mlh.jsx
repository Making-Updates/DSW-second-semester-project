import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import MLH from '../components/Mlh/MLH';

const Page = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>MLH</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">MLH</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {/* Insert components under here */}
                {/* <IonCard>
                    <IonItem>
                        <img src="" alt="img"></img>
                    </IonItem>
                    <IonItem>
                        <p>Hackrithmetic</p>
                    </IonItem>
                    <IonItem>
                        <h2>date</h2>
                    </IonItem>
                    <IonItem>
                        <p>location</p>
                    </IonItem>
                    <IonItem>
                        <p>Digital Only</p>
                    </IonItem>
                </IonCard> */}
                {/* <ExploreContainer name="MLH" /> */}
                <MLH />
            </IonContent>
        </IonPage>
    );
};

export default Page;
