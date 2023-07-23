import React from "react";
import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <React.Fragment>
                <div clasName="navbar" style={{
                    width: "200px",
                    height: "70px",
                    margin: "0px 0px 0px 1000px",
                    fontSize: "larger",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "fixed"
                }}>
                    <a clasName="a1" href="/">Home</a>
                    <a clasName="a2" href="/about" style={{ margin: "0px 0px 0px 50px" }}>About</a>
                </div>

            </React.Fragment >
        </>
    );
}

export default Navbar;