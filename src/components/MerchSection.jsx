
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

const ParallaxImage = ({ src, alt, className, scale = 1.2 }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    return ( <div ref={ref} className={`relative overflow-hidden ${className}`}> <motion.img src={src} alt={alt} style={{ y, scale }} className="w-full h-full object-cover" /> </div> );
};

const products = [
    { id: 1, name: "YANKILAR - LTD. VINYL", type: "vinyl", price: "850₺", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600", status: "STOKTA" },
    { id: 2, name: "SSE LOGO TEE (BLACK)", type: "shirt", price: "600₺", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600", status: "STOKTA" },
    { id: 3, name: "NOISE HOODIE", type: "hoodie", price: "1200₺", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600", status: "STOKTA" },
    { id: 4, name: "SSE WOOL BEANIE", type: "beanie", price: "450₺", image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600", status: "TÜKENDİ" },
    { id: 5, name: "TOUR DAD CAP", type: "cap", price: "500₺", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600", status: "STOKTA" },
    { id: 6, name: "POST-PUNK POSTER", type: "poster", price: "150₺", image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=600", status: "STOKTA" },
];

const MerchSection = () => {
    return (
        <section className="w-full py-24 px-6 relative z-10 bg-brand-purple text-retro-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] mix-blend-overlay"></div>
            <div className="max-w-7xl mx-auto relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-retro-white/20 pb-6">
                    <div>
                        <h2 className="font-retro text-xs tracking-[0.5em] opacity-70 mb-2">OFFICIAL STORE</h2>
                        <h3 className="font-sans font-black text-5xl md:text-7xl tracking-tighter">
                            KAPİTALİZM
                        </h3>
                    </div>
                    <p className="font-retro text-sm max-w-xs text-right mt-4 md:mt-0 opacity-60">
                        MAAŞINI BURAYA BIRAK.<br/>
                        GERİ İADE YOK.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-retro-white text-brand-purple cursor-pointer flex flex-col h-full"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden border-b-2 border-brand-purple bg-gray-200">
                                <ParallaxImage src={product.image} alt={product.name} className="w-full h-full absolute inset-0" />
                                {product.status !== 'TÜKENDİ' && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <img src={logo} alt="Print" className={`opacity-80 mix-blend-hard-light drop-shadow-sm z-10 ${product.type === 'shirt' ? 'w-24 mt-[-60px]' : ''} ${product.type === 'hoodie' ? 'w-20 mt-[-20px]' : ''} ${product.type === 'vinyl' ? 'w-24 rounded-full animate-[spin_10s_linear_infinite]' : ''} ${product.type === 'beanie' ? 'w-16 mt-10 opacity-90' : ''} ${product.type === 'cap' ? 'w-14 mt-[-10px] opacity-90' : ''} ${product.type === 'poster' ? 'w-64 opacity-90 mix-blend-difference' : ''}`} />
                                    </div>
                                )}

                                {product.status === 'TÜKENDİ' && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                        {/* TONE UPDATE: ARTIK YOK */}
                                        <div className="bg-brand-purple text-retro-white font-black font-sans text-3xl px-6 py-2 rotate-[-15deg] border-2 border-retro-white shadow-xl whitespace-nowrap">
                                            ARTIK YOK
                                        </div>
                                    </div>
                                )}

                                {product.status !== 'TÜKENDİ' && (
                                    <div className="absolute inset-0 bg-brand-purple/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[2px]">
                                        {/* TONE UPDATE: AL BUNU */}
                                        <span className="font-retro font-bold text-retro-white text-lg border-2 border-retro-white px-6 py-3 flex items-center gap-2 bg-brand-purple hover:bg-white hover:text-brand-purple transition-colors">
                      PARANI ÇÖPE AT <ArrowUpRight size={20} />
                    </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6 flex flex-col justify-between flex-grow border-l-2 border-r-2 border-b-2 border-transparent group-hover:border-retro-white/50 transition-colors z-10 bg-retro-white relative">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-sans font-black text-2xl leading-none uppercase max-w-[85%]">{product.name}</h4>
                                        <ShoppingBag size={20} className="opacity-50" />
                                    </div>
                                    <span className={`font-retro text-xs px-2 py-0.5 inline-block font-bold ${product.status === 'TÜKENDİ' ? 'bg-gray-500 text-white' : 'bg-brand-purple text-retro-white'}`}>
                    {product.status === 'TÜKENDİ' ? 'KAÇIRDIN' : 'GEREKSİZ'}
                  </span>
                                </div>
                                <div className="text-right font-retro font-bold text-3xl mt-4">{product.price}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MerchSection;