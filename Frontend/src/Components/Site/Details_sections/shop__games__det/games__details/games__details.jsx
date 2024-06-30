import React from "react";
import pegi from "../../../../../assets/img/pegi.png";
import violence from "../../../../../assets/img/violence.png";
import gambling from "../../../../../assets/img/gambling.png";
import language from "../../../../../assets/img/language.png";
import pay from "../../../../../assets/img/card.png";
import { Link } from "react-router-dom";
import facebook from "../../../../../assets/img/facebook.svg";
import twitter from "../../../../../assets/img/twitter.svg";
import instagram from "../../../../../assets/img/instagram.svg";
import youtube from "../../../../../assets/img/youtube.svg";
import twitch from "../../../../../assets/img/twitch.svg";
const Games__details = () => {
  return (
    <div className="games__details__sec">
      <div className="custom-container">
        <div className="row">
          <div className="col-6">
            <div className="games__details__sec__about">
              <h2>Game Details</h2>
              <strong>
                An Epic Tale of honor and loyalty America, 1899. The end of the
                Wild West era has begun. After a robbery goes badly wrong in the
                western town of Blackwater, Arthur Morgan and the Van der Linde
                gang are forced to flee. With federal agents and the best bounty
                hunters in the nation massing on their heels, the gang must rob,
                steal and fight their way across the rugged heartland of America
                in order to survive. As deepening internal divisions threaten to
                tear the gang apart, Arthur must make a choice between his own
                ideals and loyalty to the gang who raised him.
              </strong>
            </div>
          </div>
          <div className="col-6" style={{paddingLeft:"50px"}}>
            <div className="games__details__sec__decribe" >
              <div className="decribe__img">
                <img src={pegi} className="pegi" alt="" />
                <div className="decribe__img__info">
                <img src={violence} alt="" />
                <img src={gambling} alt="" />
                <img src={language} alt="" />
                <img src={pay} alt="" />
                </div>
              </div>
              <div className="decribe__developer">
                <span>Developer</span>
                <p style={{paddingLeft:"85px"}}>Rockstar Games</p>
              </div>
              <div className="decribe__developer">
                <span>Publisher</span>
                <p style={{paddingLeft:"90px"}}>Rockstar Games</p>
              </div>
              <div className="decribe__links">
                <span>Links</span>
                <div className="decribe__links__link">

                <Link to=""> <img src={facebook} alt="" /> <p>Facebook</p></Link>
                <Link to=""> <img src={twitter} alt="" /> <p>Twitter</p></Link>
                <Link to=""> <img src={instagram} alt="" /> <p>Instagram</p></Link>
                <Link to=""> <img src={youtube} alt="" /> <p>Youtube</p></Link>
                <Link to=""> <img src={twitch} alt="" /> <p>Twitch</p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games__details;
