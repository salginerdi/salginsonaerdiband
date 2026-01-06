import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import BackgroundAnimation from './components/BackgroundAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import VideoSection from './components/VideoSection';
import MerchSection from './components/MerchSection';
import TourSection from './components/TourSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';
import NoisePlayer from './components/NoisePlayer';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isInverted, setIsInverted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let keys = [];
        const handleKeyDown = (e) => {
            keys.push(e.key.toLowerCase());
            if (keys.length > 3) keys.shift();

            if (keys.join('') === 'sse') {
                setIsInverted((prev) => !prev);
                keys = [];
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className={`relative min-h-screen font-sans text-brand-purple bg-retro-white selection:bg-brand-purple selection:text-white overflow-hidden ${isInverted ? 'invert hue-rotate-180' : ''}`}>

            <CustomCursor />

            <NoiseOverlay />

            <BackgroundAnimation />

            <AnimatePresence mode="wait">
                {isLoading ? (
                    <LoadingScreen key="loading" />
                ) : (
                    <>
                        <Header />

                        <NoisePlayer />

                        <main className="relative z-10 flex flex-col cursor-none">

                            <div id="hero">
                                <Hero />
                            </div>

                            <div id="about">
                                <AboutSection />
                            </div>

                            <div id="videos">
                                <VideoSection />
                            </div>

                            <div id="merch">
                                <MerchSection />
                            </div>

                            <div id="tour">
                                <TourSection />
                            </div>

                        </main>

                        <div id="contact">
                            <Footer />
                        </div>
                    </>
                )}
            </AnimatePresence>

        </div>
    );
}

export default App;