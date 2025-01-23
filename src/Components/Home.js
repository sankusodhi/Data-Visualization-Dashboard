import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container text-center my-5">
            <h1 className="display-4">Welcome to MyWebsite!</h1>
            <p className="lead">This is the homepage of your awesome app.</p>
            <p>
                <Link to="/login" className="btn btn-primary">Go to Login</Link>
            </p>
        </div>
    );
};

export default Home;
