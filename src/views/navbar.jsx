import React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
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
                    <Link clasName="a1" to="/">Home</Link>
                    <Link clasName="a2" to="/about" style={{ margin: "0px 0px 0px 50px" }}>About</Link>
                </div>

            </React.Fragment >
        </>
    );
}

export default Navbar;