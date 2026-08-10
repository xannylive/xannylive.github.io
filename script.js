// Ayarlar kartlarına tıklandığında açılıp kapanmasını sağlayan fonksiyon
function toggleCard(element) {
    // Tıklanan kartın 'active' class'ını aç/kapat
    element.classList.toggle("active");
    
    // İstersen bir kart açıldığında diğerlerinin kapanmasını sağlamak için aşağıdaki kodu da kullanabilirsin:
    /*
    const allCards = document.querySelectorAll('.setting-card');
    allCards.forEach(card => {
        if (card !== element) {
            card.classList.remove('active');
        }
    });
    */
}
