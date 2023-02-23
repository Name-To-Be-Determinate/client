import { FormEvent, MouseEvent } from 'react';

import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { get, set } from '../../actions/posts';
import { INFOS } from '../../constants';

import Element from './Element';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

import '../../assets/styles/virus.min.css';

const Home = () => {
    const [formData, setFormData] = useState({ content: "", name: "", slug: "" });
    const [showForm, toggleFormStatus] = useState(false);

    const data = useRef<{ slug: string, content: string, name?: string }[]>(JSON.parse(localStorage.getItem(INFOS)||'[]'));

    const dispatch = useDispatch();

    const toggleForm = (e: MouseEvent<HTMLButtonElement>) => {
        toggleFormStatus(!e.currentTarget.classList.contains('close'));
        e.currentTarget.blur();
    };

    const addInfos = (e: FormEvent) => {
        e.preventDefault(); // @ts-ignore
        dispatch(set(INFOS, formData));
        toggleFormStatus(false);
        loadData();
    };

    const loadData = () => { // @ts-ignore
        dispatch(get(INFOS));
        data.current = JSON.parse(localStorage.getItem(INFOS)||'[]');
        setTimeout(() => window.location.reload(), 200);
    };

    useEffect(() => {
        if (localStorage.getItem(INFOS) === null) loadData();
    })

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
                    {data.current.map((values, key) => <Element key={key} {...values} />)}
                </ul>
            </div>

            {/* Form */}
            <div className={`add-virus${showForm?" active":""}`}>
                <form className="box-container" method="post" onSubmit={addInfos}>
                    <button className="close" type="button" onClick={toggleForm}>x</button>

                    <h2>Add infos</h2>

                    <textarea
                        className="Content"
                        placeholder="Some text..."
                        defaultValue={formData.content}
                        onChange={e => setFormData({ ...formData, content: e.target.value })}
                    ></textarea>

                    <div className="submit">
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </main>
    </>);
};

export default Home;
