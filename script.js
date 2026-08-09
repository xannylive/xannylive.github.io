```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTLER
    ========================= */

    const modal = document.getElementById("guideModal");
    const modalBg = document.getElementById("modalBg");
    const modalClose = document.getElementById("modalClose");
    const guideContent = document.getElementById("guideContent");

    const cards = document.querySelectorAll(".guide-card");

    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");

    const languageBtn = document.getElementById("languageBtn");


    /* =========================
       GUIDE DATA
    ========================= */

    const guides = {

        crosshair: {
            label: "CS2 / AIM",
            title: "CROSSHAIR",
            content: `
                <div class="modal-label">XANNY CROSSHAIR</div>

                <h2>CROSSHAIR <span>CODE.</span></h2>

                <p>
                    Aşağıdaki kodu direkt kopyalayıp CS2 konsoluna
                    yapıştırabilirsin.
                </p>

                <div class="code-box">
                    <code id="crosshairCode">
CSGO-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </code>

                    <button id="copyCrosshair">
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
                        <span>Konsolu aç.</span>
                    </div>

                    <div>
                        <b>03</b>
                        <span>Kodu yapıştır ve Enter'a bas.</span>
                    </div>
                </div>
            `
        },

        mouse: {
            label: "CS2 / AIM",
            title: "MOUSE",
            content: `
                <div class="modal-label">XANNY AIM</div>

                <h2>MOUSE <span>SETTINGS.</span></h2>

                <div class="setting-list">
                    <div>
                        <span>DPI</span>
                        <strong>800</strong>
                    </div>

                    <div>
                        <span>SENSITIVITY</span>
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
                </div>
            `
        },

        graphics: {
            label: "CS2 / DISPLAY",
            title: "GRAPHICS",
            content: `
                <div class="modal-label">CS2 PERFORMANCE</div>

                <h2>GRAPHICS <span>SETTINGS.</span></h2>

                <div class="setting-list">
                    <div>
                        <span>DISPLAY MODE</span>
                        <strong>FULLSCREEN</strong>
                    </div>

                    <div>
                        <span>SHADOW QUALITY</span>
                        <strong>LOW</strong>
                    </div>

                    <div>
                        <span>MODEL / TEXTURE</span>
                        <strong>LOW</strong>
                    </div>

                    <div>
                        <span>SHADER</span>
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
                </div>
            `
        },

        refresh: {
            label: "DISPLAY",
            title: "MONITOR",
            content: `
                <div class="modal-label">DISPLAY</div>

                <h2>MONITOR <span>SETTINGS.</span></h2>

                <div class="setting-list">
                    <div>
                        <span>REFRESH RATE</span>
                        <strong>144 Hz</strong>
                    </div>

                    <div>
                        <span>MODE</span>
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
                </div>
            `
        },

        hud: {
            label: "CS2 / INTERFACE",
            title: "HUD",
            content: `
                <div class="modal-label">INTERFACE</div>

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
                </div>
            `
        },

        radar: {
            label: "CS2 / RADAR",
            title: "RADAR",
            content: `
                <div class="modal-label">RADAR</div>

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
                        <span>HUD SIZE</span>
                        <strong>1.00</strong>
                    </div>

                    <div>
                        <span>ICON SCALE</span>
                        <strong>0.70</strong>
                    </div>
                </div>
            `
        },

        viewmodel: {
            label: "CS2 / WEAPON",
            title: "VIEWMODEL",
            content: `
                <div class="modal-label">WEAPON POSITION</div>

                <h2>VIEWMODEL <span>SETTINGS.</span></h2>

                <div class="code-box">
                    <code>
viewmodel_fov 68
viewmodel_offset_x 2.5
viewmodel_offset_y 2
viewmodel_offset_z -2
viewmodel_presetpos 3
                    </code>

                    <button onclick="copyText(this, 'viewmodel_fov 68; viewmodel_offset_x 2.5; viewmodel_offset_y 2; viewmodel_offset_z -2; viewmodel_presetpos 3')">
                        COPY COMMAND
                    </button>
                </div>
            `
        },

        nvidia: {
            label: "NVIDIA / COLORS",
            title: "NVIDIA",
            content: `
                <div class="modal-label">NVIDIA COLORS</div>

                <h2>NVIDIA <span>COLORS.</span></h2>

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
                </div>

                <div class="steps">
                    <div>
                        <b>01</b>
                        <span>NVIDIA Denetim Masası'nı aç.</span>
                    </div>

                    <div>
                        <b>02</b>
                        <span>Masaüstü renk ayarlarını değiştir.</span>
                    </div>

                    <div>
                        <b>03</b>
                        <span>Dijital canlılığı %70 yap.</span>
                    </div>
                </div>
            `
        },

        "nvidia-fps": {
            label: "FPS BOOST / NVIDIA",
            title: "NVIDIA FPS",
            content: `
                <div class="modal-label">PERFORMANCE</div>

                <h2>NVIDIA <span>FPS BOOST.</span></h2>

                <div class="steps">
                    <div>
                        <b>01</b>
                        <span>NVIDIA Denetim Masası'nı aç.</span>
                    </div>

                    <div>
                        <b>02</b>
                        <span>3D ayarlarının yönetilmesine gir.</span>
                    </div>

                    <div>
                        <b>03</b>
                        <span>CS2'yi program ayarlarına ekle.</span>
                    </div>

                    <div>
                        <b>04</b>
                        <span>Güç yönetimini maksimum performans yap.</span>
                    </div>
                </div>
            `
        },

        "windows-fps": {
            label: "FPS BOOST / WINDOWS",
            title: "WINDOWS FPS",
            content: `
                <div class="modal-label">SYSTEM</div>

                <h2>WINDOWS <span>BOOST.</span></h2>

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
                        <span>Grafik ayarlarından CS2'yi seç.</span>
                    </div>

                    <div>
                        <b>05</b>
                        <span>Yüksek performansı seç.</span>
                    </div>
                </div>
            `
        },

        "cs2-fps": {
            label: "FPS BOOST / CS2",
            title: "CS2 BOOST",
            content: `
                <div class="modal-label">GAME PERFORMANCE</div>

                <h2>CS2 <span>OPTIMIZATION.</span></h2>

                <div class="steps">
                    <div>
                        <b>01</b>
                        <span>CS2'yi tam ekran çalıştır.</span>
                    </div>

                    <div>
                        <b>02</b>
                        <span>V-Sync'i kapat.</span>
                    </div>

                    <div>
                        <b>03</b>
                        <span>Gereksiz arka plan uygulamalarını kapat.</span>
                    </div>

                    <div>
                        <b>04</b>
                        <span>Grafik ayarlarını sistemine göre optimize et.</span>
                    </div>
                </div>
            `
        }

    };


    /* =========================
       MODAL AÇ
    ========================= */

    function openGuide(type) {

        const guide = guides[type];

        if (!guide || !modal || !guideContent) return;

        guideContent.innerHTML = `
            <div class="modal-label">
                ${guide.label}
            </div>

            <h2>
                ${guide.title}
            </h2>

            ${guide.content}
        `;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";


        const copyButton =
            document.getElementById("copyCrosshair");

        if (copyButton) {

            copyButton.addEventListener("click", () => {

                const code =
                    document
                        .getElementById("crosshairCode")
                        .innerText
                        .trim();

                navigator.clipboard.writeText(code);

                copyButton.innerText = "COPIED ✓";

                setTimeout(() => {
                    copyButton.innerText = "COPY CODE";
                }, 1500);

            });

        }

    }


    /* =========================
       KARTLAR
    ========================= */

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const type =
                card.dataset.guide;

            openGuide(type);

        });

    });


    /* =========================
       MODAL KAPAT
    ========================= */

    function closeGuide() {

        if (!modal) return;

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

    if (modalClose) {
        modalClose.addEventListener("click", closeGuide);
    }

    if (modalBg) {
        modalBg.addEventListener("click", closeGuide);
    }


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeGuide();
        }

    });


    /* =========================
       MOBİL MENÜ
    ========================= */

    if (mobileBtn && mobileNav) {

        mobileBtn.addEventListener("click", () => {

            mobileNav.classList.toggle("active");

        });

    }


    document
        .querySelectorAll(".mobile-nav a")
        .forEach(link => {

            link.addEventListener("click", () => {

                if (mobileNav) {
                    mobileNav.classList.remove("active");
                }

            });

        });


    /* =========================
       COPY
    ========================= */

    window.copyText = function(button, text) {

        navigator.clipboard.writeText(text);

        const oldText = button.innerText;

        button.innerText = "COPIED ✓";

        setTimeout(() => {

            button.innerText = oldText;

        }, 1500);

    };


    /* =========================
       LANGUAGE
    ========================= */

    if (languageBtn) {

        languageBtn.addEventListener("click", () => {

            languageBtn.innerText =
                languageBtn.innerText === "TR / EN"
                    ? "EN / TR"
                    : "TR / EN";

        });

    }


    /* =========================
       SCROLL ANIMATION
    ========================= */

    const animatedElements =
        document.querySelectorAll(
            ".big-card, .boost-card, .social-card, .quick-card"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

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

});
```
