import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonItem,
	IonIcon,
	IonLabel,
	IonButton,
} from '@ionic/react';

import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

import InputGroup from 'react-bootstrap/InputGroup';

function About() {
	return (
		<>
			<IonCard>
				<IonCardHeader>
					<IonCardTitle>**App Name**</IonCardTitle>
				</IonCardHeader>
			</IonCard>

			<IonCard>
				<IonCardHeader>
					<IonCardTitle>Team Members</IonCardTitle>
				</IonCardHeader>
				<IonItem>
					<IonLabel>Tiiso Senosha - 220003917</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>Lesego Temane - 219081209</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>Waaiez Kinnear - 219021671</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>Alexis Makgeru - 220042401</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>Bonginkosi Nhantumbo - 217040604</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel>Blessing Leso - 219089394</IonLabel>
				</IonItem>
			</IonCard>

			<IonCard>
				<IonCardHeader>
					<IonCardTitle>Team Member Task</IonCardTitle>
				</IonCardHeader>
				<IonItem>
					<IonLabel>
						Tiiso Senosha <br />
						<ul>
							<li>Quiz Leaderboard</li>
						</ul>
					</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>
						Lesego Temane <br />
					</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>
						Waaiez Kinnear <br />
						<ul>
							<li>Quiz</li>
							<li>Settings</li>
							<li>Database setup</li>
						</ul>
					</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>
						Alexis Makgeru <br />
					</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>
						Bonginkosi Nhantumbo <br />
					</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel>
						Blessing Leso <br />
					</IonLabel>
				</IonItem>
			</IonCard>

			<IonCard>
				<IonCardHeader>
					<IonCardTitle>Tools used</IonCardTitle>
				</IonCardHeader>
				<IonItem>
					<IonLabel>React</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel>React Bootstrap</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>Ionic</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>
						Capacitor
						<ul>
							<li>Capacitor Network</li>
						</ul>
					</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>Supabase</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>Axios</IonLabel>
				</IonItem>
			</IonCard>

			<IonCard>
				<IonCardHeader>
					<IonCardTitle>Application Requirements</IonCardTitle>
				</IonCardHeader>
				<IonItem>
					<input type='checkbox' disabled checked />
					<label className='form-check-label ms-2'>
						Side bar with all the pages
					</label>
				</IonItem>
				<IonItem>
					<input type='checkbox' disabled />
					<label className='form-check-label ms-2'>
						MLH page with latest Hackathons
					</label>
				</IonItem>

				<IonItem>
					<input type='checkbox' disabled />
					<label className='form-check-label ms-2'>
						Twitter page with latest tweets
					</label>
				</IonItem>

				<IonItem>
					<input type='checkbox' disabled />
					<label className='form-check-label ms-2'>
						Youtube page with latest videos
					</label>
				</IonItem>

				<IonItem>
					<input type='checkbox' disabled checked />
					<label className='form-check-label ms-2'>
						Quiz page allowing user to take a quiz
					</label>
				</IonItem>

				<IonItem>
					<input type='checkbox' disabled />
					<label className='form-check-label ms-2'>
						Quiz leaderboard showing top scores
					</label>
				</IonItem>

				<IonItem>
					<input type='checkbox' disabled checked />
					<label className='form-check-label ms-2'>
						Settings page with signout button
					</label>
				</IonItem>

				<IonItem>
					<input type='checkbox' disabled />
					<label className='form-check-label ms-2'>
						Settings page with setting to lock the app with your
						fingerprint
					</label>
				</IonItem>
			</IonCard>
		</>
	);
}

export default About;
