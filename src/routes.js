import { Routes, Route } from 'react-router-dom';

import Collections from './pages/Collections';
import Men from './pages/Men';
import Women from './pages/Women';
import About from './pages/About';
import Conect from './pages/Conect';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Collections />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/About" element={<About />} />
            <Route path="/Conect" element={<Conect />} />
        </Routes>
    );
}