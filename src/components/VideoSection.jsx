
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
    { id: 1, title: "DİSTOPYA (OFFICIAL VIDEO)", thumbnail: "https://picsum.photos/seed/v1/800/450" },
    { id: 2, title: "KAYIP SİNYAL (LIVE STUDIO)", thumbnail: "https://picsum.photos/seed/v2/800/450" },
];

const VideoSection = () => {
    return (
        <section className="w-full py-20 px-6 relative z-10 bg-brand-purple text-retro-white">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 border-b border-retro-white/20 pb-4">
                    <h2 className="font-retro text-xs tracking-[0.5em] opacity-60 mb-2">VİDEOGRAFİ</h2>
                    <h3 className="font-sans font-black text-5xl md:text-7xl tracking-tighter uppercase">
                        GÖRSEL KİRLİLİK
                    </h3>
                    <p className="font-retro text-sm mt-2 opacity-50">GÖZLERİNİZ KANAYABİLİR.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {videos.map((video, i) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative aspect-video overflow-hidden border-2 border-retro-white bg-black">
                                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full border-2 border-retro-white flex items-center justify-center group-hover:scale-110 transition-transform bg-brand-purple/50 backdrop-blur-sm">
                                        <Play fill="white" className="ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-4 font-retro text-xs bg-black px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    VAKTİNİ HARCA &rarr;
                                </div>
                            </div>
                            <h4 className="font-sans font-bold text-xl mt-4 tracking-tight group-hover:text-brand-light-purple transition-colors">{video.title}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoSection;