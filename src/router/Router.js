import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import NotFound from '../components/miscellaneous/NotFound';

const Home = lazy(() => import('../components/home/Home'));
const AboutUs = lazy(() => import('../components/header/AboutUs'));
const ContactUs = lazy(() => import('../components/header/ContactUs'));


function Router() {
    // Routing Rules
    return (
        <Routes>
            <Route path="/home"
                element={<Suspense><Home /></Suspense>} />
            <Route path="/about"
                element={<Suspense><AboutUs /></Suspense>} />
            <Route path="/contact"
                element={<Suspense><ContactUs /></Suspense>} />
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default Router;