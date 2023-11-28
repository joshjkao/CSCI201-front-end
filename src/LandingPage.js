import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./Register";

const LandingPage = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default LandingPage;