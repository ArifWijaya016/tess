function periksa_jawaban() {
    var jawaban1 = document.getElementById("jawaban1").value;
    var jawaban2 = document.getElementById("jawaban2").value;
    var jawaban3 = document.getElementById("jawaban3").value;
    var jawaban4 = document.getElementById("jawaban4").value;
    var jawaban5 = document.getElementById("jawaban5").value;
    var jawaban6 = document.getElementById("jawaban6").value;
    var jawaban7 = document.getElementById("jawaban7").value;
    var jawaban8 = document.getElementById("jawaban8").value;
    var jawaban9 = document.getElementById("jawaban9").value;
    var jawaban10 = document.getElementById("jawaban10").value;
    var jawaban11 = document.getElementById("jawaban11").value;
    var jawaban12 = document.getElementById("jawaban12").value;
    var jawaban13 = document.getElementById("jawaban13").value;
    var jawaban14 = document.getElementById("jawaban14").value;
    var jawaban15 = document.getElementById("jawaban15").value;
    var jawaban16 = document.getElementById("jawaban16").value;
    var jawaban17 = document.getElementById("jawaban17").value;
    var jawaban18 = document.getElementById("jawaban18").value;
    var notifikasi = document.createElement("div");


    var jawaban_salah = [];
  
    if (jawaban1.toLowerCase() !== "ya") {
      jawaban_salah.push("- Emosi negatif masih menguasai perasaan anda. Membalas perbuatan belum tentu membuat hati tenang. Upayakan untuk dapat membicarakan hal ini dengan pasangan dan lihat bagaimana respon pasangan anda mengenai perasaan anda");
    }
  
    if (jawaban2.toLowerCase() !== "ya") {
      jawaban_salah.push("- Mengharapkan hal buruk terjadi pada orang lain hanya mengotori hati kita dan hal ini dapat berdampak secara psikologis dan fisiologis terhadap mental dan tubuh kita");
    } 
  
    if (jawaban3.toLowerCase() !== "ya") {
      jawaban_salah.push("- Berusaha untuk menyadari bahwa setiap orang berhak untuk memperbaiki kesalahan dan menjadi pribadi yang lebih baik akan membuat kita lebih mudah memaafkan tindakan pasangan kita");
    }
    if (jawaban4.toLowerCase() != "ya") {
        jawaban_salah.push("- Menghabiskan energi untuk hal negatif hanya membuang wkatu dan tenaga. Gunakan waktu dan tenaga untuk melakukan hal-hal lain yang lebih bermanfaat");
    }
    
    if (jawaban5.toLowerCase() != "ya") {
        jawaban_salah.push("- Segala doa baik akan kembali pada kita begitu pula doa buruk. Berikan kesempatan pada pasangan untuk berubah.");
    }

    if (jawaban6.toLowerCase() != "ya") {
        jawaban_salah.push("- Dengan menjauhi pasangan hanya akan mem buat hubungan anda makin berjarak. Tetap berusaha menjaga komunikasi langsung dengan pasangan ");
    }

    if (jawaban7.toLowerCase() != "ya") {
        jawaban_salah.push("- Anda mungkin perlu merenungkan tindakan apa yang akan anda ambil selanjutnya karena hubungan pernikahan yang tidak hangat akan berdampak negatif terhadap berbagai aspek ");
    }

    if (jawaban8.toLowerCase() != "ya") {
        jawaban_salah.push("- Nampaknya tindakan pasangan sangat meninggalkan  bekas yang mendalam. Diskusikan dengan pasangan mengenai kelanjutan hubungan anda dengan pasangan dan apakah ada yang bisa dilakukan untuk memperbaiki kondii yang ada");
    }

    if (jawaban9.toLowerCase() != "ya") {
        jawaban_salah.push("- Sikap yang dingin tidak menyelesaikan masalah, karena hanya akan menumpuk emosi dan menjadi bola salju yang semakin lama semakin membesar. ");
    }

    if (jawaban10.toLowerCase() != "ya") {
        jawaban_salah.push("- Bicarakan apa yang anda inginkan dari pasangan anda sehingga hubungan anda dapat lebih baik");
    }

    if (jawaban11.toLowerCase() != "ya") {
        jawaban_salah.push("- Pertimbangkan dengan matang tindakan yang akan anda ambil dengan berbagai konsekuensinya. Jangan mengambil keputusan di saat emosi negatif menguasai diri anda");
    }

    if (jawaban12.toLowerCase() != "ya") {
        jawaban_salah.push("- Saat tindakan pasangan sudah berdampak pada perilaku anda terhadap pasangan, anda perlu merenungkan kembali pentingnya hubungan yang anda miliki dan apakah anda mau berupaya memperbaikinya atau tidak.");
    }

    if (jawaban13.toLowerCase() != "ya") {
        jawaban_salah.push("- Anda masih menyiman emosi negatif yang dapat berdampak buruk bagi diri anda sendiri");
    }

    if (jawaban14.toLowerCase() != "ya") {
        jawaban_salah.push("- Memberikan kesempatan bagi pasangan untuk memperbaiki perilakukanya dapat menjadi salah satu cara mempertahankan hubungan yang ada");
    }

    if (jawaban15.toLowerCase() != "ya") {
        jawaban_salah.push("- Anda dapat membicarakan apa yang anda rasakan pada pasangan agar dapat bersama-sama memperbaiki hubungan yang ada");
    }

    if (jawaban16.toLowerCase() != "ya") {
        jawaban_salah.push("- Perasaan sakit hati akan dapat berdampak pada perilaku anda dalam hubungan pernikahan yang nantinya akan membuat anda dan pasangan saling menyakiti satu sama lain. Salurkan emosi negatif yang ada pada hal yang produktif seperti melakukan hobi, prakarya ataupun kegiatan lain");
    }

    if (jawaban17.toLowerCase() != "ya") {
        jawaban_salah.push("- Menjalin komunikasi yang lebih baik dan berusaha membangun hubungan yang lebih hangat dengan pasangan dapat membantu proses pemaafan yang anda lakukan");
    }

    if (jawaban18.toLowerCase() != "ya") {
        jawaban_salah.push("- Kemarahan dapat menutupi hal-hal baik yang sebenarnya ada, sehingga kita tidak bisa melihat segala hal dengan jernih. Yakini bahwa pasangan juga berproses untuk menjadi pribadi yang lebih baik, begitu pula anda");
    }
  
    if (jawaban_salah.length == 0) {
        let notifikasi = document.createElement("div");
        notifikasi.innerText = "Selamat! Anda menjawab semua pertanyaan dengan benar.";
        notifikasi.classList.add("green", "padding");
        document.body.appendChild(notifikasi);
      }
      
      if (jawaban_salah.length >= 1 && jawaban_salah.length <= 8 ) {
        let notifikasi = document.createElement("div");
        notifikasi.innerText = "Anda belum bisa memaafkan" + "\n" + jawaban_salah.join(",\n");
        notifikasi.classList.add("yellow", "padding");
        document.body.appendChild(notifikasi);
      }
      
      if (jawaban_salah.length >= 9 && jawaban_salah.length <= 18 ) {
        let notifikasi = document.createElement("div");
        notifikasi.innerText = "Anda sulit untuk memaafkan sehingga anda harus : " + "\n" + jawaban_salah.join(",\n");
        notifikasi.classList.add("red", "padding");
        document.body.appendChild(notifikasi);
      }
     
  }
  