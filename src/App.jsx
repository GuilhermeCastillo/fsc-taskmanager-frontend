import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./App.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
