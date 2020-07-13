function renderService() {
  const content = document.querySelector('main .content');
  content.innerHTML =
    `  <article class="card">
        <h2>What can you get?</h2>
        <p>
          Nekoma Volleyball School menyediakan berbagai layanan, mulai dari
          latihan langsung hingga layanan yang bersifat digital. Anda dapat
          memilih program yang ingin di ikuti saat melakukan registrasi, dan
          biayanya akan di tambahkan pada billing.
        </p>
      </article>
      <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
      <article class="card product">
        <section class="service-item">
          <h2>Intensive Training Program</h2>
          <p>
            Anda dapat mengikuti latihan intensif bersama dengan member lain,
            latihan dilaksanakan 2 kali dalam satu minggu. Waktu, tempat serta
            materi latihan akan dikirim sehari sebelum latihan ke e-mail anda
          </p>
          <a href="#" data-tujuan="latihan">Learn More..</a>
        </section>
        <section class="service-item">
          <h2>Volleyball Tutorial Videos Package</h2>
          <p>
            Anda akan mendapatkan paket lengkap tutorial permainan bola voli original Nekoma Volleyball School
          </p>
          <a href="#" data-tujuan="video">Learn More..</a>
        </section>
        <section class="service-item">
          <h2>Private Training Program</h2>
          <p>
            Anda akan mendapatkan coach sendiri yang akan berfokus pada latihan dan perkembangan anda, latihan dilakukan
            4 kali dalam sebulan, jadwal latihan lebih fleksibel karena anda bisa mendiskusikannya sendiri dengan
            pelatih pribadi anda
          </p>
          <a href="#" data-tujuan="privat">Learn More..</a>
        </section>
        <section class="service-item">
          <h2>Daily Volleyball News E-Mail Blast</h2>
          <p>
            Selalu ketinggalan informasi dan berita di dunia voli? saatnya anda berlangganan program ini,
            kami akan mengirimi anda e-mail tentang berita terbaru di dunia voli setiap harinya
          </p>
          <a href="#" data-tujuan="berita">Learn More..</a>
        </section>
        <section class="service-item">
          <h2>Training Camp</h2>
          <p>
            Setiap 6 bulan, Nekoma Volleyball School akan mengadakan Training Camp selama satu minggu penuh, akan sangat
            banyak
            kegiatan yang dilakukan, yang pasti akan meningkatkan fisik, skill dan mental para member, karena kuota
            terbatas maka ayo
            segera mendaftar
          </p>
          <a href="#" data-tujuan="camp">Learn More..</a>
        </section>
        <section class="service-item">
          <h2>Volleyball Consultation</h2>
          <p>
            Untuk anda yang memiliki masalah dalam bermain voli, silahkan segera daftar program ini,
            kami akan mendengarkan masalah anda, dan membantu menyelesaikannya sebaik mungkin
          </p>
          <a href="#" data-tujuan="konsultasi">Learn More..</a>
        </section>
      </article>`
}

export default renderService;