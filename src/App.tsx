import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Accounts from './screens/Accounts';
import Infos from './screens/Infos';
import Login from './screens/Login';
import Virus from './screens/Virus';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='/login' replace />} />

                <Route path="/accounts" element={<Accounts />} />
                <Route path="/infos" element={<Infos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/virus" element={<Virus />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
