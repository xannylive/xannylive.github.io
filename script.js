document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTLER
    ========================================= */

    const modal = document.getElementById("guideModal");
    const modalBg = document.getElementById("modalBg");
    const modalClose = document.getElementById("modalClose");
    const guideContent = document.getElementById("guideContent");

    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");

    const languageBtn = document.getElementById("languageBtn");

    /* =========================================
       CS2 GUIDE DATA
    ========================================= */

    const guides = {

        crosshair: {
            label: "CS2 / AIM",
            title: "CROSSHAIR",
            content: `
                <div class="guide-label">XANNY CROSSHAIR</div>

                <h2>CROSSHAIR <span>CODE.</span></h2>

                <p class="guide-intro">
                    Kullandığım crosshair kodunu direkt kopyalayabilirsin.
                </p>

                <div class="code-box">
                    <code id="crosshairCode">CSGO-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</code>

                    <button class="copy-btn" id="copyCrosshair">
                        COPY CODE
                    </button>
                </div>

                <div class="steps">

                    <div>
                        <b>01</b>
                        <span>CS2'yi aç.</span>
                    </div>

                    <div>
                        <b>02</b>
                        <span>Ayarlar → Oyun → Crosshair bölümüne gir.</span>
                    </div>

                    <div>
                        <b>03</b>
                        <span>Paylaş veya içe aktar seçeneğini aç.</span>
                    </div>

                    <div>
                        <b>04</b>
                        <span>Kodu yapıştır ve içe aktar.</span>
                    </div>

                </div>
            `
        },

        mouse: {
            label: "CS2 / AIM",
            title: "MOUSE",
            content: `
                <div class="guide-label">XANNY AIM</div>

                <h2>MOUSE <span>SETTINGS.</span></h2>

                <p class="guide-intro">
                    Kullandığım mouse ve aim ayarları.
                </p>

                <div class="setting-list">

                    <div>
                        <span>DPI</span>
                        <strong>800</strong>
                    </div>

                    <div>
                        <span>CS2 SENSITIVITY</span>
                        <strong>1.00</strong>
                    </div>

                    <div>
                        <span>ZOOM SENSITIVITY</span>
                        <strong>1.00</strong>
                    </div>

                    <div>
                        <span>POLLING RATE</span>
                        <strong>1000 Hz</strong>
                    </div>

                    <div>
                        <span>RAW INPUT</span>
                        <strong>ON</strong>
                    </div>

                    <div>
                        <span>MOUSE ACCELERATION</span>
                        <strong>OFF</strong>
                    </div>

                </div>

                <div class="guide-note">
                    Windows mouse acceleration kapalı olmalı.
                </div>
            `
        },

        graphics: {
            label: "CS2 / DISPLAY",
            title: "GRAPHICS",
            content: `
                <div class="guide-label">CS2 PERFORMANCE</div>

                <h2>GRAPHICS <span>SETTINGS.</span></h2>

                <p class="guide-intro">
                    FPS ve görüntü dengesi için kullandığım ayarlar.
                </p>

                <div class="setting-list">

                    <div>
                        <span>DISPLAY MODE</span>
                        <strong>FULLSCREEN</strong>
                    </div>

                    <div>
                        <span>GLOBAL SHADOW QUALITY</span>
                        <strong>LOW</strong>
                    </div>

                    <div>
                        <span>MODEL / TEXTURE</span>
                        <strong>LOW</strong>
                    </div>

                    <div>
                        <span>SHADER DETAIL</span>
                        <strong>LOW</strong>
                    </div>

                    <div>
                        <span>MSAA</span>
                        <strong>2X</strong>
                    </div>

                    <div>
                        <span>V-SYNC</span>
                        <strong>OFF</strong>
                    </div>

                    <div>
                        <span>MOTION BLUR</span>
                        <strong>OFF</strong>
                    </div>

                </div>
            `
        },

        refresh: {
            label: "DISPLAY",
            title: "MONITOR",
            content: `
                <div class="guide-label">DISPLAY</div>

                <h2>MONITOR <span>SETTINGS.</span></h2>

                <p class="guide-intro">
                    Rekabetçi oyun için kullandığım ekran ayarları.
                </p>

                <div class="setting-list">

                    <div>
                        <span>REFRESH RATE</span>
                        <strong>144 Hz</strong>
                    </div>

                    <div>
                        <span>DISPLAY MODE</span>
                        <strong>FULLSCREEN</strong>
                    </div>

                    <div>
                        <span>V-SYNC</span>
                        <strong>OFF</strong>
                    </div>

                    <div>
                        <span>WINDOWS REFRESH RATE</span>
                        <strong>144 Hz</strong>
                    </div>

                    <div>
                        <span>RESOLUTION</span>
                        <strong>1080 × 1080</strong>
                    </div>

                </div>
            `
        },

        hud: {
            label: "CS2 / INTERFACE",
            title: "HUD",
            content: `
                <div class="guide-label">INTERFACE</div>

                <h2>HUD <span>SETTINGS.</span></h2>

                <div class="setting-list">

                    <div>
                        <span>HUD SCALE</span>
                        <strong>0.90</strong>
                    </div>

                    <div>
                        <span>HUD COLOR</span>
                        <strong>RED</strong>
                    </div>

                    <div>
                        <span>RADAR HUD SIZE</span>
                        <strong>1.00</strong>
                    </div>

                    <div>
                        <span>HUD PLAYER COUNT</span>
                        <strong>SHOW</strong>
                    </div>

                    <div>
                        <span>HEALTH / ARMOR</span>
                        <strong>SHOW</strong>
                    </div>

                </div>
            `
        },

        radar: {
            label: "CS2 / RADAR",
            title: "RADAR",
            content: `
                <div class="guide-label">RADAR</div>

                <h2>RADAR <span>SETTINGS.</span></h2>

                <div class="setting-list">

                    <div>
                        <span>RADAR SCALE</span>
                        <strong>0.40</strong>
                    </div>

                    <div>
                        <span>RADAR ROTATE</span>
                        <strong>ON</strong>
                    </div>

                    <div>
                        <span>RADAR HUD SIZE</span>
                        <strong>1.00</strong>
                    </div>

                    <div>
                        <span>RADAR ICON SCALE</span>
                        <strong>0.70</strong>
                    </div>

                    <div>
                        <span>RADAR CENTERING</span>
                        <strong>OFF</strong>
                    </div>

                </div>
            `
        },

        viewmodel: {
            label: "CS2 / WEAPON",
            title: "VIEWMODEL",
            content: `
                <div class="guide-label">WEAPON POSITION</div>

                <h2>VIEWMODEL <span>SETTINGS.</span></h2>

                <p class="guide-intro">
                    Kullandığım viewmodel komutlarını tek seferde kopyala.
                </p>

                <div class="code-box">

                    <code id="viewmodelCode">viewmodel_fov 68
viewmodel_offset_x 2.5
viewmodel_offset_y 2
viewmodel_offset_z -2
viewmodel_presetpos 3</code>

                    <button class="copy-btn" id="copyViewmodel">
                        COPY COMMAND
                    </button>

                </div>

                <div class="steps">

                    <div>
                        <b>01</b>
                        <span>CS2 konsolunu aç.</span>
                    </div>

                    <div>
                        <b>02</b>
                        <span>Komutları konsola yapıştır.</span>
                    </div>

                    <div>
                        <b>03</b>
                        <span>Enter'a bas.</span>
                    </div>

                </div>
            `
        },

        nvidia: {
            label: "NVIDIA / COLORS",
            title: "NVIDIA",
            content: `
                <div class="guide-label">NVIDIA COLORS</div>

                <h2>NVIDIA <span>COLORS.</span></h2>

                <p class="guide-intro">
                    NVIDIA renk ayarlarını adım adım yap.
                </p>

                <div class="steps">

                    <div>
                        <b>01</b>
                        <span>Masaüstünde sağ tıkla.</span>
                    </div>

                    <div>
                        <b>02</b>
                        <span>NVIDIA Denetim Masası'nı aç.</span>
                    </div>

                    <div>
                        <b>03</b>
                        <span>Masaüstü renk ayarlarını değiştir bölümüne gir.</span>
                    </div>

                    <div>
                        <b>04</b>
                        <span>Renk ayarlarını aşağıdaki değerlere getir.</span>
                    </div>

                </div>

                <div class="setting-list">

                    <div>
                        <span>DIGITAL VIBRANCE</span>
                        <strong>70%</strong>
                    </div>

                    <div>
                        <span>BRIGHTNESS</span>
                        <strong>55%</strong>
                    </div>

                    <div>
                        <span>CONTRAST</span>
                        <strong>55%</strong>
                    </div>

                    <div>
                        <span>GAMMA</span>
                        <strong>1.00</strong>
                    </div>

                </div>
            `
        },

        "nvidia-fps": {
            label: "FPS BOOST / NVIDIA",
            title: "NVIDIA FPS",
            content: `
                <div class="guide-label">PERFORMANCE</div>

                <h2>NVIDIA <span>FPS BOOST.</span></h2>

                <p class="guide-intro">
                    CS2 için NVIDIA Denetim Masası performans ayarları.
                </p>

                <div class="steps">

                    <div>
                        <b>01</b>
                        <span>Masaüstünde sağ tıkla.</span>
                    </div>

                    <div>
                        <b>02</b>
                        <span>NVIDIA Denetim Masası'nı aç.</span>
                    </div>

                    <div>
                        <b>03</b>
                        <span>3D ayarlarının yönetilmesi bölümüne gir.</span>
                    </div>

                    <div>
                        <b>04</b>
                        <span>Program Ayarları sekmesini aç.</span>
                    </div>

                    <div>
                        <b>05</b>
                        <span>CS2'yi seç.</span>
                    </div>

                    <div>
                        <b>06</b>
                        <span>Güç yönetimi modunu maksimum performansa getir.</span>
                    </div>

                </div>

                <div class="setting-list">

                    <div>
                        <span>POWER MANAGEMENT</span>
                        <strong>MAX PERFORMANCE</strong>
                    </div>

                    <div>
                        <span>LOW LATENCY MODE</span>
                        <strong>OFF</strong>
                    </div>

                    <div>
                        <span>TEXTURE FILTERING</span>
                        <strong>PERFORMANCE</strong>
                    </div>

                </div>
            `
        },

        "windows-fps": {
            label: "FPS BOOST / WINDOWS",
            title: "WINDOWS FPS",
            content: `
                <div class="guide-label">SYSTEM</div>

                <h2>WINDOWS <span>BOOST.</span></h2>

                <p class="guide-intro">
                    Windows üzerinden performans için yapılabilecek ayarlar.
                </p>

                <div class="steps">

                    <div>
                        <b>01</b>
                        <span>Windows Ayarları'nı aç.</span>
                    </div>

                    <div>
                        <b>02</b>
                        <span>Oyun → Oyun Modu bölümüne gir.</span>
                    </div>

                    <div>
                        <b>03</b>
                        <span>Oyun Modu'nu aç.</span>
                    </div>

                    <div>
                        <b>04</b>
                        <span>Sistem → Ekran → Grafikler bölümüne gir.</span>
                    </div>

                    <div>
                        <b>05</b>
                        <span>CS2'yi ekle.</span>
                    </div>

                    <div>
                        <b>06</b>
                        <span>Grafik tercihini yüksek performans yap.</span>
                    </div>

                </div>
            `
        },

        "cs2-fps": {
            label: "FPS BOOST / CS2",
            title: "CS2 BOOST",
            content: `
                <div class="guide-label">GAME PERFORMANCE</div>

                <h2>CS2 <span>OPTIMIZATION.</span></h2>

                <p class="guide-intro">
                    CS2 içerisinde FPS ve akıcılık için kullandığım temel ayarlar.
                </p>

                <div class="steps">

                    <div>
                        <b>01</b>
                        <span>Steam → Kütüphane → CS2 → Özellikler'e gir.</span>
                    </div>

                    <div>
                        <b>02</b>
                        <span>Gereksiz başlatma komutları kullanma.</span>
                    </div>

                    <div>
                        <b>03</b>
                        <span>V-Sync'i kapat.</span>
                    </div>

                    <div>
                        <b>04</b>
                        <span>Gereksiz arka plan uygulamalarını kapat.</span>
                    </div>

                    <div>
                        <b>05</b>
                        <span>Oyunu tam ekran çalıştır.</span>
                    </div>

                    <div>
                        <b>06</b>
                        <span>Ekran kartı sürücüsünü güncel tut.</span>
                    </div>

                </div>
            `
        }

    };


    /* =========================================
       MODAL AÇ
    ========================================= */

    function openGuide(type) {

        if (!modal || !guideContent) {
            console.error("Guide modal HTML bulunamadı.");
            return;
        }

        const guide = guides[type];

        if (!guide) {
            console.error("Guide bulunamadı:", type);
            return;
        }

        guideContent.innerHTML = `
            <div class="modal-label">
                ${guide.label}
            </div>

            ${guide.content}
        `;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

        bindCopyButtons();

    }


    /* =========================================
       KARTLAR
    ========================================= */

    const cards = document.querySelectorAll(".guide-card");

    cards.forEach(card => {

        card.addEventListener("click", function (event) {

            if (event.target.closest("button")) {
                return;
            }

            const type = this.dataset.guide;

            openGuide(type);

        });

    });


    /* =========================================
       COPY BUTTONS
    ========================================= */

    function copyText(text, button) {

        navigator.clipboard.writeText(text)
            .then(() => {

                const original = button.innerText;

                button.innerText = "COPIED ✓";

                button.classList.add("copied");

                setTimeout(() => {

                    button.innerText = original;
                    button.classList.remove("copied");

                }, 1800);

            })
            .catch(() => {

                const textarea = document.createElement("textarea");

                textarea.value = text;

                document.body.appendChild(textarea);

                textarea.select();

                document.execCommand("copy");

                textarea.remove();

                button.innerText = "COPIED ✓";

                setTimeout(() => {

                    button.innerText = "COPY";

                }, 1800);

            });

    }


    function bindCopyButtons() {

        const crosshairButton =
            document.getElementById("copyCrosshair");

        const crosshairCode =
            document.getElementById("crosshairCode");

        if (crosshairButton && crosshairCode) {

            crosshairButton.addEventListener("click", function () {

                copyText(
                    crosshairCode.innerText.trim(),
                    this
                );

            });

        }


        const viewmodelButton =
            document.getElementById("copyViewmodel");

        const viewmodelCode =
            document.getElementById("viewmodelCode");

        if (viewmodelButton && viewmodelCode) {

            viewmodelButton.addEventListener("click", function () {

                copyText(
                    viewmodelCode.innerText.trim(),
                    this
                );

            });

        }

    }


    /* =========================================
       MODAL KAPAT
    ========================================= */

    function closeGuide() {

        if (!modal) return;

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeGuide
        );

    }


    if (modalBg) {

        modalBg.addEventListener(
            "click",
            closeGuide
        );

    }


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeGuide();

        }

    });


    /* =========================================
       MOBİL MENÜ
    ========================================= */

    if (mobileBtn && mobileNav) {

        mobileBtn.addEventListener("click", () => {

            mobileNav.classList.toggle("active");

            mobileBtn.classList.toggle("active");

        });

    }


    if (mobileNav) {

        mobileNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mobileNav.classList.remove("active");

                    if (mobileBtn) {
                        mobileBtn.classList.remove("active");
                    }

                });

            });

    }


    /* =========================================
       DİL BUTONU
    ========================================= */

    let english = false;

    if (languageBtn) {

        languageBtn.addEventListener("click", () => {

            english = !english;

            if (english) {

                document.documentElement.lang = "en";

                languageBtn.innerText = "EN / TR";

                translateToEnglish();

            } else {

                document.documentElement.lang = "tr";

                languageBtn.innerText = "TR / EN";

                location.reload();

            }

        });

    }


    function translateToEnglish() {

        const translations = {

            "CS2 AYARLARI": "CS2 SETTINGS",
            "FPS BOOST": "FPS BOOST",
            "SOSYAL": "SOCIAL",
            "HAKKIMDA": "ABOUT",
            "İLETİŞİM": "CONTACT",

            "AYARLARI KEŞFET": "EXPLORE SETTINGS",
            "YAYINA GİT": "WATCH LIVE",

            "CS2 OYUNCUSU": "CS2 PLAYER",
            "YAYINCI": "STREAMER",
            "İÇERİK ÜRETİCİSİ": "CONTENT CREATOR"

        };

        document
            .querySelectorAll(
                ".nav a, .btn-main, .btn-outline"
            )
            .forEach(element => {

                const text = element.innerText.trim();

                if (translations[text]) {

                    element.innerText =
                        translations[text];

                }

            });

    }


    /* =========================================
       SCROLL ANIMATION
    ========================================= */

    const animatedElements =
        document.querySelectorAll(
            ".big-card, .boost-card, .social-card, .quick-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );


        animatedElements.forEach(element => {

            observer.observe(element);

        });

    } else {

        animatedElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */

    const header =
        document.querySelector(".header");


    if (header) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 40) {

                    header.classList.add(
                        "scrolled"
                    );

                } else {

                    header.classList.remove(
                        "scrolled"
                    );

                }

            },
            {
                passive: true
            }
        );

    }


    /* =========================================
       KICK LIVE STATUS
    ========================================= */

    const kickLinks =
        document.querySelectorAll(
            'a[href*="kick.com/xannylive"]'
        );


    kickLinks.forEach(link => {

        link.addEventListener("mouseenter", () => {

            link.classList.add("kick-hover");

        });

        link.addEventListener("mouseleave", () => {

            link.classList.remove("kick-hover");

        });

    });


    /* =========================================
       INITIAL STATE
    ========================================= */

    document.documentElement.classList.add(
        "js-loaded"
    );

    console.log(
        "%c XANNYLIVE SYSTEM ONLINE ",
        "background:#d90400;color:white;padding:8px;font-weight:bold;"
    );

});
