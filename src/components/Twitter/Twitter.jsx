import './Twitter.css';

import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
} from '@ionic/react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const Twitter = ({ data, itemNo, author, user, image }) => {
	return (
		<IonCard key={itemNo}>
			<IonCardHeader className='d-flex justify-content-center'>
				<Avatar src={image} alt='img' className='align-middle' />
				<IonCardSubtitle className='text-center d-flex text-wrap flex-column'>
					<div className='ps-3 d-flex'>
						{author}{' '}
						<VerifiedUserIcon className='verificationStatus' />
					</div>
					{user}
				</IonCardSubtitle>
				<br />
				<IonCardSubtitle className='d-flex '></IonCardSubtitle>
			</IonCardHeader>

			<IonCardContent>
				<div
					dangerouslySetInnerHTML={{
						__html: data.description[0],
					}}
					className='text-center'
				/>
			</IonCardContent>
		</IonCard>
	);
};

export default Twitter;
