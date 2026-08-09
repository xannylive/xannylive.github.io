```js
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTLER
    ========================================= */

    const modal = document.getElementById("guideModal");
    const modalBg = document.getElementById("modalBg");
    const modalClose = document.getElementById("modalClose");
    const guideContent = document.getElementById("guideContent");

    /* =========================================
       YARDIMCI
    ========================================= */

    function setting(name, value) {
        return `
            <div class="setting-row">
                <span>${name}</span>
                <strong>${value}</strong>
            </div>
        `;
    }

    function copyText(text, button) {

        navigator.clipboard.writeText(text).then(() => {

            const old = button.innerText;

            button.innerText = "COPIED ✓";

            setTimeout(() => {
                button.innerText = old;
            }, 1500);

        }).catch(() => {

            const area = document.createElement("textarea");

            area.value = text;
            document.body.appendChild(area);
            area.select();
            document.execCommand("copy");
            area.remove();

            button.innerText = "COPIED ✓";

            setTimeout(() => {
                button.innerText = "COPY CODE";
            }, 1500);

        });
    }

    /* =========================================
       GUIDE İÇERİKLERİ
    ========================================= */

    const guides = {

        crosshair: () => `
            <div class="modal-label">CS2 / AIM</div>

            <h2>CROSSHAIR <span>CODE.</span></h2>

            <p>
                Crosshair kodunu direkt kopyalayıp
                CS2'de kullanabilirsin.
            </p>

            <div class="code-box">

                <code id="crosshairCode">
                    ${XANNY_CONFIG.crosshair.code}
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
                    <span>Ayarlar → Oyun → Crosshair bölümüne gir.</span>
                </div>

                <div>
                    <b>03</b>
                    <span>Share or Import bölümüne gir.</span>
                </div>

                <div>
                    <b>04</b>
                    <span>Kodu yapıştır ve içe aktar.</span>
                </div>

            </div>
        `,

        mouse: () => `
            <div class="modal-label">CS2 / AIM</div>

            <h2>MOUSE <span>SETTINGS.</span></h2>

            <div class="setting-list">

                ${setting("DPI", XANNY_CONFIG.mouse.dpi)}

                ${setting(
                    "CS2 SENSITIVITY",
                    XANNY_CONFIG.mouse.sensitivity
                )}

                ${setting(
                    "ZOOM SENSITIVITY",
                    XANNY_CONFIG.mouse.zoomSensitivity
                )}

                ${setting(
                    "POLLING RATE",
                    XANNY_CONFIG.mouse.pollingRate
                )}

            </div>

            <div class="guide-note">
                Windows mouse acceleration kapalı olmalı.
            </div>
        `,

        graphics: () => `
            <div class="modal-label">CS2 / DISPLAY</div>

            <h2>GRAPHICS <span>SETTINGS.</span></h2>

            <div class="setting-list">

                ${setting(
                    "DISPLAY MODE",
                    XANNY_CONFIG.graphics.displayMode
                )}

                ${setting(
                    "GLOBAL SHADOW QUALITY",
                    XANNY_CONFIG.graphics.shadowQuality
                )}

                ${setting(
                    "MODEL / TEXTURE",
                    XANNY_CONFIG.graphics.modelTexture
                )}

                ${setting(
                    "SHADER",
                    XANNY_CONFIG.graphics.shader
                )}

                ${setting(
                    "MSAA",
                    XANNY_CONFIG.graphics.msaa
                )}

                ${setting(
                    "V-SYNC",
                    XANNY_CONFIG.graphics.vsync
                )}

            </div>
        `,

        refresh: () => `
            <div class="modal-label">DISPLAY</div>

            <h2>MONITOR <span>SETTINGS.</span></h2>

            <div class="setting-list">

                ${setting(
                    "REFRESH RATE",
                    XANNY_CONFIG.monitor.refreshRate
                )}

                ${setting(
                    "RESOLUTION",
                    XANNY_CONFIG.monitor.resolution
                )}

                ${setting(
                    "MODE",
                    XANNY_CONFIG.monitor.mode
                )}

                ${setting(
                    "V-SYNC",
                    XANNY_CONFIG.monitor.vsync
                )}

            </div>
        `,

        hud: () => `
            <div class="modal-label">CS2 / INTERFACE</div>

            <h2>HUD <span>SETTINGS.</span></h2>

            <div class="setting-list">

                ${setting(
                    "HUD SCALE",
                    XANNY_CONFIG.hud.scale
                )}

                ${setting(
                    "HUD COLOR",
                    XANNY_CONFIG.hud.color
                )}

                ${setting(
                    "RADAR HUD SIZE",
                    XANNY_CONFIG.hud.radarSize
                )}

                ${setting(
                    "PLAYER COUNT",
                    XANNY_CONFIG.hud.playerCount
                )}

            </div>
        `,

        radar: () => `
            <div class="modal-label">CS2 / RADAR</div>

            <h2>RADAR <span>SETTINGS.</span></h2>

            <div class="setting-list">

                ${setting(
                    "RADAR SCALE",
                    XANNY_CONFIG.radar.scale
                )}

                ${setting(
                    "RADAR ROTATE",
                    XANNY_CONFIG.radar.rotate
                )}

                ${setting(
                    "RADAR HUD SIZE",
                    XANNY_CONFIG.radar.hudSize
                )}

                ${setting(
                    "RADAR ICON SCALE",
                    XANNY_CONFIG.radar.iconScale
                )}

            </div>
        `,

        viewmodel: () => {

            const commands =
`viewmodel_fov ${XANNY_CONFIG.viewmodel.fov}
viewmodel_offset_x ${XANNY_CONFIG.viewmodel.offsetX}
viewmodel_offset_y ${XANNY_CONFIG.viewmodel.offsetY}
viewmodel_offset_z ${XANNY_CONFIG.viewmodel.offsetZ}
viewmodel_presetpos ${XANNY_CONFIG.viewmodel.preset}`;

            return `
                <div class="modal-label">CS2 / WEAPON</div>

                <h2>VIEWMODEL <span>SETTINGS.</span></h2>

                <div class="code-box">

                    <code>${commands}</code>

                    <button
                        class="copy-command"
                        data-copy="${commands}">
                        COPY COMMAND
                    </button>

                </div>
            `;
        },

        nvidia: () => `
            <div class="modal-label">NVIDIA / COLORS</div>

            <h2>NVIDIA <span>COLORS.</span></h2>

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

            </div>

            <div class="setting-list">

                ${setting(
                    "DIGITAL VIBRANCE",
                    XANNY_CONFIG.nvidia.digitalVibrance
                )}

                ${setting(
                    "BRIGHTNESS",
                    XANNY_CONFIG.nvidia.brightness
                )}

                ${setting(
                    "CONTRAST",
                    XANNY_CONFIG.nvidia.contrast
                )}

            </div>
        `,

        "nvidia-fps": () => `
            <div class="modal-label">FPS BOOST / NVIDIA</div>

            <h2>NVIDIA <span>FPS BOOST.</span></h2>

            <div class="steps">

                <div>
                    <b>01</b>
                    <span>NVIDIA Denetim Masası'nı aç.</span>
                </div>

                <div>
                    <b>02</b>
                    <span>3D ayarlarının yönetilmesi bölümüne gir.</span>
                </div>

                <div>
                    <b>03</b>
                    <span>CS2'yi program ayarlarına ekle.</span>
                </div>

                <div>
                    <b>04</b>
                    <span>Güç yönetimi modunu maksimum performansa getir.</span>
                </div>

            </div>
        `,

        "windows-fps": () => `
            <div class="modal-label">FPS BOOST / WINDOWS</div>

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

            </div>
        `,

        "cs2-fps": () => `
            <div class="modal-label">FPS BOOST / CS2</div>

            <h2>CS2 <span>OPTIMIZATION.</span></h2>

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

            </div>
        `
    };

    /* =========================================
       MODAL AÇ
    ========================================= */

    function openGuide(type) {

        if (!modal || !guideContent) return;

        if (!guides[type]) {
            console.warn("Guide bulunamadı:", type);
            return;
        }

        guideContent.innerHTML = guides[type]();

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

        /* CROSSHAIR COPY */

        const crosshairButton =
            document.getElementById("copyCrosshair");

        if (crosshairButton) {

            crosshairButton.addEventListener("click", () => {

                copyText(
                    XANNY_CONFIG.crosshair.code,
                    crosshairButton
                );

            });

        }

        /* NORMAL COMMAND COPY */

        document
            .querySelectorAll(".copy-command")
            .forEach(button => {

                button.addEventListener("click", () => {

                    copyText(
                        button.dataset.copy,
                        button
                    );

                });

            });
    }

    /* =========================================
       KARTLAR
    ========================================= */

    document
        .querySelectorAll(".guide-card")
        .forEach(card => {

            card.addEventListener("click", () => {

                const type =
                    card.dataset.guide;

                openGuide(type);

            });

        });

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

    const mobileBtn =
        document.getElementById("mobileMenuBtn");

    const mobileNav =
        document.getElementById("mobileNav");

    if (mobileBtn && mobileNav) {

        mobileBtn.addEventListener(
            "click",
            () => {

                mobileNav.classList.toggle("active");

            }
        );

        mobileNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileNav.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }

    /* =========================================
       DİL BUTONU
    ========================================= */

    const languageBtn =
        document.getElementById("languageBtn");

    if (languageBtn) {

        languageBtn.addEventListener(
            "click",
            () => {

                alert(
                    "English version will be added soon."
                );

            }
        );

    }

    /* =========================================
       SCROLL ANIMATION
    ========================================= */

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

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

        document
            .querySelectorAll(
                ".big-card, .boost-card, .social-card, .quick-card"
            )
            .forEach(element => {

                observer.observe(element);

            });

    }

});
```
