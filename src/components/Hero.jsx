
import { motion, useScroll, useTransform } from 'framer-motion';
import { Music, Youtube, Disc, Share2 } from 'lucide-react';
import logo from '../assets/logo.png';

const GlitchLogo3D = () => {
    const logoSizeClasses = "w-64 h-64 md:w-[30rem] md:h-[30rem]";
    return (
        <div className="relative perspective-[1500px] group z-20">
            <motion.div className={`relative ${logoSizeClasses} preserve-3d`} animate={{ rotateY: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <motion.img src={logo} alt="" className="absolute inset-0 w-full h-full object-contain opacity-60 rounded-full blur-[1px] pointer-events-none" style={{ filter: 'drop-shadow(8px 0px #ff00ff)' }} animate={{ x: [0, -10, 10, -5, 8, 0], y: [0, 5, -5, 2, -8, 0], opacity: [0.6, 0.3, 0.7, 0.2, 0.6] }} transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }} />
                <motion.img src={logo} alt="" className="absolute inset-0 w-full h-full object-contain opacity-60 rounded-full blur-[1px] pointer-events-none" style={{ filter: 'drop-shadow(-8px 0px #00ffff)' }} animate={{ x: [0, 10, -10, 5, -8, 0], y: [0, -5, 5, -2, 8, 0], }} transition={{ duration: 0.25, repeat: Infinity, repeatType: "mirror" }} />
                <img src={logo} alt="SSE Main Logo" className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(74,20,140,0.3)]" style={{ transform: 'translateZ(1px)' }} />
            </motion.div>
        </div>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 250]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    const links = [
        { icon: <Disc size={24} />, label: "Spotify", url: "#", color: "hover:text-[#1DB954]" },
        { icon: <Music size={24} />, label: "Apple Music", url: "#", color: "hover:text-[#FA243C]" },
        { icon: <Youtube size={24} />, label: "YouTube", url: "#", color: "hover:text-[#FF0000]" },
        { icon: <Share2 size={24} />, label: "Socials", url: "#", color: "hover:text-blue-500" },
    ];

    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden z-10">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] z-0 opacity-20 mix-blend-overlay"></div>

            <motion.div style={{ y, opacity }} className="relative z-20 flex flex-col items-center">
                <div className="relative mb-12 select-none flex justify-center items-center">
                    <GlitchLogo3D />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex items-center gap-4 px-8 py-4 bg-white/40 backdrop-blur-xl border border-brand-purple/20 rounded-full shadow-lg hover:shadow-brand-purple/20 transition-shadow duration-300"
                >
                    <span className="font-retro text-xs font-bold text-brand-purple/60 mr-2 hidden md:block uppercase tracking-wider">
            KULAKLARINI BOZ:
          </span>
                    {links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={`text-brand-purple transition-all duration-300 transform hover:scale-125 ${link.color}`} title={link.label}>
                            {link.icon}
                        </a>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div style={{ opacity }} animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 text-brand-purple/50 font-retro text-xs tracking-widest">
                AŞAĞIDA BİR ŞEY YOK
            </motion.div>
        </section>
    );
};

export default Hero;