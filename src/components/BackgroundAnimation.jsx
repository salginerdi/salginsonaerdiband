
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const BackgroundAnimation = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const drops = Array.from({ length: 20 });

    return (
        <div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden h-full">

            <motion.div style={{ y: y2 }} className="absolute inset-0 w-full h-[120%]">
                <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            </motion.div>

            <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-[150%]">
                {drops.map((_, index) => {
                    const randomLeft = Math.floor(Math.random() * 100);
                    const randomDuration = Math.floor(Math.random() * 8) + 8;
                    const randomDelay = Math.floor(Math.random() * 10);
                    const height = Math.floor(Math.random() * 100) + 50;

                    return (
                        <motion.div
                            key={index}
                            className="absolute top-[-150px] w-[2px] bg-gradient-to-b from-transparent to-brand-purple/50 rounded-full"
                            style={{
                                left: `${randomLeft}%`,
                                height: `${height}px`,
                            }}
                            animate={{
                                y: ['0vh', '150vh'],
                                opacity: [0, 0.8, 0]
                            }}
                            transition={{
                                duration: randomDuration,
                                repeat: Infinity,
                                ease: "linear",
                                delay: randomDelay,
                            }}
                        />
                    );
                })}
            </motion.div>
        </div>
    );
};

export default BackgroundAnimation;