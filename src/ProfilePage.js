import React from "react";
import "./ProfilePage.css";

export const ProfilePage = ({user}) => {
  return (
    <div className="profile-page">
        
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="overlap">
            
            <div className="text-wrapper">👍 300</div>
           
               <div className="post-text">this is my first post!</div>
               <img className="post-pic" src = "dog1.png" ></img>
           
          </div>
          <div className="div">
            <div className="text-wrapper-2">👍 182</div>
                
                <div className= "post-text"> ON VACATION</div>
                <img className="post-pic" src = "vacation.png" ></img>
                
          </div>

          <div className="overlap-2">
            <div className="text-wrapper">👍 123123123</div>

                <text className="post-text">im having a great day.</text>
                <img className="post-pic" src = "goodtime.png" ></img>
          </div>
            
         
          <div className="overlap-3">
            <div className="text-wrapper-3">👍 88888</div>
            <text className="post-text">HAHA eating.</text>
            <img className="post-pic" src = "eating.png" ></img>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper">👍 999999</div>
            <text className="post-text">with friends !!</text>
            <img className="post-pic" src = "friends.png" ></img>
           
          </div>
          <div className="information-name-wrapper">
            <div className="information-name">
            Name: DOG  
            <br /> 
            <br />
            BIO: GUYS I HAVE A BEAUTIFUL DOG
            </div>
            
          </div>
          <div className="overlap-5">
            
            <button className="edit">✏️edit</button>
          </div>
          <div className="overlap-6">
            <div className="rectangle-4" />
        </div>
        
          <img src = {user.profile_picture} className="profileimage"></img>
          <div className="overlap-7">
            <div className="follow">followers:1</div>
          </div>
          <div className="overlap-8">
            <div className="follow">following:2</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;