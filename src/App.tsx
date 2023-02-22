import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { isLoggedIn } from './actions/users';

import Accounts from './screens/Accounts';
import Infos from './screens/Infos';
import Login from './screens/Login';
import Virus from './screens/Virus';

const App = () => (
    <BrowserRouter>
        <Routes>
            {isLoggedIn() ? (<>
                <Route path="/" element={<Navigate to='/virus' replace />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/infos" element={<Infos />} />
                <Route path="/virus" element={<Virus />} />
            </>) : (<>
                <Route path="/" element={<Navigate to='/login' replace />} />
                <Route path="/login" element={<Login />} />
            </>)}

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
);

export default App;
