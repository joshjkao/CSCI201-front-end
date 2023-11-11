import React, { useState } from "react";
import "./feedpage.css";

function PostCard({content}) {

    const [liked, setLiked] = useState(content.liked);
    const [likes, setLikes] = useState(content.likes);

    const handleLikeClick = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes-1);
        } else {
            setLiked(true);
            setLikes(likes+1);
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <img className="profile-photo" src={content.pfp} />
                <text className="username-text">{content.username}</text>
            </div>
            <div>
            <img className="post-photo" src={content.pic} />
            </div>
            <div className="card-button-tray">
                <button onClick={handleLikeClick} className="card-button">
                    <img src={liked ? "./liked.png" : "./unliked.png"} className="button-icon"/>
                </button>
                <button className="card-button">
                    <img src='./comment.png' className="button-icon"/>
                </button>
                
            </div>
            <div className="card-body">
                {likes} likes
            </div>
            <div className="card-body">
                <text className="username-text">{content.username}</text>
                <text>&nbsp;&nbsp;</text>
                <text>{content.caption}</text>
            </div>
            <div>
                {content.comments.map((comment, index) => (
                    <div className="comment-section">
                        <text className="username-text">{comment.username}&nbsp;&nbsp;</text>
                        <text>{comment.message}</text>
                        <br />
                    </div>
                ))}
            </div>

            
        </div>
    );
}

export default PostCard;