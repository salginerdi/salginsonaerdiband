
import { motion } from 'framer-motion';

const events = [
    { id: 1, date: "20 EKM", city: "İSTANBUL", venue: "Blind", status: "BİTTİ GİTTİ" },
    { id: 2, date: "15 KAS", city: "ANKARA", venue: "Kite", status: "BİTTİ GİTTİ" },
    { id: 3, date: "22 OCA", city: "İZMİR", venue: "Hangout PSM", status: "RİSK AL" }, // Bilet Al -> Risk Al
    { id: 4, date: "14 ŞUB", city: "ESKİŞEHİR", venue: "IF Performance", status: "BELKİ GELİRİZ" }, // Yakında -> Belki Geliriz
];

const TourSection = () => {
    return (
        <section className="w-full py-12 md:py-24 px-6 relative z-10 text-brand-purple overflow-hidden">
            <div className="absolute inset-0 bg-retro-white/40 backdrop-blur-[2px] -z-10"></div>
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-8 md:mb-12">
                    <div className="h-[2px] bg-brand-purple flex-grow"></div>
                    {/* TONE UPDATE: CANLI KAOS */}
                    <h2 className="font-retro text-3xl md:text-5xl font-bold tracking-tight">CANLI KAOS</h2>
                    <div className="h-[2px] bg-brand-purple flex-grow"></div>
                </div>

                <div className="flex flex-col border-t-2 border-brand-purple">
                    {events.map((event, i) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-10 border-b-2 border-brand-purple hover:bg-brand-purple hover:text-retro-white transition-colors duration-300 cursor-default group relative overflow-hidden gap-6 md:gap-0"
                        >
                            <div className="flex items-center gap-4 md:gap-8 w-full md:w-1/2 relative z-10">
                <span className="font-sans font-black text-4xl md:text-5xl tracking-tighter md:group-hover:translate-x-4 transition-transform duration-300">
                  {event.date}
                </span>
                                <span className="font-retro text-lg md:text-xl opacity-70">
                  / {event.city}
                </span>
                            </div>
                            <div className="w-full md:w-1/3 text-left md:text-center font-retro font-bold text-xl md:text-lg relative z-10 pl-1 md:pl-0">
                                {event.venue}
                            </div>
                            <div className="w-full md:w-auto flex justify-start md:justify-end relative z-10 pt-4 md:pt-0">
                                <button
                                    className={`
                    w-full md:w-auto px-8 py-3 font-retro font-bold border-2 text-sm transition-all text-center tracking-wider
                    ${event.status === 'RİSK AL'
                                        ? 'border-current bg-transparent hover:bg-white hover:text-brand-purple cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]'
                                        : 'border-brand-purple/30 opacity-60 cursor-not-allowed'
                                    }
                  `}
                                >
                                    {event.status}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TourSection;