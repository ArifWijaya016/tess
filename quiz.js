// definisikan teks yang akan dibaca
const teks = "Ini adalah contoh teks yang akan dibaca.";

// buat objek SpeechSynthesisUtterance
const suara = new SpeechSynthesisUtterance(teks);

// atur bahasa dan kecepatan suara
suara.lang = "id-ID";
suara.rate = 1.2;

// mulai pembacaan
speechSynthesis.speak(suara);

// tampilkan teks pada halaman
const hasilElement = document.getElementById('hasil');
hasilElement.innerHTML = teks;
