import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Youtube.css';

const Youtube = () => {
    return (
        <div className='youtubecard'>
            <img className='youtubeCardImg' src={'./youtubeimg.jpg'} alt='' />
            <div className="youtubeCardDetails">
                <Avatar 
                    className='videoImg' 
                    alt='channel name'
                    src={'./youtubeimg.jpg'}
                />
                <div className="videoText">
                    <h4>Title</h4>
                    <p>Channel</p>
                    <p>Number of views • Timestamp</p>
                </div> 
            </div>
        </div>
    )
}

export default Youtube
