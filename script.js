document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = {
        'hero-heading': {
            id: 'Penyedia Solusi Angkutan Pupuk Terkemuka',
            en: 'Leading Fertilizer Shipping Solution Provider'
        },
        'hero-text': {
            id: 'Kami mengkhususkan diri dalam pengiriman pupuk yang efisien dan aman ke seluruh Indonesia, mendukung ketahanan pangan nasional.',
            en: 'We specialize in efficient and safe fertilizer delivery throughout Indonesia, supporting national food security.'
        },
        'about-heading': {
            id: 'Tentang Kami',
            en: 'About Us'
        },
        'about-paragraph-1': {
            id: '[Nama Perusahaan Anda] adalah perusahaan pelayaran yang berdedikasi dalam menyediakan layanan transportasi laut yang handal dan terintegrasi untuk industri pertanian. Didirikan pada tahun [Tahun Didirikan], kami telah tumbuh menjadi mitra terpercaya bagi produsen pupuk, distributor, dan petani di seluruh negeri.',
            en: '[Your Company Name] is a shipping company dedicated to providing reliable and integrated sea transportation services for the agricultural industry. Established in [Year Established], we have grown to become a trusted partner for fertilizer producers, distributors, and farmers nationwide.'
        },
        'about-paragraph-2': {
            id: 'Armada kapal kami yang modern dan dilengkapi dengan teknologi terkini memastikan pengiriman pupuk dalam jumlah besar dapat dilakukan dengan efisiensi dan keamanan maksimal. Kami memprioritaskan ketepatan waktu dan integritas kargo, memahami pentingnya pupuk dalam siklus pertanian.',
            en: 'Our modern fleet of vessels, equipped with the latest technology, ensures large-volume fertilizer deliveries are carried out with maximum efficiency and safety. We prioritize punctuality and cargo integrity, understanding the importance of fertilizers in the agricultural cycle.'
        },
        'services-heading': {
            id: 'Layanan Kami',
            en: 'Our Services'
        },
        'service-1-title': {
            id: 'Angkutan Pupuk Curah:',
            en: 'Bulk Fertilizer Transport:'
        },
        'service-1-desc': {
            id: 'Pengiriman pupuk dalam jumlah besar menggunakan kapal khusus curah.',
            en: 'Large-volume fertilizer delivery using specialized bulk carriers.'
        },
        'service-2-title': {
            id: 'Angkutan Pupuk Kemasan:',
            en: 'Packaged Fertilizer Transport:'
        },
        'service-2-desc': {
            id: 'Pengiriman pupuk dalam kemasan menggunakan kapal kargo umum.',
            en: 'Delivery of packaged fertilizers using general cargo vessels.'
        },
        'service-3-title': {
            id: 'Logistik Terintegrasi:',
            en: 'Integrated Logistics:'
        },
        'service-3-desc': {
            id: 'Solusi logistik end-to-end, termasuk penanganan pelabuhan dan pengiriman darat.',
            en: 'End-to-end logistics solutions, including port handling and land transportation.'
        },
        'why-choose-heading': {
            id: 'Mengapa Memilih Kami?',
            en: 'Why Choose Us?'
        },
        'advantage-1-title': {
            id: 'Pengalaman:',
            en: 'Experience:'
        },
        'advantage-1-desc': {
            id: 'Bertahun-tahun pengalaman dalam industri transportasi laut.',
            en: 'Years of experience in the maritime transport industry.'
        },
        'advantage-2-title': {
            id: 'Keandalan:',
            en: 'Reliability:'
        },
        'advantage-2-desc': {
            id: 'Komitmen terhadap pengiriman tepat waktu dan aman.',
            en: 'Commitment to on-time and safe delivery.'
        },
        'advantage-3-title': {
            id: 'Armada Modern:',
            en: 'Modern Fleet:'
        },
        'advantage-3-desc': {
            id: 'Kapal-kapal yang terawat dengan baik dan berteknologi canggih.',
            en: 'Well-maintained and technologically advanced vessels.'
        },
        'advantage-4-title': {
            id: 'Pelayanan Pelanggan:',
            en: 'Customer Service:'
        },
        'advantage-4-desc': {
            id: 'Dukungan pelanggan yang responsif dan profesional.',
            en: 'Responsive and professional customer support.'
        },
        'contact-heading': {
            id: 'Hubungi Kami',
            en: 'Contact Us'
        },
        'address-label': {
            id: 'Alamat:',
            en: 'Address:'
        },
        'phone-label': {
            id: 'Telepon:',
            en: 'Phone:'
        },
        'email-label': {
            id: 'Email:',
            en: 'Email:'
        },
        // Add more elements here as needed
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang; // Set the lang attribute for accessibility

        for (const id in elementsToTranslate) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = elementsToTranslate[id][lang];
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
});
