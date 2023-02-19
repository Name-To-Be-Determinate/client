import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import Login from './screens/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='/login' replace />} />

                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
