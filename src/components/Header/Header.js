import React from 'react';
import { Link } from 'react-router-dom';
import CostomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my website</h1>
            <nav>
                <Link to={"/"}>Home</Link>{" "}
                <Link to={"/about"}>About</Link>{" "}
                <Link to={"/friends"}>Friends</Link> {" "}
                <Link to={"/posts"}>Posts</Link> {" "}
                <Link to={"/countries"}>Countries</Link> {" "}
                <Link to={"/meals"}>Meals</Link>

                {/* <CostomLink to={"/"}>Home</CostomLink>{" "}
                <CostomLink to={"/about"}>About</CostomLink>{" "}
                <CostomLink to={"/friends"}>Friends</CostomLink>{" "} */}

                {/* <Link to={"/"}>Home</Link>{" "}
                <Link to={"/about"}>About</Link>{" "}
                <Link to={"/friends"}>Friends</Link> */}
            </nav>
        </div>
    );
};

export default Header;