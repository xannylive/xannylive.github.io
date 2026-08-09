let language = localStorage.getItem("xanny-language") || "tr";

const loader = document.getElementById("loader");
const langBtn = document.getElementById("langBtn");
const langText = document.getElementById("langText");

const mobileMenu = document.getElementById("mobileMenu");
const nav = document.querySelector(".desktop-nav");

const guideModal = document.getElementById("guideModal");
const guideContent = document.getElementById("guideContent");
const guideClose = document.getElementById("guideClose");


/* LOADER */

window.addEventListener("load", () => {

    setTimeout(() => {
        loader.classList.add("hide");
    }, 700);

});


/* CURSOR */

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {

    if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }

});


/* LANGUAGE */

function setLanguage() {

    document.documentElement.lang = language;

    document.querySelectorAll("[data-tr]").forEach(element => {

        const text = element.getAttribute(`data-${language}`);

        if (text) {
            element.textContent = text;
        }

    });

    langText.textContent =
        language === "tr" ? "EN" : "TR";

    localStorage.setItem("xanny-language", language);

}


langBtn.addEventListener("click", () => {

    language = language === "tr" ? "en" : "tr";

    setLanguage();

});


/* MOBILE NAV */

mobileMenu.addEventListener("click", () => {

    nav.classList.toggle("active");

});


document.querySelectorAll(".desktop-nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* GUIDE DATA */

const guides = {

    crosshair: {

        tr: {
            category: "CS2 / AIM",
            title: "Crosshair Ayarlarım",
            path: "CS2 → Settings → Game → Crosshair",

            steps: [
                ["Style", "Classic Static"],
                ["Color", "Green"],
                ["Size", "1.5"],
                ["Thickness", "0.5"],
                ["Gap", "-3"],
                ["Outline", "OFF"],
                ["Dot", "OFF"]
            ]
        },

        en: {
            category: "CS2 / AIM",
            title: "My Crosshair Settings",
            path: "CS2 → Settings → Game → Crosshair",

            steps: [
                ["Style", "Classic Static"],
                ["Color", "Green"],
                ["Size", "1.5"],
                ["Thickness", "0.5"],
                ["Gap", "-3"],
                ["Outline", "OFF"],
                ["Dot", "OFF"]
            ]
        }

    },


    mouse: {

        tr: {
            category: "HARDWARE",
            title: "Mouse Ayarlarım",
            path: "Mouse Software → Performance",

            steps: [
                ["DPI", "800"],
                ["Polling Rate", "1000 Hz"],
                ["Sensitivity", "1.00"],
                ["Zoom Sensitivity", "1.00"],
                ["Raw Input", "ON"],
                ["Mouse Acceleration", "OFF"]
            ]
        },

        en: {
            category: "HARDWARE",
            title: "My Mouse Settings",
            path: "Mouse Software → Performance",

            steps: [
                ["DPI", "800"],
                ["Polling Rate", "1000 Hz"],
                ["Sensitivity", "1.00"],
                ["Zoom Sensitivity", "1.00"],
                ["Raw Input", "ON"],
                ["Mouse Acceleration", "OFF"]
            ]
        }

    },


    monitor: {

        tr: {
            category: "DISPLAY",
            title: "Monitör Ayarlarım",
            path: "Windows → System → Display → Advanced Display",

            steps: [
                ["Resolution", "1920 × 1080"],
                ["Refresh Rate", "144 Hz"],
                ["Display Mode", "Fullscreen"],
                ["V-Sync", "OFF"],
                ["Aspect Ratio", "16:9"]
            ]
        },

        en: {
            category: "DISPLAY",
            title: "My Monitor Settings",
            path: "Windows → System → Display → Advanced Display",

            steps: [
                ["Resolution", "1920 × 1080"],
                ["Refresh Rate", "144 Hz"],
                ["Display Mode", "Fullscreen"],
                ["V-Sync", "OFF"],
                ["Aspect Ratio", "16:9"]
            ]
        }

    },


    graphics: {

        tr: {
            category: "CS2 / GRAPHICS",
            title: "Grafik Ayarlarım",
            path: "CS2 → Settings → Video → Advanced Video",

            steps: [
                ["Boost Player Contrast", "Enabled"],
                ["V-Sync", "Disabled"],
                ["MSAA", "2X"],
                ["Shadow Quality", "Low"],
                ["Model / Texture", "Low"],
                ["Shader", "Low"],
                ["Particle", "Low"],
                ["Ambient Occlusion", "Disabled"]
            ]
        },

        en: {
            category: "CS2 / GRAPHICS",
            title: "My Graphics Settings",
            path: "CS2 → Settings → Video → Advanced Video",

            steps: [
                ["Boost Player Contrast", "Enabled"],
                ["V-Sync", "Disabled"],
                ["MSAA", "2X"],
                ["Shadow Quality", "Low"],
                ["Model / Texture", "Low"],
                ["Shader", "Low"],
                ["Particle", "Low"],
                ["Ambient Occlusion", "Disabled"]
            ]
        }

    },


    viewmodel: {

        tr: {
            category: "CS2 / WEAPON",
            title: "Viewmodel Ayarlarım",
            path: "CS2 → Console",

            steps: [
                ["viewmodel_fov", "68"],
                ["viewmodel_offset_x", "2.5"],
                ["viewmodel_offset_y", "2"],
                ["viewmodel_offset_z", "-2"]
            ]
        },

        en: {
            category: "CS2 / WEAPON",
            title: "My Viewmodel Settings",
            path: "CS2 → Console",

            steps: [
                ["viewmodel_fov", "68"],
                ["viewmodel_offset_x", "2.5"],
                ["viewmodel_offset_y", "2"],
                ["viewmodel_offset_z", "-2"]
            ]
        }

    },


    hud: {

        tr: {
            category: "INTERFACE",
            title: "HUD Ayarlarım",
            path: "CS2 → Settings → Game → HUD",

            steps: [
                ["HUD Scale", "0.90"],
                ["HUD Color", "Team Color"],
                ["Health / Armor", "Visible"],
                ["Player Count", "Visible"]
            ]
        },

        en: {
            category: "INTERFACE",
            title: "My HUD Settings",
            path: "CS2 → Settings → Game → HUD",

            steps: [
                ["HUD Scale", "0.90"],
                ["HUD Color", "Team Color"],
                ["Health / Armor", "Visible"],
                ["Player Count", "Visible"]
            ]
        }

    },


    radar: {

        tr: {
            category: "INTERFACE",
            title: "Radar Ayarlarım",
            path: "CS2 → Settings → Game → Radar",

            steps: [
                ["Radar Size", "1.00"],
                ["Radar Scale", "0.40"],
                ["Rotate Radar", "ON"],
                ["Center Radar", "OFF"],
                ["Map Text Size", "Medium"]
            ]
        },

        en: {
            category: "INTERFACE",
            title: "My Radar Settings",
            path: "CS2 → Settings → Game → Radar",

            steps: [
                ["Radar Size", "1.00"],
                ["Radar Scale", "0.40"],
                ["Rotate Radar", "ON"],
                ["Center Radar", "OFF"],
                ["Map Text Size", "Medium"]
            ]
        }

    },


    nvidia: {

        tr: {
            category: "NVIDIA CONTROL PANEL",
            title: "NVIDIA Renk Ayarlarım",
            path: "Masaüstü → Sağ Tık → NVIDIA Denetim Masası → Ekran → Masaüstü renk ayarlarını yap",

            steps: [
                ["Parlaklık", "55%"],
                ["Kontrast", "55%"],
                ["Gamma", "1.00"],
                ["Dijital Canlılık", "70%"],
                ["Ton", "0°"]
            ]
        },

        en: {
            category: "NVIDIA CONTROL PANEL",
            title: "My NVIDIA Color Settings",
            path: "Desktop → Right Click → NVIDIA Control Panel → Display → Adjust desktop color settings",

            steps: [
                ["Brightness", "55%"],
                ["Contrast", "55%"],
                ["Gamma", "1.00"],
                ["Digital Vibrance", "70%"],
                ["Hue", "0°"]
            ]
        }

    },


    "fps-nvidia": {

        tr: {
            category: "FPS BOOST / NVIDIA",
            title: "NVIDIA FPS Ayarları",
            path: "NVIDIA Denetim Masası → 3D Ayarlarının Yönetilmesi → Program Ayarları → CS2",

            steps: [
                ["Güç Yönetimi", "Maksimum performansı tercih et"],
                ["Tercih Edilen Yenileme Hızı", "Kullanılabilir en yüksek"],
                ["Düşük Gecikme Modu", "Kapalı"],
                ["Dikey Senkronizasyon", "Kapalı"],
                ["Texture Filtering", "High Performance"]
            ]
        },

        en: {
            category: "FPS BOOST / NVIDIA",
            title: "NVIDIA FPS Settings",
            path: "NVIDIA Control Panel → Manage 3D Settings → Program Settings → CS2",

            steps: [
                ["Power Management", "Prefer Maximum Performance"],
                ["Preferred Refresh Rate", "Highest Available"],
                ["Low Latency Mode", "Off"],
                ["Vertical Sync", "Off"],
                ["Texture Filtering", "High Performance"]
            ]
        }

    },


    "fps-windows": {

        tr: {
            category: "FPS BOOST / WINDOWS",
            title: "Windows FPS Ayarları",
            path: "Windows → Ayarlar → Sistem → Güç",

            steps: [
                ["Güç Modu", "En iyi performans"],
                ["Oyun Modu", "Açık"],
                ["Başlangıç Uygulamaları", "Gereksizleri kapat"],
                ["Arka Plan Uygulamaları", "Gereksizleri kapat"]
            ]
        },

        en: {
            category: "FPS BOOST / WINDOWS",
            title: "Windows FPS Settings",
            path: "Windows → Settings → System → Power",

            steps: [
                ["Power Mode", "Best Performance"],
                ["Game Mode", "On"],
                ["Startup Apps", "Disable unnecessary apps"],
                ["Background Apps", "Disable unnecessary apps"]
            ]
        }

    },


    "fps-cs2": {

        tr: {
            category: "FPS BOOST / CS2",
            title: "CS2 FPS Ayarları",
            path: "CS2 → Settings → Video",

            steps: [
                ["Display Mode", "Fullscreen"],
                ["V-Sync", "Disabled"],
                ["MSAA", "2X"],
                ["Shadow Quality", "Low"],
                ["Model / Texture", "Low"],
                ["Shader", "Low"],
                ["Particle", "Low"],
                ["Ambient Occlusion", "Disabled"]
            ]
        },

        en: {
            category: "FPS BOOST / CS2",
            title: "CS2 FPS Settings",
            path: "CS2 → Settings → Video",

            steps: [
                ["Display Mode", "Fullscreen"],
                ["V-Sync", "Disabled"],
                ["MSAA", "2X"],
                ["Shadow Quality", "Low"],
                ["Model / Texture", "Low"],
                ["Shader", "Low"],
                ["Particle", "Low"],
                ["Ambient Occlusion", "Disabled"]
            ]
        }

    }

};


/* OPEN GUIDE */

function openGuide(id) {

    if (!guides[id]) return;

    const guide = guides[id][language];

    let html = `
        <div class="guide-heading">
            <span>${guide.category}</span>
            <h2>${guide.title}</h2>
        </div>

        <div class="guide-path">
            <small>${language === "tr" ? "AYARIN YOLU" : "SETTING PATH"}</small>
            <strong>${guide.path}</strong>
        </div>
    `;


    guide.steps.forEach((step, index) => {

        html += `
            <div class="guide-step">

                <div class="step-num">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="step-name">
                    ${step[0]}
                </div>

                <div class="step-value">
                    ${step[1]}
                </div>

            </div>
        `;

    });


    guideContent.innerHTML = html;

    guideModal.classList.add("active");

    document.body.classList.add("no-scroll");

}


/* GUIDE CLICK */

document.querySelectorAll("[data-guide]").forEach(element => {

    element.addEventListener("click", () => {

        openGuide(element.dataset.guide);

    });

});


/* CLOSE */

function closeGuide() {

    guideModal.classList.remove("active");

    document.body.classList.remove("no-scroll");

}

guideClose.addEventListener("click", closeGuide);

document.querySelector(".guide-backdrop").addEventListener("click", closeGuide);

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeGuide();
    }

});


/* INITIAL LANGUAGE */

setLanguage();
