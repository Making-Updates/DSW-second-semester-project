import Avatar from '@material-ui/core/Avatar';
import './Youtube.css';
import { useState } from 'react';

const Youtube = ({ data, itemNo }) => {
	const [parsedDate, setParsedDate] = useState('');
	console.log(
		data['media:group'][0]['media:community'][0]['media:statistics'][0]['$']
			.views
	);

	return (
		<a
			href={data['media:group'][0]['media:content'][0]['$'].url}
			style={{ textDecoration: 'none' }}
		>
			<div className='youtubecard' key={itemNo}>
				<img
					className='youtubeCardImg'
					src={data['media:group'][0]['media:thumbnail'][0]['$'].url}
					alt=''
				/>
				<div className='youtubeCardDetails'>
					<Avatar
						className='videoImg'
						alt='channel name'
						src='https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s88-c-k-c0x00ffffff-no-rj'
					/>
					<div className='videoText'>
						<h4>{data['media:group'][0]['media:title'][0]}</h4>
						<p>
							{
								data['media:group'][0]['media:community'][0][
									'media:statistics'
								][0]['$'].views
							}{' '}
							views • {data.published[0].substring(0, 10)}
						</p>
					</div>
				</div>
			</div>
		</a>
	);
};

export default Youtube;
