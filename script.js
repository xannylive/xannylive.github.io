const modal = document.getElementById("modal");
const modalLabel = document.getElementById("modalLabel");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalContent = document.getElementById("modalContent");


function openModal(type) {

    modal.classList.add("active");


    if (type === "crosshair") {

        modalLabel.innerText = "CROSSHAIR";
        modalTitle.innerText = "Crosshair Kodlarım";

        modalDescription.innerText =
            "CS2'de kullandığım crosshair ayarları.";

        modalContent.innerHTML = `
            <div class="code-box" id="crosshairCode">
                CSGO-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
            </div>

            <button class="copy-btn" onclick="copyCrosshair()">
                📋 Kodu Kopyala
            </button>

            <div class="setting-list">

                <div class="setting-row">
                    <span>Renk</span>
                    <span>Pembe</span>
                </div>

                <div class="setting-row">
                    <span>Hareket</span>
                    <span>Kapalı</span>
                </div>

                <div class="setting-row">
                    <span>Merkez Nokta</span>
                    <span>Kapalı</span>
                </div>

                <div class="setting-row">
                    <span>Outline</span>
                    <span>Açık</span>
                </div>

            </div>
        `;

        return;
    }


    if (type === "cs2") {

        modalLabel.innerText = "CS2 SETTINGS";
        modalTitle.innerText = "CS2 Ayarlarım";

        modalDescription.innerText =
            "FPS ve görüntü performansı için kullandığım CS2 ayarları.";

        modalContent.innerHTML = `
            <div class="setting-list">

                <div class="setting-row">
                    <span>Çözünürlük</span>
                    <span>1080 × 1080</span>
                </div>

                <div class="setting-row">
                    <span>Görüntü Modu</span>
                    <span>Fullscreen</span>
                </div>

                <div class="setting-row">
                    <span>V-Sync</span>
                    <span>Kapalı</span>
                </div>

                <div class="setting-row">
                    <span>Boost Player Contrast</span>
                    <span>Açık</span>
                </div>

                <div class="setting-row">
                    <span>MSAA</span>
                    <span>2x</span>
                </div>

                <div class="setting-row">
                    <span>Texture Filtering</span>
                    <span>4x</span>
                </div>

                <div class="setting-row">
                    <span>Shader</span>
                    <span>Düşük</span>
                </div>

            </div>
        `;

        return;
    }


    if (type === "mouse") {

        modalLabel.innerText = "MOUSE SETTINGS";
        modalTitle.innerText = "Mouse Ayarlarım";

        modalDescription.innerText =
            "CS2 için kullandığım temel mouse ayarları.";

        modalContent.innerHTML = `
            <div class="setting-list">

                <div class="setting-row">
                    <span>DPI</span>
                    <span>800</span>
                </div>

                <div class="setting-row">
                    <span>Sensitivity</span>
                    <span>1.00</span>
                </div>

                <div class="setting-row">
                    <span>eDPI</span>
                    <span>800</span>
                </div>

                <div class="setting-row">
                    <span>Raw Input</span>
                    <span>Açık</span>
                </div>

                <div class="setting-row">
                    <span>Mouse Acceleration</span>
                    <span>Kapalı</span>
                </div>

            </div>
        `;

        return;
    }


    if (type === "nvidia") {

        modalLabel.innerText = "NVIDIA COLOR";
        modalTitle.innerText = "NVIDIA Renk Ayarlarım";

        modalDescription.innerText =
            "CS2 için daha canlı ve net görüntü elde etmek için NVIDIA renk ayarlarım.";

        modalContent.innerHTML = `
            <div class="setting-list">

                <div class="setting-row">
                    <span>Parlaklık</span>
                    <span>60%</span>
                </div>

                <div class="setting-row">
                    <span>Kontrast</span>
                    <span>55%</span>
                </div>

                <div class="setting-row">
                    <span>Gama</span>
                    <span>1.00</span>
                </div>

                <div class="setting-row">
                    <span>Dijital Titreşim</span>
                    <span>80%</span>
                </div>

                <div class="setting-row">
                    <span>Ton</span>
                    <span>0°</span>
                </div>

            </div>

            <div class="code-box">
                NVIDIA DENETİM MASASI → EKRAN → MASAÜSTÜ RENK AYARLARINI AYARLA
            </div>

            <div style="margin-top:20px; line-height:1.8; color:#aaa;">

                <strong>🎨 NASIL YAPILIR?</strong><br><br>

                <strong>1.</strong> Masaüstünde sağ tıkla.<br><br>

                <strong>2.</strong> NVIDIA Denetim Masası'nı aç.<br><br>

                <strong>3.</strong> Masaüstü renk ayarlarını ayarla bölümüne gir.<br><br>

                <strong>4.</strong> NVIDIA ayarlarını kullan seçeneğini aç.<br><br>

                <strong>5.</strong> Yukarıdaki değerleri uygula.<br><br>

                <strong>6.</strong> Uygula butonuna bas.

            </div>
        `;

        return;
    }


    if (type === "fps") {

        modalLabel.innerText = "FPS OPTIMIZATION";
        modalTitle.innerText = "FPS Optimizasyonu";

        modalDescription.innerText =
            "CS2'de daha yüksek ve daha stabil FPS için kullandığım optimizasyonlar.";

        modalContent.innerHTML = `
            <div class="setting-list">

                <div class="setting-row">
                    <span>NVIDIA Güç Yönetimi</span>
                    <span>Maksimum Performans</span>
                </div>

                <div class="setting-row">
                    <span>Düşük Gecikme</span>
                    <span>Açık</span>
                </div>

                <div class="setting-row">
                    <span>Dikey Senkronizasyon</span>
                    <span>Kapalı</span>
                </div>

                <div class="setting-row">
                    <span>Yenileme Hızı</span>
                    <span>En Yüksek</span>
                </div>

                <div class="setting-row">
                    <span>Windows Oyun Modu</span>
                    <span>Açık</span>
                </div>

                <div class="setting-row">
                    <span>Windows Güç Modu</span>
                    <span>En iyi performans</span>
                </div>

                <div class="setting-row">
                    <span>Lenovo Vantage</span>
                    <span>Performans Modu</span>
                </div>

            </div>

            <div class="code-box">
                🚀 XANNYLIVE FPS OPTİMİZASYON REHBERİ
            </div>

            <div style="margin-top:20px; line-height:1.8; color:#aaa;">

                <strong>01 — NVIDIA</strong><br><br>

                NVIDIA Denetim Masası → 3D Ayarlarının Yönetilmesi.<br><br>

                Güç yönetimi → Maksimum performansı tercih et.<br><br>

                Tercih edilen yenileme hızı → Kullanılabilir en yüksek.<br><br>

                Dikey senkronizasyon → Kapalı.<br><br>

                <strong>02 — WINDOWS</strong><br><br>

                Oyun Modu → Açık.<br><br>

                Güç modu → En iyi performans.<br><br>

                <strong>03 — CS2</strong><br><br>

                Tam ekran kullan.<br><br>

                V-Sync kapalı olsun.<br><br>

                <strong>04 — LENOVO</strong><br><br>

                Lenovo Vantage → Performans Modu.

            </div>
        `;

        return;
    }


    if (type === "videos") {

        modalLabel.innerText = "CONTENT";
        modalTitle.innerText = "Videolarım";

        modalDescription.innerText =
            "CS2 içeriklerim, ayar rehberlerim ve yayın videolarım.";

        modalContent.innerHTML = `
            <a class="primary-btn"
               href="#"
               style="display:inline-block;">
                ▶️ YouTube Kanalım
            </a>

            <div class="setting-list">

                <div class="setting-row">
                    <span>CS2 Ayar Rehberi</span>
                    <span>Yakında</span>
                </div>

                <div class="setting-row">
                    <span>FPS Optimizasyonu</span>
                    <span>Yakında</span>
                </div>

                <div class="setting-row">
                    <span>Crosshair Rehberi</span>
                    <span>Yakında</span>
                </div>

            </div>
        `;

        return;
    }

}


function closeModal() {

    modal.classList.remove("active");

}


function copyCrosshair() {

    const code =
        document.getElementById("crosshairCode").innerText;

    navigator.clipboard.writeText(code);

    alert("Crosshair kodu kopyalandı! 🎯");

}


modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        closeModal();
    }

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeModal();
    }

});
