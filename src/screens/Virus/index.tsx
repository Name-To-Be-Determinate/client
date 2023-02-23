import { ChangeEvent, FormEvent, MouseEvent } from 'react';

import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { get, set } from '../../actions/posts';
import { VIRUS } from '../../constants';

import Element from './Element';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

import '../../assets/styles/virus.min.css';

const Home = () => {
    const [formData, setFormData] = useState({ content: "", filename: "", name: "" });
    const [showForm, toggleFormStatus] = useState(false);

    const data = useRef<Record<string, any>[]>(JSON.parse(localStorage.getItem(VIRUS)||'[]'));

    const dispatch = useDispatch();

    const toggleForm = (e: MouseEvent<HTMLButtonElement>) => {
        toggleFormStatus(!e.currentTarget.classList.contains('close'));
        e.currentTarget.blur();
    };

    const addVirus = (e: FormEvent) => {
        e.preventDefault(); // @ts-ignore
        dispatch(set(VIRUS, formData));
        toggleFormStatus(false); // @ts-ignore
        loadData();
    };

    const inputChanged = async (e: ChangeEvent<HTMLInputElement>) => {
        let file = e.target.files?.[0];
        if (file) setFormData({
            ...formData,
            content: await file.text(),
            filename: file.name,
            name: file.name,
        });
    };

    const loadData = () => { // @ts-ignore
        dispatch(get(VIRUS));
        data.current = JSON.parse(localStorage.getItem(VIRUS)||'[]') as Record<string, any>[];
        setTimeout(() => window.location.reload(), 200);
    }

    useEffect(() => {
        if (localStorage.getItem(VIRUS) === null) loadData();
    });

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
                    {data.current.map((values, key) => <Element key={key} name={values.name} code={values.content} />)}
                </ul>
            </div>

            {/* Form */}
            <div className={`add-virus${showForm?" active":""}`}>
                <form className="box-container" method="post" onSubmit={addVirus}>
                    <button className="close" type="button" onClick={toggleForm}>x</button>

                    <h2>Add virus</h2>

                    <label htmlFor="code" className="input-file">Choose a file</label>
                    <input type="file" name="code" id="code" onChange={inputChanged} hidden />

                    <p>Add main code :</p>

                    <textarea className="code" defaultValue={formData.content}></textarea>

                    <div className="submit">
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </main>
    </>);
};

export default Home;
