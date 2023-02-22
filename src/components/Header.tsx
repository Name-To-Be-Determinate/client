import { useDispatch } from 'react-redux';
import { logout as logoutFunction } from '../actions/users';

import logoutImg from '../assets/images/logout.svg';

const Header = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const logout = () => (dispatch(logoutFunction()));

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
