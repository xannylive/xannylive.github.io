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
        "CS2'de kullanabileceğin crosshair ayarlarım.";

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
    }

    else if (type === "cs2") {

        modalLabel.innerText = "CS2 SETTINGS";
        modalTitle.innerText = "CS2 Ayarlarım";

        modalDescription.innerText =
        "FPS ve görüntü performansı için kullandığım temel ayarlar.";

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
    }

    else if (type === "mouse") {

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
    }

    else if (type === "nvidia") {

        modalLabel.innerText = "NVIDIA COLOR";
        modalTitle.innerText = "NVIDIA Renk Ayarlarım";

        modalDescription.innerText =
        "CS2 için daha canlı, net ve rekabetçi görüntü elde etmek amacıyla kullanabileceğin NVIDIA renk ayarları.";

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

                <div class="setting-row">
                    <span>Çıkış Renk Formatı</span>
                    <span>RGB</span>
                </div>

                <div class="setting-row">
                    <span>Çıkış Dinamik Aralığı</span>
                    <span>Tam</span>
                </div>

            </div>

            <div class="code-box" style="margin-top:20px;">
                NVIDIA DENETİM MASASI → EKRAN → MASAÜSTÜ RENK AYARLARINI AYARLA
            </div>

            <div style="margin-top:25px; line-height:1.8; color:#aaa;">

                <strong style="color:#fff;">
                    🎨 NASIL YAPILIR?
                </strong>

                <br><br>

                <strong style="color:#ff20b9;">1.</strong>
                Masaüstünde boş bir yere sağ tıkla.

                <br><br>

                <strong style="color:#ff20b9;">2.</strong>
                NVIDIA Denetim Masası'nı aç.

                <br><br>

                <strong style="color:#ff20b9;">3.</strong>
                Sol taraftan
                <strong>"Masaüstü renk ayarlarını ayarla"</strong>
                bölümüne gir.

                <br><br>

                <strong style="color:#ff20b9;">4.</strong>
                "NVIDIA ayarlarını kullan" seçeneğini aktif et.

                <br><br>

                <strong style="color:#ff20b9;">5.</strong>
                Yukarıdaki değerleri uygula.

                <br><br>

                <strong style="color:#ff20b9;">6.</strong>
                Sağ alttan <strong>Uygula</strong> butonuna bas.

            </div>
        `;
    }

    else if (type === "fps") {

        modalLabel.innerText = "FPS OPTIMIZATION";
        modalTitle.innerText = "FPS Optimizasyonu";

        modalDescription.innerText =
        "CS2'de daha yüksek ve daha stabil FPS için uygulanabilecek optimizasyonları adım adım gösteren rehber.";

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

            <div class="code-box" style="margin-top:20px;">
                🚀 XANNYLIVE FPS OPTİMİZASYON REHBERİ
            </div>

            <div style="margin-top:25px; line-height:1.8; color:#aaa;">

                <strong style="color:#fff;">
                    01 — NVIDIA DENETİM MASASI
                </strong>

                <br><br>

                Masaüstüne sağ tıkla → NVIDIA Denetim Masası →
                <strong>3D Ayarlarının Yönetilmesi</strong>.

                <br><br>

                Program Ayarları bölümünden CS2'yi seç.

                <br><br>

                Güç yönetimi modu →
                <strong>Maksimum performansı tercih et</strong>.

                <br><br>

                Tercih edilen yenileme hızı →
                <strong>Kullanılabilir en yüksek</strong>.

                <br><br>

                Dikey senkronizasyon →
                <strong>Kapalı</strong>.

                <br><br>

                <strong style="color:#fff;">
                    02 — WINDOWS
                </strong>

                <br><br>

                Ayarlar → Oyun → Oyun Modu →
                <strong>Açık</strong>.

                <br><br>

                Windows güç modunu
                <strong>En iyi performans</strong>
                seçeneğine getir.

                <br><br>

                <strong style="color:#fff;">
                    03 — CS2
                </strong>

                <br><br>

                Oyunu tam ekran çalıştır.

                <br><br>

                V-Sync'i kapat.

                <br><br>

                Gereksiz grafik ayarlarını düşürerek
                GPU yükünü azalt.

                <br><br>

                <strong style="color:#fff;">
                    04 — ARKA PLAN
                </strong>

                <br><br>

                Oyun sırasında gereksiz tarayıcıları,
                launcher'ları ve arka plan uygulamalarını kapat.

                <br><br>

                <strong style="color:#fff;">
                    05 — SICAKLIK
                </strong>

                <br><br>

                Laptop kullanıyorsan hava girişlerini kapatma.
                Yeterli soğutma sağla ve performans modunu kullan.

                <br><br>

                ⚠️ <strong style="color:#ff20b9;">
                ÖNEMLİ:
                </strong>

                FPS artışı her bilgisayarda aynı olmaz.
                Amaç gereksiz yükü azaltıp daha stabil FPS
                ve frametime elde etmektir.

            </div>
        `;
    }

    else if (type === "videos") {

        modalLabel.innerText = "CONTENT";
        modalTitle.innerText = "Videolarım";

        modalDescription.innerText =
        "CS2 içeriklerim, ayar rehberlerim ve yayın videolarım.";

        modalContent.innerHTML = `

            <a class="primary-btn"
               href="#"
               target="_blank"
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


modal.addEventListener("click", function(e) {

    if (e.target === modal) {
        closeModal();
    }

});


document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {
        closeModal();
    }

});
