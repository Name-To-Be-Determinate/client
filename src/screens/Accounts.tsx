import { useState } from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

import '../assets/styles/admin.css';

const Accounts = () => {
    const [formType, setFormType] = useState(false);

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

                <form method="post">
                    <h2>{formType ? "Remove" : "Create"} user</h2>

                    <div className="input-box">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>

                    {!formType && (<>
                        <div className="input-box">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>

                        <div className="input-checkbox">
                            <input type="checkbox" name="admin" id="admin" />
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
