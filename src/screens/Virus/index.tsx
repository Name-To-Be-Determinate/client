import { FormEvent, MouseEvent } from 'react';

import { useState } from 'react';

import Element from './Element';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

import '../../assets/styles/virus.min.css';

const Home = () => {
    const [showForm, toggleFormStatus] = useState(false);

    const toggleForm = (e: MouseEvent<HTMLButtonElement>) => {
        toggleFormStatus(Boolean(e.currentTarget.classList.contains('close') ? 0 : 1));
        e.currentTarget.blur();
    };

    const addVirus = (e: FormEvent) => {
        e.preventDefault();
    };

    return (<>
        <Header />

        <main id="virus">
            <Navigation />

            <div className="content">
                <h1>Virus</h1>

                <div className="actions">
                    <div className="search">
                        <div className="input">Search...</div>
                    </div>

                    <button className="add-btn" type="button" onClick={toggleForm}>
                        <span>+</span><span>Add virus</span>
                    </button>
                </div>

                <ul>{/* codes */}
                    {Array.from(new Uint8Array(4)).map((_el, key) => 
                        <Element
                            key={key}
                            name={"Test in JS - " + _el + (key+1)}
                            code={`const test = function () {\n  console.log("Hello world !");\n};`}
                            filename="script.js"
                            open={!Boolean(key)}
                        />
                    )}
                </ul>
            </div>

            {/* Form */}
            <div className={`add-virus${showForm?" active":""}`}>
                <form className="box-container" method="post" onSubmit={addVirus}>
                    <button className="close" type="button" onClick={toggleForm}>x</button>

                    <h2>Add virus</h2>

                    <label htmlFor="code" className="input-file">Choose .zip file</label>
                    <input type="file" name="code" id="code" hidden />

                    <p>Add main code :</p>

                    <textarea className="code" defaultValue="import test"></textarea>

                    <div className="submit">
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </main>
    </>);
};

export default Home;
