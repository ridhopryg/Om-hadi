document.addEventListener('DOMContentLoaded', () => {
    // --- Language Switcher Functionality ---
    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = {
        // Header Top
        'header-phone': { id: '[Nomor Telepon Anda]', en: '[Your Phone Number]' },
        'header-email': { id: '[email Anda]', en: '[Your Email Address]' },

        // Header Main
        'company-main-name': { id: '[Nama Perusahaan Anda]', en: '[Your Company Name]' },
        'company-main-tagline': { id: 'Penyedia Solusi Angkutan Pupuk', en: 'Fertilizer Shipping Solution Provider' },

        // Navigation Links
        'nav-home': { id: 'Beranda', en: 'Home' },
        'nav-about': { id: 'Tentang Kami', en: 'About Us' },
        'nav-services-dropdown': { id: 'Layanan', en: 'Services' },
        'nav-service-bulk': { id: 'Angkutan Curah', en: 'Bulk Transport' },
        'nav-service-packaged': { id: 'Angkutan Kemasan', en: 'Packaged Transport' },
        'nav-service-integrated': { id: 'Logistik Terintegrasi', en: 'Integrated Logistics' },
        'nav-programs': { id: 'Program Kami', en: 'Our Programs' }, // Changed to "Program Kami"
        'nav-achievements': { id: 'Prestasi', en: 'Achievements' },
        'nav-news-events': { id: 'Berita & Acara', en: 'News & Events' },
        'nav-gallery': { id: 'Galeri', en: 'Gallery' },
        'nav-contact': { id: 'Kontak', en: 'Contact' },
        'nav-cta': { id: 'Hubungi Kami!', en: 'Contact Us Now!' }, // Changed from PPDB

        // Hero Slider
        'slider-heading-1': { id: 'Penyedia Solusi Angkutan Pupuk Terkemuka', en: 'Leading Fertilizer Shipping Solution Provider' },
        'slider-text-1': { id: 'Kami mengkhususkan diri dalam pengiriman pupuk yang efisien dan aman ke seluruh Indonesia, mendukung ketahanan pangan nasional.', en: 'We specialize in efficient and safe fertilizer delivery across Indonesia, supporting national food security.' },
        'slider-btn-1': { id: 'Pelajari Lebih Lanjut', en: 'Learn More' },
        'slider-heading-2': { id: 'Inovasi Logistik untuk Pertanian Indonesia', en: 'Logistic Innovation for Indonesian Agriculture' },
        'slider-text-2': { id: 'Memastikan rantai pasok pupuk berjalan lancar, dari produsen hingga petani di setiap sudut negeri.', en: 'Ensuring smooth fertilizer supply chains, from producers to farmers nationwide.' },
        'slider-btn-2': { id: 'Hubungi Kami', en: 'Contact Us' },

        // Announcements Ticker
        'ticker-title': { id: 'Pengumuman Terbaru', en: 'Latest Announcements' },
        'ticker-item-1': { id: 'Pengiriman ekspres ke wilayah terpencil kini tersedia! Hubungi kami untuk detail.', en: 'Express shipping to remote areas now available! Contact us for details.' },
        'ticker-item-2': { id: 'Informasi jadwal kapal untuk kuartal berikutnya telah diterbitkan.', en: 'Vessel schedule information for the next quarter has been published.' },
        'ticker-item-3': { id: 'Penawaran khusus untuk kontrak pengiriman pupuk jangka panjang.', en: 'Special offers for long-term fertilizer shipping contracts.' },


        // About Us
        'about-heading': { id: 'Tentang Kami', en: 'About Us' },
        'about-paragraph-1': { id: '[Nama Perusahaan Anda] adalah perusahaan pelayaran yang berdedikasi dalam menyediakan layanan transportasi laut yang handal dan terintegrasi untuk industri pertanian. Didirikan pada tahun [Tahun Didirikan], kami telah tumbuh menjadi mitra terpercaya bagi produsen pupuk, distributor, dan petani di seluruh negeri.', en: '[Your Company Name] is a shipping company dedicated to providing reliable and integrated sea transportation services for the agricultural industry. Established in [Year Established], we have grown to become a trusted partner for fertilizer producers, distributors, and farmers nationwide.' },
        'about-paragraph-2': { id: 'Armada kapal kami yang modern dan dilengkapi dengan teknologi terkini memastikan pengiriman pupuk dalam jumlah besar dapat dilakukan dengan efisiensi dan keamanan maksimal. Kami memprioritaskan ketepatan waktu dan integritas kargo, memahami pentingnya pupuk dalam siklus pertanian.', en: 'Our modern fleet of vessels, equipped with the latest technology, ensures large-volume fertilizer deliveries are carried out with maximum efficiency and safety. We prioritize punctuality and cargo integrity, understanding the importance of fertilizers in the agricultural cycle.' },
        'about-read-more': { id: 'Baca Selengkapnya', en: 'Read More' },

        // Programs/Services
        'programs-heading': { id: 'Program & Layanan Unggulan', en: 'Featured Programs & Services' },
        'program-title-1': { id: 'Angkutan Pupuk Curah', en: 'Bulk Fertilizer Transport' },
        'program-desc-1': { id: 'Pengiriman pupuk dalam jumlah besar menggunakan kapal khusus curah dengan standar keamanan tinggi.', en: 'Large-volume fertilizer delivery using specialized bulk carriers with high safety standards.' },
        'program-title-2': { id: 'Angkutan Pupuk Kemasan', en: 'Packaged Fertilizer Transport' },
        'program-desc-2': { id: 'Solusi pengiriman pupuk dalam kemasan menggunakan kapal kargo umum yang efisien dan tepat waktu.', en: 'Efficient and timely packaged fertilizer shipping solutions using general cargo vessels.' },
        'program-title-3': { id: 'Logistik Terintegrasi', en: 'Integrated Logistics' },
        'program-desc-3': { id: 'Layanan logistik end-to-end, termasuk penanganan pelabuhan, pergudangan, dan pengiriman darat ke lokasi tujuan.', en: 'End-to-end logistics services, including port handling, warehousing, and land delivery to destination.' },
        'program-title-4': { id: 'Kemitraan Jangka Panjang', en: 'Long-Term Partnership' },
        'program-desc-4': { id: 'Membangun hubungan jangka panjang dengan klien untuk mendukung pertumbuhan pertanian berkelanjutan.', en: 'Building long-term relationships with clients to support sustainable agricultural growth.' },

        // Achievements
        'achievements-heading': { id: 'Pencapaian & Keunggulan Kami', en: 'Our Achievements & Strengths' },
        'achievement-title-1': { id: 'Sertifikasi Internasional', en: 'International Certifications' },
        'achievement-desc-1': { id: 'Memiliki sertifikasi kualitas dan keamanan pelayaran yang diakui secara global.', en: 'Holds globally recognized shipping quality and safety certifications.' },
        'achievement-title-2': { id: 'Pengiriman Tepat Waktu', en: 'On-Time Delivery' },
        'achievement-desc-2': { id: 'Tingkat ketepatan waktu pengiriman mencapai lebih dari 98% setiap tahunnya.', en: 'Achieved over 98% on-time delivery rate annually.' },
        'achievement-title-3': { id: 'Jaringan Luas', en: 'Extensive Network' },
        'achievement-desc-3': { id: 'Menjangkau lebih dari 30 pelabuhan utama di seluruh Indonesia.', en: 'Reaching over 30 major ports across Indonesia.' },
        'achievement-title-4': { id: 'Dukungan Pertanian', en: 'Agricultural Support' },
        'achievement-desc-4': { id: 'Berperan aktif dalam mendukung ketahanan pangan nasional melalui distribusi pupuk.', en: 'Actively contributing to national food security through fertilizer distribution.' },

        // News & Events
        'news-events-heading': { id: 'Berita & Acara Terbaru', en: 'Latest News & Events' },
        'news-title-1': { id: 'Peluncuran Kapal Kargo Baru untuk Rute Timur', en: 'Launch of New Cargo Vessel for Eastern Route' },
        'news-date-1': { id: '01 Juli 2025', en: 'July 01, 2025' },
        'news-desc-1': { id: 'Perusahaan kami dengan bangga mengumumkan penambahan kapal kargo terbaru untuk memperkuat rute distribusi di wilayah Indonesia Timur.', en: 'Our company proudly announces the addition of a new cargo vessel to strengthen distribution routes in Eastern Indonesia.' },
        'news-read-more-1': { id: 'Baca Selengkapnya', en: 'Read More' },
        'news-title-2': { id: 'Partisipasi dalam Pameran Logistik Nasional 2025', en: 'Participation in National Logistics Expo 2025' },
        'news-date-2': { id: '15 Juni 2025', en: 'June 15, 2025' },
        'news-desc-2': { id: 'Kami akan berpartisipasi dalam Pameran Logistik Nasional tahun ini. Kunjungi booth kami untuk diskusi lebih lanjut tentang solusi logistik kami.', en: 'We will be participating in this year\'s National Logistics Expo. Visit our booth to discuss our logistics solutions further.' },
        'news-read-more-2': { id: 'Baca Selengkapnya', en: 'Read More' },
        'news-title-3': { id: 'Kolaborasi dengan Distributor Pupuk Terbesar', en: 'Collaboration with Largest Fertilizer Distributor' },
        'news-date-3': { id: '10 Mei 2025', en: 'May 10, 2025' },
        'news-desc-3': { id: 'Kerja sama strategis baru telah terjalin dengan distributor pupuk terkemuka, memperluas jangkauan layanan kami ke seluruh pelosok negeri.', en: 'A new strategic partnership has been formed with a leading fertilizer distributor, expanding our service reach nationwide.' },
        'news-read-more-3': { id: 'Baca Selengkapnya', en: 'Read More' },

        // Gallery
        'gallery-heading': { id: 'Galeri Kami', en: 'Our Gallery' },

        // Contact Section
        'contact-heading': { id: 'Hubungi Kami', en: 'Contact Us' },
        'form-title': { id: 'Kirim Pesan Kepada Kami', en: 'Send Us a Message' },
        'label-fullname': { id: 'Nama Lengkap', en: 'Full Name' },
        'label-email': { id: 'Email Anda', en: 'Your Email' },
        'label-subject': { id: 'Subjek', en: 'Subject' },
        'label-message': { id: 'Pesan Anda', en: 'Your Message' },
        'submit-button': { id: 'Kirim Pesan', en: 'Send Message' },
        'details-title': { id: 'Informasi Kontak', en: 'Contact Information' },
        'contact-address-label': { id: 'Alamat:', en: 'Address:' },
        'contact-address-value': { id: '[Alamat Kantor Anda]', en: '[Your Office Address]' },
        'contact-phone-label-detail': { id: 'Telepon:', en: 'Phone:' },
        'contact-phone-value-detail': { id: '[Nomor Telepon Anda]', en: '[Your Phone Number]' },
        'contact-email-label-detail': { id: 'Email:', en: 'Email:' },
        'contact-email-value-detail': { id: '[email Anda]', en: '[Your Email Address]' },
        'contact-website-label-detail': { id: 'Website:', en: 'Website:' },
        'contact-website-value-detail': { id: 'www.yourcompany.com', en: 'www.yourcompany.com' },

        // Footer
        'footer-company-name': { id: '[Nama Perusahaan Anda]', en: '[Your Company Name]' },
        'footer-copyright': { id: 'Hak Cipta Dilindungi.', en: 'All Rights Reserved.' },
        'footer-privacy': { id: 'Kebijakan Privasi', en: 'Privacy Policy' },
        'footer-terms': { id: 'Syarat & Ketentuan', en: 'Terms & Conditions' }
    };

    // Placeholder attributes for input fields
    const placeholderTranslations = {
        'fullName': { id: 'Nama Anda', en: 'Your Name' },
        'email': { id: 'contoh@domain.com', en: 'example@domain.com' },
        'subject': { id: 'Subjek Pesan', en: 'Message Subject' },
        'message': { id: 'Tulis pesan Anda di sini...', en: 'Write your message here...' }
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang; // Set the lang attribute for accessibility

        for (const id in elementsToTranslate) {
            const element = document.getElementById(id);
            if (element) {
                // Special handling for anchor text that also has href/mailto
                if (element.tagName === 'A' && (id.includes('phone-value') || id.includes('email-value') || id.includes('website-value'))) {
                    element.textContent = elementsToTranslate[id][lang];
                } else {
                    element.textContent = elementsToTranslate[id][lang];
                }
            }
        }

        // Update placeholder texts
        for (const id in placeholderTranslations) {
            const element = document.getElementById(id);
            if (element) {
                element.setAttribute('placeholder', placeholderTranslations[id][lang]);
            }
        }

        // Update active button state
        langButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            }
        });
    }

    // Set initial language (e.g., based on browser preference or default to ID)
    const initialLang = localStorage.getItem('preferredLang') || 'id';
    setLanguage(initialLang);

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('preferredLang', lang); // Store user's preference
        });
    });

    // --- Hero Slider Functionality ---
    const sliderItems = document.querySelectorAll('.slider-item');
    const sliderDots = document.querySelectorAll('.slider-dots div');
    let currentSlide = 0;

    function showSlide(index) {
        sliderItems.forEach((item, i) => {
            item.classList.remove('active');
            sliderDots[i].classList.remove('active');
        });
        sliderItems[index].classList.add('active');
        sliderDots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderItems.length;
        showSlide(currentSlide);
    }

    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    // --- Announcements Ticker Functionality ---
    const tickerItems = document.querySelectorAll('.ticker-item');
    let currentTickerItem = 0;

    function showTickerItem(index) {
        tickerItems.forEach((item, i) => {
            item.classList.remove('active-ticker');
        });
        tickerItems[index].classList.add('active-ticker');
        currentTickerItem = index;
    }

    function nextTickerItem() {
        currentTickerItem = (currentTickerItem + 1) % tickerItems.length;
        showTickerItem(currentTickerItem);
    }

    // Auto-rotate ticker every 4 seconds
    setInterval(nextTickerItem, 4000);
    showTickerItem(0); // Show first item on load

    // --- Intersection Observer for Fade-in Sections ---
    const fadeElements = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section must be visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        sectionObserver.observe(element);
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav .nav-links a');

    // Close menu when a link is clicked (for smooth scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle.checked) {
                menuToggle.checked = false;
            }
        });
    });

    // --- Lightbox Initialization (assuming jQuery and Lightbox are loaded) ---
    // Lightbox is usually initialized automatically if JS is included, but good to ensure
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });
});
