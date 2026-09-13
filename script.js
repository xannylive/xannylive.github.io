// Örnek Oyun Verileri
const games = [
    { id: 1, title: "Cyberpunk 2077", price: 899, category: "rpg", img: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&w=500" },
    { id: 2, title: "DOOM Eternal", price: 349, category: "fps", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500" },
    { id: 3, title: "The Witcher 3", price: 299, category: "rpg", img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=500" },
    { id: 4, title: "Elden Ring", price: 999, category: "action", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500" },
    { id: 5, title: "Valorant", price: 0, category: "fps", img: "https://images.unsplash.com/photo-1538481199005-271361979065?auto=format&fit=crop&w=500" }
];

// Durum (State) Yönetimi
let favorites = JSON.parse(localStorage.getItem("xanny_favs") || "[]");
let cart = JSON.parse(localStorage.getItem("xanny_cart") || "[]");
let currentFilter = "all";
let searchQuery = "";

const grid = document.getElementById("gamesGrid");
const cartCount = document.getElementById("cartCount");

// Başlangıç Kurulumu
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    renderGames();
});

// Oyunları Ekrana Çizme
function renderGames() {
    grid.innerHTML = "";
    
    // Filtreleme Mantığı
    const filteredGames = games.filter(game => {
        const matchCategory = currentFilter === "all" || game.category === currentFilter;
        const matchSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    if (filteredGames.length === 0) {
        grid.innerHTML = `<h3 style="color:var(--text-muted)">Oyun bulunamadı 🥺</h3>`;
        return;
    }

    filteredGames.forEach(game => {
        const isFav = favorites.includes(game.id);
        const card = document.createElement("div");
        card.className = "card";
        
        card.innerHTML = `
            <img src="${game.img}" alt="${game.title}" class="card-img" loading="lazy">
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav(${game.id})">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
            </button>
            <div class="card-info">
                <h3 class="card-title">${game.title}</h3>
                <span class="card-category">${game.category.toUpperCase()}</span>
                <div class="card-bottom">
                    <span class="price">${game.price === 0 ? 'Ücretsiz' : game.price + ' ₺'}</span>
                    <button class="add-btn" onclick="addToCart(${game.id})">Sepete Ekle</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Favori Sistemi (localStorage ile)
window.toggleFav = (id) => {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast("Favorilerden çıkarıldı 💔");
    } else {
        favorites.push(id);
        showToast("Favorilere eklendi ❤️");
    }
    localStorage.setItem("xanny_favs", JSON.stringify(favorites));
    renderGames(); // Kalp ikonunu güncelle
};

// Sepet Sistemi
window.addToCart = (id) => {
    cart.push(id);
    localStorage.setItem("xanny_cart", JSON.stringify(cart));
    updateCartCount();
    showToast("Sepete eklendi 🛒");
};

function updateCartCount() {
    cartCount.innerText = cart.length;
}

// Debounce Özellikli Arama (Kullanıcı yazmayı bırakınca arar)
let searchTimeout;
document.getElementById("searchInput").addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchQuery = e.target.value;
        renderGames();
    }, 300); // 300ms gecikme
});

// Kategori Filtreleri
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        currentFilter = e.target.getAttribute("data-filter");
        renderGames();
    });
});

// Bildirim (Toast) Sistemi
function showToast(message) {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}
