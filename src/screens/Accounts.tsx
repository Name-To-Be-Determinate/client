import { ChangeEvent, FormEvent } from 'react';
import { UserData } from '../types/ReducersTypes';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteUser, newUser } from '../actions/users';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

import '../assets/styles/admin.min.css';

const Accounts = () => {
    const [formType, setFormType] = useState(false);
    const [formData, setFormData] = useState<UserData>({ username: "" });

    const dispatch = useDispatch();

    const setData = (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e: FormEvent) => {
        e.preventDefault(); // @ts-ignore
        dispatch((formType ? deleteUser : newUser)(formData));
        document.querySelector('form')?.reset();
    };

    return (<>
        <Header />

        <main id="admin">
            <Navigation />

            <div className="content">
                <h1>Manage users</h1>

                <div className="buttons">
                    <button type="button" onClick={() => setFormType(false)}>
                        <span>+</span><span>Create user</span>
                    </button>

                    <button type="button" onClick={() => setFormType(true)}>
                        <span>-</span><span>Remove user</span>
                    </button>
                </div>

                <form method="post" onSubmit={onSubmit}>
                    <h2>{formType ? "Remove" : "Create"} user</h2>

                    <div className="input-box">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" onChange={setData} />
                    </div>

                    {!formType && (<>
                        <div className="input-box">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={setData} />
                        </div>

                        <div className="input-checkbox">
                            <input type="checkbox" name="admin" id="admin" onChange={
                                e => setFormData({ ...formData, admin: e.target.value === 'on' })
                            } />
                            <label htmlFor="admin">Admin permissions</label>
                        </div>
                    </>)}

                    <button type="submit">{formType ? "Remove" : "Create new"} profile</button>
                </form>
            </div>
        </main>
    </>);
};

export default Accounts;
