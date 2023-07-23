import React from "react";
import "./home.css"
import img from "../images/dev.jpg"
import P from "../images/p.jpg"

const Home = () => {

    return (
        <>
            <React.Fragment>

                <div className="p">
                    <img src={P} alt="" />
                </div><div className="name">
                    <p>
                        <h2>My</h2>
                        <h3>Portfolio</h3>
                        
                    </p>
                </div>
                <div className="container">
                    <div role="button" className="btn">
                        <button>Follow</button>
                    </div>
                    <div className="ism">Oybek Zuhriddinov</div>
                    <div className="black">Oybek Zuhriddinov</div>
                    <div className="black2">
                        <p>Digital City,</p>
                    </div>
                    <div className="black3"> Andijan</div>
                    <div className="image">
                        <img src={img} alt="" />
                    </div>
                    <div className="allbtn">
                        <button className="langbtn">Languages:</button>
                        <button className="lang2btn">English,Uzbek</button>
                        <button className="status2btn">Basic</button>
                        <button className="statusbtn">Status:</button>
                        <button className="budgetbtn">Budget:</button>
                        <button className="budget2btn">No Budget</button></div>
                    <footer>I am a Front-End Developer and Designer since 2022-year Based in Digital City, Andijan</footer>
                    
                </div>
            </React.Fragment>
        </>
    );
}

export default Home;