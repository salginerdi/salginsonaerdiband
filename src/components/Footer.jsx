

const Footer = () => {
    return (
        <footer className="w-full py-20 px-6 bg-brand-purple text-retro-white relative z-10 overflow-hidden">

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">

                <div className="relative z-10">
                    <p className="font-retro text-sm opacity-60 mb-2">BİZİ ÇAĞIRIP HATA YAPIN:</p>
                    <a
                        href="mailto:contact@sse.band"
                        className="font-sans font-black text-4xl md:text-6xl tracking-tighter hover:text-brand-light-purple transition-colors flex items-center gap-2 group"
                    >
                        BİZE ULAŞMA &rarr; <br/>
                    </a>
                    <p className="font-retro text-xs opacity-40 mt-4 max-w-sm">
                        Mail kutusuna nadiren bakıyoruz. Cevap vermezsek kişisel algılamayın, muhtemelen uyuyoruz.
                    </p>
                </div>

                <div className="text-right relative z-10">
                    <ul className="flex flex-col gap-2 font-retro text-lg font-bold mb-8">
                        <li><a href="#" className="hover:underline">INSTAGRAM (ZAMAN KAYBI)</a></li>
                        <li><a href="#" className="hover:underline">TWITTER (NEFRET KUSMA)</a></li>
                        <li><a href="#" className="hover:underline">SPOTIFY (GÜRÜLTÜ)</a></li>
                    </ul>

                    <p className="font-retro text-xs opacity-40">
                        © 2026 S<span className="inline-block scale-x-[-1]">S</span>E<br/>
                        Tüm Hakları Saklıdır.
                    </p>
                </div>

            </div>

            <div className="absolute -bottom-20 -right-20 opacity-10 pointer-events-none select-none">
                <h1 className="font-sans font-black text-[15rem] leading-none text-white flex">
                    S<span className="inline-block scale-x-[-1]">S</span>E
                </h1>
            </div>
        </footer>
    );
};

export default Footer;