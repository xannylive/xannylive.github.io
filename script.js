/* =====================================================
   XANNYLIVE
   MAIN JAVASCRIPT
===================================================== */


/* LOADER */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hidden");

    }, 600);

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =====================================================
   LANGUAGE
===================================================== */

let currentLanguage = "tr";

const languageButton = document.getElementById("languageBtn");

languageButton.addEventListener("click", () => {

    currentLanguage =
        currentLanguage === "tr"
            ? "en"
            : "tr";

    languageButton.textContent =
        currentLanguage.toUpperCase();

    document.querySelectorAll("[data-tr]").forEach(element => {

        const text =
            element.dataset[currentLanguage];

        if (text) {

            element.textContent = text;

        }

    });

});


/* =====================================================
   GUIDE DATA
===================================================== */

const guides = {

    crosshair: {

        label: "CS2 / CROSSHAIR",

        title: "XANNYLIVE<br>CROSSHAIR",

        description:
            "Bu crosshair'i direkt kopyalayıp CS2 konsoluna yapıştırabilirsin.",

        steps: [

            {
                title: "KODU KOPYALA",

                text:
                    "Aşağıdaki kodu tek tıkla panoya kopyala.",

                code:
`cl_crosshair_drawoutline 0;
cl_crosshair_dynamic_maxdist_splitratio 0.35;
cl_crosshair_dynamic_splitalpha_innermod 1;
cl_crosshair_dynamic_splitalpha_outermod 0.5;
cl_crosshair_dynamic_splitdist 7;
cl_crosshair_outlinethickness 1;
cl_crosshair_sniper_width 1;
cl_crosshairalpha 255;
cl_crosshaircolor 1;
cl_crosshairdot 0;
cl_crosshairgap -4;
cl_crosshairsize 2;
cl_crosshairstyle 4;
cl_crosshairthickness 1;
cl_crosshairusealpha 1;
cl_fixedcrosshairgap 3;`

            },

            {
                title: "CS2'Yİ AÇ",

                text:
                    "Oyunda geliştirici konsolunu aç ve kodu konsola yapıştır."
            },

            {
                title: "UYGULA",

                text:
                    "Enter'a bastıktan sonra crosshair direkt aktif olur."
            }

        ]

    },


    mouse: {

        label: "CS2 / MOUSE",

        title: "MOUSE<br>AYARLARI",

        description:
            "Kontrollü ve rekabetçi bir mouse ayarı.",

        steps: [

            {
                title: "DPI",

                text:
                    "Mouse DPI: 800"
            },

            {
                title: "SENSITIVITY",

                text:
                    "CS2 sensitivity: 1.00"
            },

            {
                title: "RAW INPUT",

                text:
                    "Mouse hızlandırmasını kapalı tut. Windows pointer precision özelliğini de kapat."
            }

        ]

    },


    graphics: {

        label: "CS2 / GRAPHICS",

        title: "GRAFİK<br>AYARLARI",

        description:
            "FPS ile görüntü kalitesini dengeli tutmak için önerilen ayarlar.",

        steps: [

            {
                title: "DISPLAY MODE",

                text:
                    "Tam ekran kullan."
            },

            {
                title: "SHADOW QUALITY",

                text:
                    "Shadow Quality: Low / Medium"
            },

            {
                title: "MSAA",

                text:
                    "MSAA: 2x veya 4x. Sistemine göre değiştir."
            },

            {
                title: "TEXTURE",

                text:
                    "Texture Filtering: 4x"
            },

            {
                title: "V-SYNC",

                text:
                    "V-Sync: OFF"
            }

        ]

    },


    monitor: {

        label: "DISPLAY / MONITOR",

        title: "MONİTÖR<br>AYARLARI",

        description:
            "Daha akıcı görüntü ve düşük input lag için.",

        steps: [

            {
                title: "REFRESH RATE",

                text:
                    "Windows ekran ayarlarından monitörünün desteklediği en yüksek Hz değerini seç."
            },

            {
                title: "CS2",

                text:
                    "CS2 içerisinde aynı yenileme hızını kullan."
            },

            {
                title: "V-SYNC",

                text:
                    "Rekabetçi kullanımda V-Sync'i kapalı tut."
            }

        ]

    },


    hud: {

        label: "CS2 / HUD",

        title: "HUD<br>AYARLARI",

        description:
            "Ekranı gereksiz bilgilerden temizleyen sade HUD.",

        steps: [

            {
                title: "HUD SCALE",

                text:
                    "HUD boyutunu ekranında rahat okuyabileceğin seviyeye getir."
            },

            {
                title: "RADAR",

                text:
                    "Radarın görüş alanını mümkün olduğunca kullan."
            }

        ]

    },


    radar: {

        label: "CS2 / RADAR",

        title: "RADAR<br>AYARLARI",

        description:
            "Rakip ve takım bilgisini daha rahat takip etmek için.",

        steps: [

            {
                title: "RADAR SCALE",

                text:
                    "Radar boyutunu ekranına göre ayarla."
            },

            {
                title: "RADAR ROTATION",

                text:
                    "Radarın oyuncuya göre dönmesini kullan."
            },

            {
                title: "HUD",

                text:
                    "Radarın ekranın önemli bölgelerini kapatmadığından emin ol."
            }

        ]

    },


    viewmodel: {

        label: "CS2 / VIEWMODEL",

        title: "VIEWMODEL<br>AYARLARI",

        description:
            "Silahın ekranı gereksiz kaplamaması için temiz viewmodel.",

        steps: [

            {
                title: "VIEWMODEL",

                text:
                    "Kullanabileceğin örnek komut:",

                code:
`viewmodel_fov 68;
viewmodel_offset_x 2.5;
viewmodel_offset_y 2;
viewmodel_offset_z -2;`

            },

            {
                title: "UYGULA",

                text:
                    "Komutları CS2 geliştirici konsoluna yapıştır."
            }

        ]

    },


    nvidia: {

        label: "NVIDIA / COLORS",

        title: "NVIDIA<br>RENK AYARLARI",

        description:
            "CS2 görüntüsünü daha canlı ve okunabilir hale getirmek için.",

        steps: [

            {
                title: "NVIDIA DENETİM MASASI",

                text:
                    "Masaüstüne sağ tıkla ve NVIDIA Denetim Masası'nı aç."
            },

            {
                title: "MASAÜSTÜ RENK AYARLARI",

                text:
                    "Sol menüden 'Masaüstü renk ayarlarını yap' bölümüne gir."
            },

            {
                title: "DİJİTAL CANLILIK",

                text:
                    "Digital Vibrance / Dijital Canlılık değerini yaklaşık %70–80 seviyesinde deneyebilirsin."
            },

            {
                title: "UYGULA",

                text:
                    "Sağ alttaki Uygula butonuna bas."
            }

        ]

    },


    fps: {

        label: "PERFORMANCE / FPS",

        title: "FPS<br>BOOST",

        description:
            "FPS'i artırmak ve gereksiz sistem yükünü azaltmak için.",

        steps: [

            {
                title: "CS2 AYARLARI",

                text:
                    "Gereksiz grafik seçeneklerini düşür ve V-Sync'i kapat."
            },

            {
                title: "ARKA PLAN",

                text:
                    "Oyun sırasında gereksiz uygulamaları kapat."
            },

            {
                title: "GÜÇ MODU",

                text:
                    "Windows güç modunu performansa öncelik verecek şekilde ayarla."
            },

            {
                title: "NVIDIA",

                text:
                    "NVIDIA Denetim Masası'nda CS2 için performans odaklı profil kullan."
            }

        ]

    },


    windows: {

        label: "WINDOWS / PERFORMANCE",

        title: "WINDOWS<br>OPTİMİZASYON",

        description:
            "Windows tarafında oyun performansını etkileyebilecek temel ayarlar.",

        steps: [

            {
                title: "OYUN MODU",

                text:
                    "Windows Ayarlar → Oyun → Oyun Modu bölümünü aç."
            },

            {
                title: "BAŞLANGIÇ UYGULAMALARI",

                text:
                    "Görev Yöneticisi → Başlangıç Uygulamaları kısmından gereksiz uygulamaları kapat."
            },

            {
                title: "GÜÇ",

                text:
                    "Windows güç ayarlarında performans odaklı plan kullan."
            }

        ]

    },


    "nvidia-performance": {

        label: "NVIDIA / PERFORMANCE",

        title: "NVIDIA<br>FPS BOOST",

        description:
            "NVIDIA tarafında performans için kontrol edebileceğin ayarlar.",

        steps: [

            {
                title: "NVIDIA DENETİM MASASI",

                text:
                    "Masaüstü → NVIDIA Denetim Masası → 3D ayarlarının yönetilmesi."
            },

            {
                title: "PROGRAM AYARLARI",

                text:
                    "Program ayarlarından CS2'yi seç."
            },

            {
                title: "GÜÇ YÖNETİMİ",

                text:
                    "Güç yönetimi modunu performans öncelikli kullan."
            },

            {
                title: "LOW LATENCY",

                text:
                    "CS2'nin kendi Reflex desteğini kullanıyorsan oyun içindeki NVIDIA Reflex ayarını tercih et."
            }

        ]

    }

};


/* =====================================================
   MODAL
===================================================== */

const modal = document.getElementById("guideModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");


function openGuide(type) {

    const guide = guides[type];

    if (!guide) return;


    let html = `

        <div class="modal-label">
            ${guide.label}
        </div>

        <h2 class="modal-title">
            ${guide.title}
        </h2>

        <p class="modal-description">
            ${guide.description}
        </p>

    `;


    guide.steps.forEach((step, index) => {

        html += `

            <div class="guide-step">

                <div class="guide-number">
                    0${index + 1}
                </div>

                <div>

                    <h3>
                        ${step.title}
                    </h3>

                    <p>
                        ${step.text}
                    </p>

                    ${
                        step.code
                        ?
                        `
                            <div class="code-box">
                                ${escapeHtml(step.code)}
                            </div>

                            <button
                                class="copy-button"
                                data-code="${encodeURIComponent(step.code)}">
                                KODU KOPYALA
                            </button>
                        `
                        :
                        ""
                    }

                </div>

            </div>

        `;

    });


    modalContent.innerHTML = html;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";


    document.querySelectorAll(".copy-button").forEach(button => {

        button.addEventListener("click", async () => {

            const code =
                decodeURIComponent(button.dataset.code);

            try {

                await navigator.clipboard.writeText(code);

                button.textContent = "✓ KOPYALANDI";

                button.classList.add("copied");

                setTimeout(() => {

                    button.textContent = "KODU KOPYALA";

                    button.classList.remove("copied");

                }, 2000);

            } catch {

                button.textContent = "KOPYALANAMADI";

            }

        });

    });

}


function closeGuide() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


document.querySelectorAll("[data-guide]").forEach(card => {

    card.addEventListener("click", () => {

        openGuide(card.dataset.guide);

    });

});


modalClose.addEventListener("click", closeGuide);


document
    .querySelector(".modal-background")
    .addEventListener("click", closeGuide);


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeGuide();

    }

});


/* =====================================================
   HTML ESCAPE
===================================================== */

function escapeHtml(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: .12
        }
    );


document
    .querySelectorAll(".setting-card, .performance-card, .social-card")
    .forEach(element => {

        observer.observe(element);

    });
