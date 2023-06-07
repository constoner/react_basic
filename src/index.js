import React from 'react';
import { createRoot } from 'react-dom/client';

const welcome = (
    <h1 className='title title--main'>Welcome to Sedona!</h1>
);

const header = (
    <header className="page-header">
    <nav className="navigation">
        <a className="navigation-logo" href="./index.html">
          visit.SEDONA
        </a>
        <ul className="navigation-list">
            <li className="navigation-item">
                <a className="navigation-link navigation-current" href="./index.html" aria-current="page">Home</a>
            </li>
            <li className="navigation-item">
                <a className="navigation-link" href="./about.html">About Sedona</a>
            </li>
            <li className="navigation-item">
                <a className="navigation-link" href="./catalog.html">Hotels</a>
            </li>
        </ul>
    </nav>
</header>
);

const rootElement = document.getElementById('root');
rootElement.style.fontFamily = 'sans-serif';

const root = createRoot(rootElement);

root.render(
    <>
        {header}
        <main>
            {welcome}
        </main>
    </>
);
