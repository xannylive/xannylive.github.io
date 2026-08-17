// Rastgele benzersiz sipariş kodu üreten fonksiyon (Müşterilerin ödemeleri karışmasın diye)
function generateUniqueCode() {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return "XB-" + randomNum;
}

// Satın Al butonuna basıldığında modalı aç, paket adını yaz ve özel kod oluştur
function openIbanModal(packageName) {
    document.getElementById('selectedPackageName').innerText = packageName;
    document.getElementById('uniqueRefCode').innerText = generateUniqueCode();
    document.getElementById('ibanModal').style.display = 'flex';
}

// Modalı kapat
function closeIbanModal() {
    document.getElementById('ibanModal').style.display = 'none';
}

// "Ödemeyi Yaptım" butonuna basınca IBAN ekranını kapatıp Discord'a yönlendir
function redirectToDiscord() {
    // Buraya kendi Discord davet linkini yapıştırabilirsin
    const discordInviteUrl = "https://discord.com"; 
    
    closeIbanModal();
    
    // Kullanıcıyı Discord'a yönlendiriyoruz
    window.location.href = discordInviteUrl;
}

// Kullanıcı modali dışındaki siyah alana tıklarsa pencere kapansın
window.onclick = function(event) {
    let modal = document.getElementById('ibanModal');
    if (event.target == modal) {
        closeIbanModal();
    }
}
