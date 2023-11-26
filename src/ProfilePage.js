import React from "react";
import "./ProfilePage.css";

function ProfilePage({user}) {
    const data = [
        {
            id: 1234,
            username: "Marco Paolieri",
            pfp: "https://qed.usc.edu/paolieri/marco_paolieri.jpg",
            pic: "https://www.petlandtexas.com/wp-content/uploads/2016/08/Red_Bunny_Petland_Puppy.jpg",
            likes: 213443130,
            liked: false,
            caption: "this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. ",
            comments: [
                {
                    username: "billy",
                    message: "wow, very nice!"
                },
                {
                    username: "bob",
                    message: "your dog is very cute"
                }
            ]
        },
        {
            id: 5678,
            username: "Marco Papa",
            pfp: "https://today.usc.edu/wp-content/uploads/2020/08/Screen-Shot-2020-08-05-at-11.56.25-AM.png",
            pic: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J",
            likes: 10431443,
            liked: true,
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu dui, tristique ac hendrerit nec, posuere eu ipsum. Aenean a diam id mi luctus viverra id non quam. Phasellus auctor pretium libero, et sollicitudin quam. Fusce viverra at diam lobortis ultricies. Nunc non eleifend ligula, a iaculis magna. Morbi convallis elementum faucibus. Class aptent taciti",
            comments: [
                {
                    username: "sue",
                    message: "wow marco, i love your dog"
                },
                {
                    username: "joe",
                    message: "wow you finally posted marco"
                },
                {
                    username: "dan",
                    message: "wow your dog has a great smile, what a happy dog"
                }
            ]
        }
    ]


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