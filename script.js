// tura ve yazı sayılarını olustur ve sıfırla
let tura = 0;
let yazi = 0;

//html bulunan coin,flip butonu ve reset butonu

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

// flip butonuna tıklandıgında
flipBtn.addEventListener("click", () => {
  // rastgele 0 veya 1 sayısını seçer (0:Tura 1:yazi)
  let i = Math.floor(Math.random() * 2);

  // coin animasyonunu gecici olarak kapat
  coin.style.animation = "none";

  if (i) {
    // eger i 1 ise  (yazı), 100 milisaniye sonra coin'e spin-tura  animasyonunu uygula
    setTimeout(() => {
      coin.style.animation = "spin-tura 3s forwards";
    }, 100);
    tura++;
  } else {
    // eger i 0 ise (tura), 100 milisaniye sonra coine spin-yazi animasyonunu uygula
    setTimeout(() => {
      coin.style.animation = "spin-yazi 3s forwards";
    }, 100);
    yazi++;
  }

  //istatislikleri guncelle ve butonları devre dısı bırak

  setTimeout(updateStats, 3000);
  disabledButton();
});

//istatislikleri guncelleme foksiyonu

function updateStats() {
  document.querySelector("#tura-count").textContent = `Tura: ${tura}`;
  document.querySelector("#yazi-count").textContent = `Yazı: ${yazi}`;
}

// butonu gecici olarak devre dısı bırakmak
function disabledButton() {
  flipBtn.disabled = true;
  setTimeout(() => {
    flipBtn.disabled = false;
  }, 3000);
}

//reset butonuna tıklama
resetBtn.addEventListener("click", () => {
  // coin animasyonunu durdur, tura ve yazi değerlerini sıfırla , istatislikleri guncelle

  coin.style.animation = "none";
  tura = 0;
  yazi = 0;
  updateStats();
});
