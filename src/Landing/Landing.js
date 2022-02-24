import React from 'react'
import bg from "../assets/Gotbg5.png";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="hero" id='hero'>
           <div
      style={{
        backgroundImage: `url(${bg})`,
        height: "150vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        position: "relative",
      }}
      id="Home"
    >
<div className="content">
    <div className="row">
        <div className="col-12 col-md-6 my-auto"><h2 className="Landing-title">Game Of Thrones</h2></div>
        <div className="col-12 col-md-6 ">
            <div class="passage">
            <p>This is a fan page made for the fans of Game Of Thrones to find Characters, 
                Books and Houses that is telcated in the show, Game Of Thrones. Find your favorite Characters
                Books and Houses in this website.
            </p>
            </div>
        </div>
    </div>
</div>    
           </div>
    </div>
  )
}

export default Landing