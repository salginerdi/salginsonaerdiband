import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, SignalHigh, Zap, Radio } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    const statusMessages = [
        { text: "SSE_SYSTEM_ONLINE", color: "text-retro-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" },
        { text: "⚠️ NO SIGNAL ⚠️", color: "text-red-400 animate-pulse drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]" },
        { text: "SALGIN SONA ERDİ", color: "text-[#d8b4fe] drop-shadow-[0_0_5px_rgba(216,180,254,0.6)]" },
        { text: "CONNECTION_LOST...", color: "text-retro-white/50" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % statusMessages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const menuItems = [
        { label: 'MÜZİK', id: 'hero' },
        { label: 'HAKKIMIZDA', id: 'about' },
        { label: 'VİDEOLAR', id: 'videos' },
        { label: 'MAĞAZA', id: 'merch' },
        { label: 'KONSERLER', id: 'tour' },
        { label: 'İLETİŞİM', id: 'contact' }
    ];

    const handleScroll = (e, id) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.pageYOffset - 80,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <nav className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center bg-retro-white/90 backdrop-blur-md border-b-2 border-brand-purple/20 shadow-lg transition-all duration-300">

                <div
                    className="flex items-center h-12 cursor-pointer select-none relative z-50 overflow-hidden border-2 border-brand-purple bg-[#1a0b2e] hover:shadow-[4px_4px_0px_#4A148C] transition-all duration-200 active:translate-y-1 active:shadow-none group"
                    onClick={(e) => handleScroll(e, 'hero')}
                >
                    <div className="h-full px-3 flex items-center justify-center border-r-2 border-brand-purple bg-brand-purple/20 text-brand-purple animate-pulse">
                        {textIndex === 1 ? <Zap size={20} className="text-red-400" /> : <Radio size={20} className="text-[#d8b4fe]" />}
                    </div>

                    <div className="w-48 md:w-64 overflow-hidden relative h-full flex items-center bg-[#1a0b2e] px-4">

                        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-spin-slow pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-transparent pointer-events-none"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={textIndex}
                                initial={{ y: 20, opacity: 0, skewX: -20 }}
                                animate={{ y: 0, opacity: 1, skewX: 0 }}
                                exit={{ y: -20, opacity: 0, skewX: 20 }}
                                transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                                className={`font-retro font-bold text-xs md:text-sm tracking-widest uppercase truncate ${statusMessages[textIndex].color}`}
                            >
                                {statusMessages[textIndex].text}
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay"></div>
                    </div>
                </div>

                <ul className="hidden md:flex gap-8 font-retro text-xs font-bold text-brand-purple tracking-widest">
                    {menuItems.map((item) => (
                        <li key={item.label} className="relative group cursor-pointer">
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => handleScroll(e, item.id)}
                                className="relative z-10 block px-3 py-2 hover:bg-brand-purple hover:text-retro-white transition-colors duration-300 skew-x-[-10deg] border border-transparent hover:border-brand-purple"
                            >
                                <span className="block skew-x-[10deg]">{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div
                    className="md:hidden text-brand-purple cursor-pointer relative z-50 p-2 border-2 border-transparent hover:border-brand-purple transition-all active:scale-95"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-brand-purple flex flex-col items-center justify-center md:hidden border-l-4 border-retro-white"
                    >
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>

                        <ul className="flex flex-col gap-6 font-retro text-2xl font-bold text-retro-white text-center tracking-widest relative z-10 w-full px-10">
                            {menuItems.map((item, i) => (
                                <motion.li
                                    key={item.label}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.05) }}
                                    className="w-full"
                                >
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => handleScroll(e, item.id)}
                                        className="block w-full py-4 border-b-2 border-retro-white/20 hover:bg-retro-white hover:text-brand-purple transition-colors uppercase"
                                    >
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="absolute bottom-10 font-sans font-black text-8xl text-retro-white/10 pointer-events-none select-none tracking-tighter">
                            ERR_404
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;