import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, ErrorBoundary } from 'react';

import NotFound from '../shared/NotFound';
import { ShimmerPostDetails } from "react-shimmer-effects";
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
                        <Suspense fallback={<ShimmerPostDetails variant='SIMPLE' />}>
                            <RestaurantDetailsWrapper />
                        </Suspense>
                    } />
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
    );

    // <ErrorBoundary fallback={<p className='text-2xl text-yellow-500'>⚠️ Something went wrong</p>}>
    //      </ErrorBoundary>
}

export default Router;