import { MouseEvent } from 'react';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import receipt from '../assets/images/receipt.svg';
import user1 from '../assets/images/user-o1.svg';
import user2 from '../assets/images/user-o2.svg';
import wallet from '../assets/images/wallet.svg';

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const to = (path: string) => (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate("/" + path);
        e.currentTarget.blur();
    };

    useEffect(() => {
        let selected = document.querySelector(`nav ul li a[href="${location.pathname}"]`);
        selected?.parentElement?.classList.add('active');
    }, [location]);

    return (
        <nav>
            <div className="fix"></div>

            <ul>
                <li><a href="/accounts" onClick={to("accounts")}>
                    <img src={user1} alt="Accounts" />Accounts
                </a></li>
                <li><a href="/virus" onClick={to("virus")}>
                    <img src={wallet} alt="Virus" />Virus
                </a></li>
                <li><a href="/infos" onClick={to("infos")}>
                    <img src={receipt} alt="Infos" />Informations
                </a></li>
            </ul>

            <button className="del-account" type="button">
                <img src={user2} alt="User" /> Delete account
            </button>
        </nav>
    );
};

export default Navigation;
