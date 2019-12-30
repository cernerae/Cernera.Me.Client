import React from 'react';
import style from '../../../styles/App.module.scss';

const EdwardLandingPage: React.FC = () => {
    return (
        <div id="EdwardLandingPage">
            <header className={style["App-header"]}>
                <p>EdwardLandingPage</p>
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

export default EdwardLandingPage;
