import React from 'react';
import Hero from './Hero';
import SelectedWork from './SelectedWork';
import Capabilities from './Capabilities';
import WorkList from './WorkList';
import InsightsSection from './InsightsSection';

const Home = ({ videoElement, setProgress }) => {
    return (
        <main>
            <Hero videoElement={videoElement} setProgress={setProgress} />
            <SelectedWork />
            <Capabilities />
            <WorkList />
            <InsightsSection />
        </main>
    );
};

export default Home;
