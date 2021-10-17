import React from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import './Twitter.css';

const Twitter = ({ data, itemNo, author, user, image }) => {
	return (
		<div className='tweet m-3' key={itemNo}>
			<div className='tweetAvatar'>
				<Avatar src={image} alt='img' />
			</div>
			<div className='tweetContent'>
				<div className='tweetHeader'>
					<div className='tweetHeaderText'>
						<h3>
							{/*  */}
							{author}
							<span className='tweetHeaderSpecial'>
								<VerifiedUserIcon className='verificationStatus' />
								{/* since not everyone is verified the commented code below handles that condition &&
                            now it's default status is verified  */}
								{/*verified &&<VerifiedUserIcon className="post__badge" />*/}
								{user}
							</span>
						</h3>
					</div>
					<div className='tweetHeaderDescription'>
						{/* Actual Tweet */}
						<div
							dangerouslySetInnerHTML={{
								__html: data.description[0],
							}}
						/>
					</div>
				</div>
				{/* if a tweet has an image */}
				<img src='' alt='' />
			</div>
		</div>
	);
};

export default Twitter;
