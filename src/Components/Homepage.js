import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => <div className={["ui container"]}>
        <h1>This is my HOMEPAGE </h1>
        <Link to="/login"> Login </Link>
    </div>

export default Homepage;