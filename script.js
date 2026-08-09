const modal = document.getElementById("settingsModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const languageBtn = document.getElementById("languageBtn");
const languageText = document.getElementById("languageText");

let currentLanguage = localStorage.getItem("xannyLanguage") || "tr";


/* =========================
   LANGUAGE SYSTEM
========================= */

function updateLanguage() {

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-tr]").forEach(element => {

        const text = element.getAttribute(`data-${currentLanguage}`);

        if (text) {
            element.textContent = text;
        }

    });

    languageText.textContent =
        currentLanguage === "tr" ? "EN" : "TR";

    localStorage.setItem("xannyLanguage", currentLanguage);
}

languageBtn.addEventListener("click", () => {

    currentLanguage =
        currentLanguage === "tr" ? "en" : "tr";

    updateLanguage();

});


/* =========================
   MOBILE MENU
========================= */

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   GUIDE CONTENT
========================= */

const guides = {

    crosshair: {

        tr: {
            category: "CS2 / CROSSHAIR",
            title: "Crosshair Ayarlarım",

            steps: [
                ["Crosshair Style", "Classic Static"],
                ["Color", "Green"],
                ["Size", "1.5"],
                ["Thickness", "0.5"],
                ["Gap", "-3"],
                ["Outline", "0"],
                ["Dot", "0"]
            ]
        },

        en: {
            category: "CS2 / CROSSHAIR",
            title: "My Crosshair Settings",

            steps: [
                ["Crosshair Style", "Classic Static"],
                ["Color", "Green"],
                ["Size", "1.5"],
                ["Thickness", "0.5"],
                ["Gap", "-3"],
                ["Outline", "0"],
                ["Dot", "0"]
            ]
        }
    },


    mouse: {

        tr: {
            category: "HARDWARE / MOUSE",
            title: "Mouse Ayarlarım",

            steps: [
                ["Mouse DPI", "800 DPI"],
                ["Polling Rate", "1000 Hz"],
                ["CS2 Sensitivity", "1.00"],
                ["Zoom Sensitivity", "1.00"],
                ["Raw Input", "ON"],
                ["Acceleration", "OFF"]
            ]
        },

        en: {
            category: "HARDWARE / MOUSE",
            title: "My Mouse Settings",

            steps: [
                ["Mouse DPI", "800 DPI"],
                ["Polling Rate", "1000 Hz"],
                ["CS2 Sensitivity", "1.00"],
                ["Zoom Sensitivity", "1.00"],
                ["Raw Input", "ON"],
                ["Acceleration", "OFF"]
            ]
        }
    },


    monitor: {

        tr: {
            category: "DISPLAY",
            title: "Ekran Ayarlarım",

            steps: [
                ["Resolution", "1920 × 1080"],
                ["Refresh Rate", "144 Hz"],
                ["Display Mode", "Fullscreen"],
                ["Aspect Ratio", "16:9"],
                ["V-Sync", "OFF"]
            ]
        },

        en: {
            category: "DISPLAY",
            title: "My Display Settings",

            steps: [
                ["Resolution", "1920 × 1080"],
                ["Refresh Rate", "144 Hz"],
                ["Display Mode", "Fullscreen"],
                ["Aspect Ratio", "16:9"],
                ["V-Sync", "OFF"]
            ]
        }
    },


    graphics: {

        tr: {
            category: "CS2 / GRAPHICS",
            title: "Grafik Ayarlarım",

            steps: [
                ["Boost Player Contrast", "Enabled"],
                ["V-Sync", "Disabled"],
                ["MSAA", "2X"],
                ["Global Shadow Quality", "Low"],
                ["Model / Texture Detail", "Low"],
                ["Shader Detail", "Low"],
                ["Particle Detail", "Low"],
                ["Ambient Occlusion", "Disabled"]
            ]
        },

        en: {
            category: "CS2 / GRAPHICS",
            title: "My Graphics Settings",

            steps: [
                ["Boost Player Contrast", "Enabled"],
                ["V-Sync", "Disabled"],
                ["MSAA", "2X"],
                ["Global Shadow Quality", "Low"],
                ["Model / Texture Detail", "Low"],
                ["Shader Detail", "Low"],
                ["Particle Detail", "Low"],
                ["Ambient Occlusion", "Disabled"]
            ]
        }
    },


    viewmodel: {

        tr: {
            category: "CS2 / VIEWMODEL",
            title: "Viewmodel Ayarlarım",

            steps: [
                ["viewmodel_fov", "68"],
                ["viewmodel_offset_x", "2.5"],
                ["viewmodel_offset_y", "2"],
                ["viewmodel_offset_z", "-2"],
                ["viewmodel_presetpos", "1"]
            ]
        },

        en: {
            category: "CS2 / VIEWMODEL",
            title: "My Viewmodel Settings",

            steps: [
                ["viewmodel_fov", "68"],
                ["viewmodel_offset_x", "2.5"],
                ["viewmodel_offset_y", "2"],
                ["viewmodel_offset_z", "-2"],
                ["viewmodel_presetpos", "1"]
            ]
        }
    },


    hud: {

        tr: {
            category: "CS2 / HUD",
            title: "HUD Ayarlarım",

            steps: [
                ["HUD Scale", "0.90"],
                ["HUD Color", "Team Color"],
                ["Radar HUD Scale", "1.00"],
                ["Radar Icon Scale", "0.70"],
                ["Health / Armor", "Visible"]
            ]
        },

        en: {
            category: "CS2 / HUD",
            title: "My HUD Settings",

            steps: [
                ["HUD Scale", "0.90"],
                ["HUD Color", "Team Color"],
                ["Radar HUD Scale", "1.00"],
                ["Radar Icon Scale", "0.70"],
                ["Health / Armor", "Visible"]
            ]
        }
    },


    radar: {

        tr: {
            category: "CS2 / RADAR",
            title: "Radar Ayarlarım",

            steps: [
                ["Radar Size", "1.00"],
                ["Radar Scale", "0.40"],
                ["Rotate Radar", "ON"],
                ["Radar Center", "OFF"],
                ["Map Text Size", "Medium"]
            ]
        },

        en: {
            category: "CS2 / RADAR",
            title: "My Radar Settings",

            steps: [
                ["Radar Size", "1.00"],
                ["Radar Scale", "0.40"],
                ["Rotate Radar", "ON"],
                ["Radar Center", "OFF"],
                ["Map Text Size", "Medium"]
            ]
        }
    },


    weapon: {

        tr: {
            category: "CS2 / WEAPON",
            title: "Silah Ayarlarım",

            steps: [
                ["Weapon Position", "Classic"],
                ["Viewmodel FOV", "68"],
                ["Weapon Bob", "Minimal"],
                ["Switch Animation", "Default"],
                ["Weapon Lowering", "Disabled"]
            ]
        },

        en: {
            category: "CS2 / WEAPON",
            title: "My Weapon Settings",

            steps: [
                ["Weapon Position", "Classic"],
                ["Viewmodel FOV", "68"],
                ["Weapon Bob", "Minimal"],
                ["Switch Animation", "Default"],
                ["Weapon Lowering", "Disabled"]
            ]
        }
    },


    nvidia: {

        tr: {
            category: "NVIDIA CONTROL PANEL",
            title: "NVIDIA Renk Ayarları",

            steps: [
                ["1. Adım", "Masaüstüne sağ tıkla → NVIDIA Denetim Masası"],
                ["2. Adım", "Sol menüden → Ekran"],
                ["3. Adım", "Masaüstü renk ayarlarını yap seçeneğine gir"],
                ["Parlaklık", "55%"],
                ["Kontrast", "55%"],
                ["Gamma", "1.00"],
                ["Dijital Canlılık", "70%"],
                ["Ton", "0°"]
            ]
        },

        en: {
            category: "NVIDIA CONTROL PANEL",
            title: "NVIDIA Color Settings",

            steps: [
                ["Step 1", "Right click desktop → NVIDIA Control Panel"],
                ["Step 2", "Open Display from the left menu"],
                ["Step 3", "Select Adjust desktop color settings"],
                ["Brightness", "55%"],
                ["Contrast", "55%"],
                ["Gamma", "1.00"],
                ["Digital Vibrance", "70%"],
                ["Hue", "0°"]
            ]
        }
    },


    fpsnvidia: {

        tr: {
            category: "FPS BOOST / NVIDIA",
            title: "NVIDIA FPS Ayarları",

            steps: [
                ["1. Adım", "Masaüstüne sağ tıkla → NVIDIA Denetim Masası"],
                ["2. Adım", "3D Ayarlarının Yönetilmesi bölümüne gir"],
                ["3. Adım", "Program Ayarları sekmesine geç"],
                ["4. Adım", "Counter-Strike 2'yi seç"],
                ["Güç yönetimi modu", "Maksimum performansı tercih et"],
                ["Tercih edilen yenileme hızı", "Kullanılabilir en yüksek"],
                ["Düşük gecikme modu", "Kapalı"],
                ["Dikey senkronizasyon", "Kapalı"],
                ["Texture Filtering", "High Performance"]
            ]
        },

        en: {
            category: "FPS BOOST / NVIDIA",
            title: "NVIDIA FPS Settings",

            steps: [
                ["Step 1", "Right click desktop → NVIDIA Control Panel"],
                ["Step 2", "Open Manage 3D Settings"],
                ["Step 3", "Go to Program Settings"],
                ["Step 4", "Select Counter-Strike 2"],
                ["Power Management Mode", "Prefer Maximum Performance"],
                ["Preferred Refresh Rate", "Highest Available"],
                ["Low Latency Mode", "Off"],
                ["Vertical Sync", "Off"],
                ["Texture Filtering", "High Performance"]
            ]
        }
    },


    fpswindows: {

        tr: {
            category: "FPS BOOST / WINDOWS",
            title: "Windows FPS Ayarları",

            steps: [
                ["1. Adım", "Windows Ayarları → Sistem → Güç"],
                ["Güç Modu", "En iyi performans"],
                ["Oyun Modu", "Açık"],
                ["Arka Plan Uygulamaları", "Gereksizleri kapat"],
                ["Başlangıç Uygulamaları", "Gereksizleri kapat"],
                ["Windows Game Bar", "Gerekmiyorsa kapat"]
            ]
        },

        en: {
            category: "FPS BOOST / WINDOWS",
            title: "Windows FPS Settings",

            steps: [
                ["Step 1", "Windows Settings → System → Power"],
                ["Power Mode", "Best Performance"],
                ["Game Mode", "On"],
                ["Background Apps", "Disable unnecessary apps"],
                ["Startup Apps", "Disable unnecessary apps"],
                ["Windows Game Bar", "Disable if unnecessary"]
            ]
        }
    },


    fpscs2: {

        tr: {
            category: "FPS BOOST / CS2",
            title: "CS2 FPS Ayarları",

            steps: [
                ["Display Mode", "Fullscreen"],
                ["V-Sync", "Disabled"],
                ["MSAA", "2X"],
                ["Global Shadow Quality", "Low"],
                ["Model / Texture", "Low"],
                ["Shader Detail", "Low"],
                ["Particle Detail", "Low"],
                ["Ambient Occlusion", "Disabled"],
                ["HDR", "Performance"]
            ]
        },

        en: {
            category: "FPS BOOST / CS2",
            title: "CS2 FPS Settings",

            steps: [
                ["Display Mode", "Fullscreen"],
                ["V-Sync", "Disabled"],
                ["MSAA", "2X"],
                ["Global Shadow Quality", "Low"],
                ["Model / Texture", "Low"],
                ["Shader Detail", "Low"],
                ["Particle Detail", "Low"],
                ["Ambient Occlusion", "Disabled"],
                ["HDR", "Performance"]
            ]
        }
    }

};


/* =========================
   MODAL
========================= */

function openGuide(type) {

    const guide = guides[type];

    if (!guide) return;

    const content = guide[currentLanguage];

    let html = `
        <div class="guide-title">
            <span>${content.category}</span>
            <h2>${content.title}</h2>
        </div>
    `;

    content.steps.forEach((step, index) => {

        html += `
            <div class="guide-step">

                <div class="step-number">
                    ${index + 1}
                </div>

                <div>
                    <h4>${step[0]}</h4>
                    <div class="setting-value">
                        ${step[1]}
                    </div>
                </div>

            </div>
        `;

    });

    modalContent.innerHTML = html;

    modal.classList.add("active");
    document.body.classList.add("modal-open");
}


document.querySelectorAll("[data-modal]").forEach(card => {

    card.addEventListener("click", () => {

        openGuide(card.dataset.modal);

    });

});


modalClose.addEventListener("click", closeModal);

document.querySelector(".modal-overlay").addEventListener("click", closeModal);

function closeModal() {

    modal.classList.remove("active");
    document.body.classList.remove("modal-open");

}


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================
   INITIALIZE
========================= */

updateLanguage();
