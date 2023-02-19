import { MouseEvent } from 'react';

import logoutImg from '../assets/images/logout.svg';

const Header = () => {
    const logout = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Logging out");
        e.currentTarget.blur();
    };

    return (
        <header>
            <div className="user"></div>

            <button type="button" className="logout" onClick={logout}>
                Logout <img src={logoutImg} alt="Logout" />
            </button>
        </header>
    );
};

export default Header;
