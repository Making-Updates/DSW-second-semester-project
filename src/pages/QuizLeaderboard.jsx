import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/leaderboard.css'

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
                <table>
                    <thead>
                        <tr>
                            <th className="title">Player Name</th>
                            <th className="title">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* content will be manipulated with javascript */}
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
                {/* <ExploreContainer name="Quiz Leaderboard" /> */}
            </IonContent>
        </IonPage>
    );
};

export default Page;
