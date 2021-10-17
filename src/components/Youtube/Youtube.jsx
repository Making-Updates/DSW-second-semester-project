import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Youtube.css';

const Youtube = () => {
    return (
        <div className='youtubecard'>
            <img className='youtubeCardImg' src='' alt='' />
            <div className="youtubeCardDetails">
                <Avatar 
                    className='videoImg' 
                    alt='channel name'
                    src=''
                />
                <div className="videoText">
                    <h4>Title</h4>
                    <p>Channel • Number of views • Timestamp</p>
                </div> 
            </div>
        </div>
    )
}

export default Youtube
