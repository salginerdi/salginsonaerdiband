# SALGIN SONA ERDİ (SSE) - Web Prototipi

Bu proje, **SALGIN SONA ERDİ** müzik grubu için geliştirilmiş, modern web teknolojileri kullanılarak tasarlanan interaktif bir tek sayfa uygulamasıdır (SPA).

Proje, standart web tasarım kalıplarının dışına çıkarak **Brutalist** ve **Post-Punk** estetiğini dijital ortama yansıtmayı hedefler. Yüksek performanslı animasyonlar, özel imleç etkileşimleri ve Web Audio API entegrasyonu ile sürükleyici bir kullanıcı deneyimi sunar.


## 📋 Proje Hakkında

Bu çalışma, grubun dijital kimliğini oluşturmak amacıyla geliştirilen bir prototiptir. Kullanıcı arayüzü (UI), grubun müzikal tarzını yansıtacak şekilde "glitch" (bozulma) efektleri, retro dokular ve agresif tipografi ile kurgulanmıştır.

Projede herhangi bir hazır şablon kullanılmamış, bileşen bazlı mimari ile React üzerinde geliştirilmiştir.

## 🚀 Temel Özellikler

* **Gelişmiş 3D Animasyonlar:** Framer Motion kullanılarak hazırlanan, RGB ayrışması ve perspektif efektlerine sahip 3D interaktif logo.
* **Web Audio API Entegrasyonu:** Harici ses dosyası kullanmadan, tarayıcı tabanlı (Client-side) prosedürel "White Noise" (Beyaz Gürültü) üreteci.
* **Özel İmleç (Custom Cursor):** Negatif renk (difference mode) efekti ile çalışan, etkileşimli ve gecikmesiz özel fare imleci.
* **Parallax Efektleri:** Scroll hareketine duyarlı, çok katmanlı arka plan ve görsel derinlik efektleri.
* **Responsive Tasarım:** Mobil ve masaüstü cihazlar için tamamen uyumlu, esnek ızgara (grid) yapısı ve özel mobil menü navigasyonu.
* **İnteraktif Yükleme Ekranı:** Kullanıcı deneyimini oyunlaştıran, simüle edilmiş sistem hataları içeren özel "Loading" sekansı.
* **Sanal Mağaza Vitrini:** CSS blend modları kullanılarak hazırlanan, dinamik ürün giydirme (mockup) sistemi.

## 🛠️ Kullanılan Teknolojiler

Bu proje aşağıdaki teknoloji yığını ile geliştirilmiştir:

* **Core:** [React](https://reactjs.org/) (Vite Build Tool)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animation:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Audio:** Native Web Audio API

## 💻 Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1.  **Depoyu klonlayın:**
    ```bash
    git clone [https://github.com/KULLANICI_ADIN/salgin-sona-erdi-web.git](https://github.com/KULLANICI_ADIN/salgin-sona-erdi-web.git)
    cd salgin-sona-erdi-web
    ```

2.  **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    ```

3.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```

4.  **Tarayıcıda görüntüleyin:**
    Terminalde belirtilen yerel adrese (genellikle `http://localhost:5173`) gidin.
