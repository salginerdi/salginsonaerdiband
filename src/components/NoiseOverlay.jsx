const NoiseOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.05] mix-blend-overlay overflow-hidden">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-[noise_0.5s_steps(5)_infinite]"></div>

            <style>{`
        @keyframes noise {
          0% { transform: translate(0, 0); }
          20% { transform: translate(-10px, 10px); }
          40% { transform: translate(10px, -10px); }
          60% { transform: translate(-5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
        </div>
    );
};

export default NoiseOverlay;