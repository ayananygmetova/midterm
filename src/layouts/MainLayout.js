import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import "./MainLayout.css"

const MainLayout = ({children}) => {

    return (
        <div className="main">
            <Navbar expand="lg" style={{background: "orange", width: "100%"}}>
                <Nav className="me-auto">
                    <Nav.Link href="/" style={{fontSize: "20px", color: "#fff"}}>Home</Nav.Link>
                    <Nav.Link href="/posts/add"  style={{fontSize: "20px", color: "#fff"}}>Post creation</Nav.Link>
                </Nav>
            </Navbar>
            <section className="content">{children}</section>
        </div>
    )
}

export {MainLayout}