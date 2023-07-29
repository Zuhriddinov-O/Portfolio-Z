import React from "react";
import "./about.css"
import myphoto from "../images/myphoto.jpg"
import telegram from "../images/telegram.png"
import instagram from "../images/instagram.png"
import youtube from "../images/youtube.png"
import facebook from "../images/facebook.png"
import github from "../images/github.png"
import twitter from "../images/twitter.png"
import Uniconimg from "../images/Uniconimg.jpg"
import UniverMilan from "../images/UniverMilan.jpg"
import Milanglavnoeimg from "../images/Milanglavnoeimg.jpg"
import { Link } from "react-router-dom";



const About = () => {
  return (
    <>
      <React.Fragment>
        <div className="container2">
          <div className="name2">
            <h2 className="name2__h2-1">Oybek</h2>
            <h2 className="name2__h2-2">Zuhriddinov</h2>
          </div>
          <div className="p">
            <p>Available experiences:</p>
          </div><br />
          <div className="btn">
            <button className="html">Html,Css</button>
            <button className="script">Java Script</button>
            <button className="react">React Java Script</button>
          </div>
          <img className="myphoto" src={myphoto} alt="" />

          <div className="link">
            <h4>@Leader_02_02</h4>
            <h4>NewProgrammer2023@gmail.com</h4>
            <h4>Conatct Number: +998(90) 211-48-96</h4>
          </div>

          <div className="icons"><img src={telegram} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={facebook} alt="" />
            <img src={github} alt="" />
            <img src={twitter} alt="" />
          </div>
          <div className="footer">
            <footer>About</footer>
          </div>
          <div className="desc">My fullname is Zuhriddinov Oybek, i have been learning Information technology for about 6 months. I live in Andijan City. Several years ago, my father offerd me to join courses in order to make websites. Initially, i had no interest on learning  but then i considered that programmers life is fairy interesting hence, i am trying to be one of them.</div>
          <p className="p2">Here is some of my Projects i have done when i was learning</p>

          <div className="projects">
            <Link className="uniconimg__href" to="https://unicon-latest2.vercel.app">
              <img className="uniconimg" src={Uniconimg} alt="" /><p className="uniconP">Unicon</p>
            </Link>

            <Link className="univerMilan__href" to="https://milan-glavnoe-page-2658.vercel.app">
              <img className="univerMilan" src={UniverMilan} alt="" /><p className="univerMilanP">UniverMilan</p>
            </Link>

            <Link className="milanglavnoeimg__href" to="https://milan-glavnoe.vercel.app">
              <img className="milanglavnoeimg" src={Milanglavnoeimg} alt="" /><p className="milanglavnoeimgP">Milan-Glavnoe</p>
            </Link>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}
export default About;
