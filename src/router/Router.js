import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import NotFound from '../shared/NotFound';
import { ShimmerPostDetails } from "react-shimmer-effects";

const Home = lazy(() => import('../components/home/Home'));
const AboutUs = lazy(() => import('../components/header/AboutUs'));
const ContactUs = lazy(() => import('../components/header/ContactUs'));
const RestaurantDetailsWrapper = lazy(() => import('../components/restaurant/RestaurantDetailsWrapper'));
const Cart = lazy(() => import('../components/cart/Cart'));

function Router() {

    // Routing Rules
    return (
        <Routes>
            <Route path="/home"
                element={<Suspense><Home /></Suspense>} />
            <Route path='/checkout' element={<Suspense><Cart /></Suspense>} />
            <Route path="/about"
                element={<Suspense><AboutUs /></Suspense>} />
            <Route path="/contact"
                element={<Suspense><ContactUs /></Suspense>} />
            <Route path="/restaurants/:id"
                element={
                    <Suspense fallback={<ShimmerPostDetails variant='SIMPLE' />}>
                        <RestaurantDetailsWrapper />
                    </Suspense>
                }
                errorElement={<div className='text-2xl text-red-600 font-semibold'>Error In Loading the Page!!!</div>} />
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );

    // <ErrorBoundary fallback={<p className='text-2xl text-yellow-500'>⚠️ Something went wrong</p>}>
    //      </ErrorBoundary>
}

export default Router;