document.addEventListener("DOMContentLoaded", () => {

```
const modal = document.getElementById("guideModal");
const modalBg = document.getElementById("modalBg");
const modalClose = document.getElementById("modalClose");
const guideContent = document.getElementById("guideContent");
const cards = document.querySelectorAll(".guide-card");

const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");
const languageBtn = document.getElementById("languageBtn");


/* =========================
   CS2 GUIDE DATA
========================= */

const guides = {

    crosshair: {
        label: "CS2 / AIM",
        title: "CROSSHAIR",
        content: `
            <div class="guide-label">XANNY CROSSHAIR</div>

            <h2>CROSSHAIR <span>CODE.</span></h2>

            <p>
                Kullandığım crosshair kodunu aşağıdan
                tek tıkla kopyalayabilirsin.
            </p>

            <div class="code-box">

                <code id="crosshairCode">CSGO-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</code>

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
                    <span>Kodu konsola yapıştır ve Enter'a bas.</span>
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
                    <span>MOUSE ACCELERATION</span>
                    <strong>OFF</strong>
                </div>

            </div>

            <div class="guide-note">
                Windows mouse acceleration kapalı kullanılmalıdır.
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
                    <span>PLAYER COUNT</span>
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

                <code id="viewmodelCode">viewmodel_fov 68
```

viewmodel_offset_x 2.5
viewmodel_offset_y 2
viewmodel_offset_z -2
viewmodel_presetpos 3</code>

```
                <button id="copyViewmodel">
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
                    <span>"Masaüstü renk ayarlarını değiştir" bölümüne gir.</span>
                </div>

                <div>
                    <b>04</b>
                    <span>Dijital canlılık ayarını yükselt.</span>
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
                    <span>Sistem → Ekran → Grafikler bölümüne gir.</span>
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
                    <span>Oyunda V-Sync'i kapat.</span>
                </div>

                <div>
                    <b>03</b>
                    <span>Oyunu tam ekran çalıştır.</span>
                </div>

                <div>
                    <b>04</b>
                    <span>Gereksiz arka plan uygulamalarını kapat.</span>
                </div>

            </div>
        `
    }

};


/* =========================
   OPEN GUIDE
========================= */

function openGuide(type) {

    const guide = guides[type];

    if (!guide || !modal || !guideContent) {
        return;
    }

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


    const copyCrosshair =
        document.getElementById("copyCrosshair");

    if (copyCrosshair) {

        copyCrosshair.addEventListener("click", () => {

            const code =
                document.getElementById("crosshairCode")
                .textContent
                .trim();

            copyToClipboard(
                code,
                copyCrosshair,
                "COPY CODE"
            );

        });

    }


    const copyViewmodel =
        document.getElementById("copyViewmodel");

    if (copyViewmodel) {

        copyViewmodel.addEventListener("click", () => {

            const code =
                document.getElementById("viewmodelCode")
                .textContent
                .trim();

            copyToClipboard(
                code,
                copyViewmodel,
                "COPY COMMAND"
            );

        });

    }

}


/* =========================
   COPY FUNCTION
========================= */

function copyToClipboard(text, button, originalText) {

    navigator.clipboard.writeText(text)
        .then(() => {

            button.textContent = "COPIED ✓";

            setTimeout(() => {
                button.textContent = originalText;
            }, 1800);

        })
        .catch(() => {

            const textarea =
                document.createElement("textarea");

            textarea.value = text;

            document.body.appendChild(textarea);

            textarea.select();

            document.execCommand("copy");

            textarea.remove();

            button.textContent = "COPIED ✓";

            setTimeout(() => {
                button.textContent = originalText;
            }, 1800);

        });

}


/* =========================
   CARD CLICK
========================= */

cards.forEach(card => {

    card.addEventListener("click", () => {

        const type =
            card.dataset.guide;

        openGuide(type);

    });

});


/* =========================
   CLOSE MODAL
========================= */

function closeGuide() {

    if (!modal) {
        return;
    }

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


/* =========================
   MOBILE MENU
========================= */

if (mobileBtn && mobileNav) {

    mobileBtn.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

        mobileBtn.classList.toggle("active");

    });

}


document
    .querySelectorAll(".mobile-nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            if (mobileNav) {
                mobileNav.classList.remove("active");
            }

            if (mobileBtn) {
                mobileBtn.classList.remove("active");
            }

        });

    });


/* =========================
   LANGUAGE BUTTON
========================= */

let english = false;


if (languageBtn) {

    languageBtn.addEventListener("click", () => {

        english = !english;

        if (english) {

            languageBtn.textContent = "EN / TR";

            document.documentElement.lang = "en";

            languageBtn.title =
                "English version";

        } else {

            languageBtn.textContent = "TR / EN";

            document.documentElement.lang = "tr";

            languageBtn.title =
                "Türkçe versiyon";

        }

    });

}


/* =========================
   CARD SCROLL ANIMATION
========================= */

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "is-visible"
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


    document
        .querySelectorAll(
            ".big-card, .boost-card, .social-card, .quick-card"
        )
        .forEach(element => {

            observer.observe(element);

        });

}
```

});
