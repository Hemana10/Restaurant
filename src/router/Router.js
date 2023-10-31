import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import NotFound from '../shared/NotFound';
// import RestaurantDetailsWrapper from '../components/restaurant/RestaurantDetailsWrapper';

const Home = lazy(() => import('../components/home/Home'));
const AboutUs = lazy(() => import('../components/header/AboutUs'));
const ContactUs = lazy(() => import('../components/header/ContactUs'));
const RestaurantDetailsWrapper = lazy(() => import('../components/restaurant/RestaurantDetailsWrapper'));

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
            <Route path="/restaurants/:id"
                element={
                <Suspense><RestaurantDetailsWrapper /></Suspense>}/>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default Router;