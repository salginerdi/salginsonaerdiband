// src/components/NoisePlayer.jsx
import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const NoisePlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioContextRef = useRef(null);
    const gainNodeRef = useRef(null);
    const sourceNodeRef = useRef(null);

    const startNoise = () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioContextRef.current) {
            audioContextRef.current = new AudioContext();
        }
        const ctx = audioContextRef.current;

        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.2;
        }

        const noiseSource = ctx.createBufferSource();
        noiseSource.buffer = buffer;
        noiseSource.loop = true;

        const gainNode = ctx.createGain();

        gainNode.gain.value = 0.08;

        noiseSource.connect(gainNode);
        gainNode.connect(ctx.destination);

        noiseSource.start();

        sourceNodeRef.current = noiseSource;
        gainNodeRef.current = gainNode;
    };

    const stopNoise = () => {
        if (sourceNodeRef.current) {
            sourceNodeRef.current.stop();
            sourceNodeRef.current = null;
        }
    };

    const togglePlay = () => {
        if (isPlaying) {
            stopNoise();
        } else {
            if (audioContextRef.current?.state === 'suspended') {
                audioContextRef.current.resume();
            }
            startNoise();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        return () => stopNoise();
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-[80]">
            <button
                onClick={togglePlay}
                className="flex items-center gap-2 bg-brand-purple text-retro-white px-4 py-2 font-retro font-bold text-xs border-2 border-retro-white hover:bg-white hover:text-brand-purple transition-colors uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-y-[4px]"
            >
                {isPlaying ? (
                    <>
                        <Volume2 size={16} className="animate-pulse" /> SESSİZLİK
                    </>
                ) : (
                    <>
                        <VolumeX size={16} /> GÜRÜLTÜ YAP
                    </>
                )}
            </button>
        </div>
    );
};

export default NoisePlayer;