function renderAbout() {
    const content = document.querySelector('main .content');
    content.innerHTML =
        `  <article class="card about">
        <h2>What is Nekoma Volleyball School?</h2>
        <p>Nekoma Volleyball School adalah organisasi yang bergerak di bidang jasa. Jasa yang kami
          sediakan adalah bimbingan, konsultasi, dan hal-hal lain yang berhubungan dengan Voli, Organisasi kami
          berpusat di Kota Subang, namun siapapun yang memiliki keinginan untuk mengikuti program kami,
          dapat mendaftar darimanapun asalnya.</p>
      </article>
      <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
      <article class="card about">
        <h2>Tujuan</h2>
        <p>Dibentuknya organisasi ini dikarenakan banyaknya orang-orang yang ingin bermain voli,
          namun tidak bisa melakukannya dikarenakan berbagai faktor, mulai dari fisik, lingkungan, dan fasilitas.
          Maka dari itu Nekoma Volleyball School siap melayani
          seluruh lapisan masyarakat yang memiliki minat di bidang Voli.</p>
      </article>
      <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
      <article class="card about">
        <h2>Visi</h2>
        <ul>
          <li>Meningkatkan kemampuan para member dalam bermain voli
          <li>Menyalurkan bakat member ke arah yang baik
          <li>mencetak atlet-atlet voli Indonesia
          <li>Menjadi organisasi pengembangan olahraga terbaik di Indonesia
        </ul>
      </article>
      <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
      <article class="card about">
        <h2>Misi</h2>
        <ul>
          <li>Melaksanakan seluruh program dengan sepenuh hati
          <li>Mengefektifkan setiap program
          <li>Memberikan kenyamanan terhadap seluruh member
          <li>Memberikan fasilitas terhadap masyarakat yang memiliki minat terhadap voli
        </ul>
      </article>
      <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
      <article class="card about">
        <h2>Keunggulan</h2>
        <ul>
          <li>Pelatih yang berkompetensi tinggi
          <li>Program yang tidak monoton
          <li>Fleksibelitas Waktu
          <li>Koneksi yang sudah sangat luas
        </ul>
      </article>`;
}

export default renderAbout;