import { motion } from 'framer-motion';
import { Skull, Zap, Volume2, Frown } from 'lucide-react';

const members = [
    {
        role: "VOKAL & KAOS",
        desc: "Sahnede bağırır, evde kedi sever. Şarkı sözlerini genelde konser anında uydurur.",
        icon: <Skull size={32} />
    },
    {
        role: "GİTAR & PEDAL BORCU",
        desc: "Sesi düzeltsin diye 40 tane pedal aldı, hala aynı sesi çıkarıyor. Maaşını kablolara yatırır.",
        icon: <Zap size={32} />
    },
    {
        role: "BASS & DEPRESYON",
        desc: "Nota mota da bilmez. Yüzü hiç gülmez, çünkü basçı.",
        icon: <Frown size={32} />
    },
    {
        role: "DAVUL & GÜRÜLTÜ",
        desc: "Komşuları ondan nefret ediyor. Metronom kullanmayı reddediyor, 'hissederek' çalar.",
        icon: <Volume2 size={32} />
    }
];

const AboutSection = () => {
    return (
        <section className="w-full relative z-20 bg-retro-white text-brand-purple overflow-hidden border-b-2 border-brand-purple">

            <div className="bg-brand-purple text-retro-white py-2 overflow-hidden border-b-2 border-brand-purple select-none">
                <motion.div
                    className="whitespace-nowrap font-retro font-bold text-lg tracking-widest flex gap-10"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                >
                    <span>+++ KOMİK Mİ? +++</span>
                    <span>YENİ ALBÜM "YANKILAR" ÇIKTI (KİMSE DİNLEMEDİ) +++</span>
                    <span>BİZİ SEVMENİZE GEREK YOK, BİZ DE SİZİ SEVMİYORUZ +++</span>
                    <span>KONSERLERDE KULAK TIKACI TAKMAK ZORUNLUDUR (BİZ TAKIYORUZ) +++</span>
                    <span>SON DAKİKA: GRUP HALA DAĞILMADI +++</span>
                    <span>YENİ ALBÜM "YANKILAR" ÇIKTI (KİMSE DİNLEMEDİ) +++</span>
                    <span>KOMİK Mİ? KOMİKTİR BELKİ +++</span>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16 items-center">

                <div className="w-full md:w-1/2">
                    <h2 className="font-sans font-black text-6xl md:text-8xl tracking-tighter mb-6 leading-[0.8]">
                        BİZ KİMİZ<br/>
                        <span className="text-transparent stroke-text opacity-50">NEDEN BURADAYIZ?</span>
                    </h2>

                    <div className="font-retro text-sm md:text-base leading-relaxed space-y-4 border-l-4 border-brand-purple pl-6">
                        <p>
                            <strong>SSE (Salgın Sona Erdi)</strong>, 2024 yılında "Müzik piyasası çok iyi, bir de biz eksik kalmayalım" diyerek kurulmadı. Tam aksine, gürültü yapacak yer arıyorduk ve prova stüdyoları evden daha ucuzdu.
                        </p>
                        <p>
                            Post-Punk yapıyoruz çünkü post-punk yapıyoruz. Şarkılarımız genellikle modern hayatın saçmalığı, bitmeyen pazartesi sendromları ve bozuk kahve makineleri hakkında.
                        </p>
                        <p className="font-bold bg-brand-purple text-retro-white inline-block px-2 transform -rotate-1">
                            "Amacımız ünlü olmak değil, komşuları rahatsız etmek de değil. Bizim amacımız yok."
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {members.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white border-2 border-brand-purple p-6 hover:shadow-[8px_8px_0px_0px_rgba(74,20,140,1)] transition-shadow duration-300 group"
                        >
                            <div className="mb-4 text-brand-purple group-hover:scale-110 transition-transform duration-300">
                                {member.icon}
                            </div>
                            <h3 className="font-sans font-black text-xl mb-2 uppercase">{member.role}</h3>
                            <p className="font-retro text-xs opacity-70 leading-5">
                                {member.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutSection;