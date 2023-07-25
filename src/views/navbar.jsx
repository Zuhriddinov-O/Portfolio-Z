import React from "react";
import "./navbar.css"
// import zIndex from "@mui/material/styles/zIndex";

const Navbar = () => {
    return (
        <>
            <React.Fragment>
                <div clasName="navbar" style={{
                    fontSize: "larger",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    position: "fixed",
                    zIndex: "3",
                    height: "100px",
                    width:"90%",
                }}>
                    <a clasName="a1" href="/">Home</a>
                    <a clasName="a2" href="/about" style={{ margin: "0px 0px 0px 50px" }}>About</a>
                </div>

            </React.Fragment >
        </>
    );
}

export default Navbar;