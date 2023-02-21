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

    const addInfos = (e: FormEvent) => {
        e.preventDefault();
    };

    return (<>
        <Header />

        <main id="virus">
            <Navigation />

            <div className="content">
                <h1>Informations</h1>

                <div className="actions">
                    <div className="search">
                        <div className="input">Search...</div>
                    </div>

                    <button className="add-btn" type="button" onClick={toggleForm}>
                        <span>+</span><span>Add infos</span>
                    </button>
                </div>

                <ul>{/* codes */}
                    {Array.from(new Uint8Array(4)).map((_el, key) => 
                        <Element
                            key={key}
                            slug={"Some infos - " + _el + (key+1)}
                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio consectetur quaerat, maxime et nulla, incidunt delectus veniam consequatur voluptatem alias possimus temporibus eos nemo repellat omnis beatae explicabo, accusamus eum cum ut. Delectus rerum obcaecati necessitatibus libero quis reprehenderit! Autem aperiam aliquam fugiat facere libero a excepturi tempora ab consequatur omnis provident eaque, delectus cumque consectetur ducimus consequuntur, quas fugit aspernatur nisi quos quisquam. Quae, esse est. Dolore veritatis nemo, amet deserunt eos ullam commodi, totam ad eius, reprehenderit a. Quod velit odio iste aspernatur consequuntur deleniti quos recusandae non amet fuga ab exercitationem labore asperiores at, reprehenderit quisquam consequatur eius officiis soluta blanditiis voluptatibus dolor cupiditate. Perferendis nostrum suscipit libero culpa atque earum molestiae. Veniam consequatur iure possimus sint omnis voluptatem, facere pariatur veritatis amet corrupti?"
                        />
                    )}
                </ul>
            </div>

            {/* Form */}
            <div className={`add-virus${showForm?" active":""}`}>
                <form className="box-container" method="post" onSubmit={addInfos}>
                    <button className="close" type="button" onClick={toggleForm}>x</button>

                    <h2>Add infos</h2>

                    <textarea className="code" placeholder="Some text..."></textarea>

                    <div className="submit">
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </main>
    </>);
};

export default Home;
