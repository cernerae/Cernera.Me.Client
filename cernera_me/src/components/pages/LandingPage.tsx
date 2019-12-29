import React from 'react';
import '../../styles/App.scss';

const LandingPage: React.FC = () => {
    return (
        <div className="LandingPage">
            <header className="App-header">
                <p>LandingPage</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default LandingPage;
