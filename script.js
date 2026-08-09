document.addEventListener("DOMContentLoaded", () => {

```
const modal = document.getElementById("guideModal");
const modalBg = document.getElementById("modalBg");
const modalClose = document.getElementById("modalClose");
const guideContent = document.getElementById("guideContent");
const cards = document.querySelectorAll(".guide-card");

const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

/* =========================
   CS2 AYARLARI
========================= */

const guides = {

    crosshair: {
        label: "CS2 / AIM",
        title: "CROSSHAIR",
        text: "Kullandığım crosshair kodunu aşağıdan direkt kopyalayabilirsin.",
        content: `
            <div class="guide-label">XANNY CROSSHAIR</div>
            <h2>CROSSHAIR <span>CODE.</span></h2>

            <p>
                Kodu kopyala ve CS2 konsoluna yapıştır.
            </p>

            <div class="code-box">
                <code id="crosshairCode">
```

CSGO-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </code>

```
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
        text: "Mouse hassasiyetim ve Windows mouse ayarlarım.",
        content: `
            <div class="guide-label">XANNY AIM</div>
            <h2>MOUSE <span>SETTINGS.</span></h2>

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

            </div>

            <div class="guide-note">
                Windows'ta mouse acceleration kapalı olmalı.
            </div>
        `
    },

    graphics: {
        label: "CS2 / DISPLAY",
        title: "GRAPHICS",
        content: `
            <div class="guide-label">CS2 PERFORMANCE</div>
            <h2>GRAPHICS <span>SETTINGS.</span></h2>

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
            <div class="guide-label">DISPLAY</div>
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

            </div>
        `
    },

    viewmodel: {
        label: "CS2 / WEAPON",
        title: "VIEWMODEL",
        content: `
            <div class="guide-label">WEAPON POSITION</div>
            <h2>VIEWMODEL <span>SETTINGS.</span></h2>

            <div class="code-box">
                <code>
```

viewmodel_fov 68
viewmodel_offset_x 2.5
viewmodel_offset_y 2
viewmodel_offset_z -2
viewmodel_presetpos 3 </code>

```
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
            <div class="guide-label">NVIDIA COLORS</div>
            <h2>NVIDIA <span>COLORS.</span></h2>

            <p class="guide-intro">
                NVIDIA renk ayarlarını yapmak için aşağıdaki yolu izle.
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
                    <span>Sol menüden "Masaüstü renk ayarlarını değiştir" bölümüne gir.</span>
                </div>

                <div>
                    <b>04</b>
                    <span>Parlaklık, kontrast ve dijital canlılık değerlerini ayarla.</span>
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

            </div>
        `
    },

    "nvidia-fps": {
        label: "FPS BOOST / NVIDIA",
        title: "NVIDIA FPS",
        content: `
            <div class="guide-label">PERFORMANCE</div>
            <h2>NVIDIA <span>FPS BOOST.</span></h2>

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
                    <span>"3D ayarlarının yönetilmesi" bölümüne gir.</span>
                </div>

                <div>
                    <b>04</b>
                    <span>CS2'yi program ayarlarına ekle.</span>
                </div>

                <div>
                    <b>05</b>
                    <span>Güç yönetimi modunu maksimum performansa getir.</span>
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
                    <span>Ayarlar → Sistem → Ekran → Grafikler bölümüne gir.</span>
                </div>

                <div>
                    <b>05</b>
                    <span>CS2'yi ekleyip yüksek performansı seç.</span>
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

            <div class="steps">

                <div>
                    <b>01</b>
                    <span>Steam → Kütüphane → CS2 → Özellikler'e gir.</span>
                </div>

                <div>
                    <b>02</b>
                    <span>Başlatma seçeneklerini gereksiz komutlarla doldurma.</span>
                </div>

                <div>
                    <b>03</b>
                    <span>Oyunda V-Sync'i kapat.</span>
                </div>

                <div>
                    <b>04</b>
                    <span>Gereksiz arka plan uygulamalarını kapat.</span>
                </div>

                <div>
                    <b>05</b>
                    <span>Oyunu tam ekran çalıştır.</span>
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

    if (!guide) return;

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

    setTimeout(() => {

        const copyButton =
            document.getElementById("copyCrosshair");

        if (copyButton) {

            copyButton.addEventListener("click", () => {

                const code =
                    document.getElementById("crosshairCode")
                    .innerText
                    .trim();

                navigator.clipboard.writeText(code);

                copyButton.innerText = "COPIED ✓";

                setTimeout(() => {
                    copyButton.innerText = "COPY CODE";
                }, 1800);

            });

        }

    }, 50);
}


/* =========================
   KARTLAR
========================= */

cards.forEach(card => {

    card.addEventListener("click", () => {

        const type =
            card.getAttribute("data-guide");

        openGuide(type);

    });

});


/* =========================
   MODAL KAPAT
========================= */

function closeGuide() {

    modal.classList.remove("active");
    document.body.style.overflow = "";

}

modalClose.addEventListener("click", closeGuide);

modalBg.addEventListener("click", closeGuide);

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeGuide();
    }

});


/* =========================
   MOBİL MENÜ
========================= */

if (mobileBtn) {

    mobileBtn.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

    });

}


document.querySelectorAll(".mobile-nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");

        });

    });


/* =========================
   GLOBAL COPY
========================= */

window.copyText = function(button, text) {

    navigator.clipboard.writeText(text);

    const oldText = button.innerText;

    button.innerText = "COPIED ✓";

    setTimeout(() => {

        button.innerText = oldText;

    }, 1800);

};


/* =========================
   LANGUAGE
========================= */

const languageBtn =
    document.getElementById("languageBtn");

let english = false;

if (languageBtn) {

    languageBtn.addEventListener("click", () => {

        english = !english;

        if (english) {

            languageBtn.innerText = "EN / TR";

            document.documentElement.lang = "en";

            alert(
                "English version is being prepared. The full site translation will be added next."
            );

        } else {

            languageBtn.innerText = "TR / EN";

            document.documentElement.lang = "tr";

        }

    });

}


/* =========================
   SCROLL ANIMATION
========================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.08
        }
    );


document
    .querySelectorAll(
        ".big-card, .boost-card, .social-card, .quick-card"
    )
    .forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            `opacity .6s ease ${index * 0.04}s,
             transform .6s ease ${index * 0.04}s`;

        observer.observe(element);

    });
```

});

