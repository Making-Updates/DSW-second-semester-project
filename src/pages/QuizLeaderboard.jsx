import { useState, useEffect } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import { supabase } from '../supabase';
import ExploreContainer from '../components/ExploreContainer';
//import '../theme/leaderboard.css'
import Leaderboard from '../components/Leaderboard/Leaderboard';

const Page = () => {

    const [category, setCategory] = useState("php");
    const [difficulty, setDifficulty] = useState("easy");
    const [loading, setLoading] = useState(true);
    const [tableData, setTableData] = useState([]);

    function handleCategoryChange(e){
        setCategory(e.detail.value);
        async function select() {
            const { data, error } = await supabase.from(category+difficulty).select().order('score', { ascending: false });
            console.log(data);
            setTableData(data);
        }
        select();
    }
    function handleDifficultyChange(e){
        setDifficulty(e.detail.value);
        async function select() {
            const { data, error } = await supabase.from(category+difficulty).select().order('score', { ascending: false });
            console.log(data);
            setTableData(data);
        }
        select();
    }
    //
    useEffect(()=>{async function select() {
        const { data, error } = await supabase.from(category+difficulty).select().order('score', { ascending: false });
        console.log(data);
        setTableData(data);
    }
    select();}, [])
    //

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
                {/* <IonSegment onIonChange={handleCategoryChange} value="php">
                    <IonSegmentButton value="php">
                        <IonLabel>php</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="mysql">
                        <IonLabel>mysql</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="html">
                        <IonLabel>html</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
                <IonSegment onIonChange={handleDifficultyChange} value="easy">
                    <IonSegmentButton value="easy">
                        <IonLabel>easy</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="medium">
                        <IonLabel>medium</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="hard">
                        <IonLabel>hard</IonLabel>
                    </IonSegmentButton>
                </IonSegment> */}
                <IonSegment
					onIonChange={handleCategoryChange}
					value='php'
				>
					<IonSegmentButton value='php'>
						<IonLabel>PHP</IonLabel>
					</IonSegmentButton>
					<IonSegmentButton value='mysql'>
						<IonLabel>MySQL</IonLabel>
					</IonSegmentButton>
					<IonSegmentButton value='html'>
						<IonLabel>HTML</IonLabel>
					</IonSegmentButton>
				</IonSegment>
				<IonSegment
					onIonChange={handleDifficultyChange}
					value='easy'
				>
					<IonSegmentButton value='easy'>
						<IonLabel>Easy</IonLabel>
					</IonSegmentButton>
					<IonSegmentButton value='medium'>
						<IonLabel>Medium</IonLabel>
					</IonSegmentButton>
					<IonSegmentButton value='hard'>
						<IonLabel>Hard</IonLabel>
					</IonSegmentButton>
                </IonSegment>
                <Leaderboard 
                data = {tableData}
                />
                {/* <ExploreContainer name="Quiz Leaderboard" /> */}
            </IonContent>
        </IonPage>
    );
};

export default Page;
