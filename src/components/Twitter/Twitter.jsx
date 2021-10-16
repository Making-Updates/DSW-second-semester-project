import React from 'react'
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import './Twitter.css'

const Twitter = () => {
    return (
        <div className="tweet" >
            <div className="tweetAvatar">
                <Avatar src="" alt="img" />
            </div>
            <div className="tweetContent">
                <div className="tweetHeader">
                    <div className="tweetHeaderText">
                        <h3>
                            {/*  */}
                            display name
                            <span className="tweetHeaderSpecial">
                            <VerifiedUserIcon className="verificationStatus" />
                            {/* since not everyone is verified the commented code below handles that condition &&
                            now it's default status is verified  */}
                            {/*verified &&<VerifiedUserIcon className="post__badge" />*/} 
                            @username
                            </span>
                        </h3>
                    </div>
                    <div className="tweetHeaderDescription">
                        {/* Actual Tweet */}
                        <p>I like getting covid tests and getting that little hit of dopamine when I get the email that says “Covid-19: not detected”</p>
                    </div>
                </div>
                {/* if a tweet has an image */}
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Twitter
