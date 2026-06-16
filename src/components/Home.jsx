import React, { lazy, Suspense } from 'react';
import Hero from './Hero';
import SelectedWork from './SelectedWork';

// Below-fold sections — lazy load so they don't block initial render
const Capabilities = lazy(() => import('./Capabilities'));
const WorkList = lazy(() => import('./WorkList'));
const InsightsSection = lazy(() => import('./InsightsSection'));

const Home = ({ videoElement, setProgress }) => {
    return (
        <main>
            <Hero videoElement={videoElement} setProgress={setProgress} />
            <SelectedWork />
            <Suspense fallback={null}>
                <Capabilities />
            </Suspense>
            <Suspense fallback={null}>
                <WorkList />
            </Suspense>
            <Suspense fallback={null}>
                <InsightsSection />
            </Suspense>
        </main>
    );
};

export default Home;
