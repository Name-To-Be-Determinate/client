import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Virus from './screens/Virus';
import Login from './screens/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='/login' replace />} />

                <Route path="/virus" element={<Virus />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
