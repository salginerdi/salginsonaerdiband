
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const LoadingScreen = () => {
    return (
        <motion.div
            exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] bg-brand-purple flex flex-col items-center justify-center text-retro-white"
        >

            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="mb-8 relative"
            >
                <div className="absolute inset-0 bg-retro-white/20 blur-xl rounded-full scale-110 z-0"></div>

                <img
                    src={logo}
                    alt="Loading Logo"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
            >
            </motion.div>

            <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "150px", opacity: 1 }}
                transition={{ duration: 4, delay: 0.2, ease: "easeInOut" }}
                className="h-0.5 bg-retro-white/50 mt-10 rounded-full"
            />

        </motion.div>
    );
};

export default LoadingScreen;