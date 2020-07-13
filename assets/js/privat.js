function renderPrivat() {
    const content = document.querySelector('main .content');
    content.innerHTML =
        ` <article class="gambar privat">
        <h1>Private Training Program</h1>
      </article>
      <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
      <article class="card ket-service">
        <h2>What is Private Training Program?</h2>
        <p>
          Anda akan mendapatkan coach sendiri yang akan berfokus pada latihan dan perkembangan anda, latihan dilakukan 4
          kali dalam sebulan, jadwal latihan lebih fleksibel karena anda bisa mendiskusikannya sendiri dengan pelatih
          pribadi anda
        </p>
        <table>
          <tr>
            <th>Harga</th>
            <td>Rp.400.000/bulan</td>
          </tr>
          <tr>
            <th>Fasilitas</th>
            <td>
              <ul>
                <li>
                  Pelatih pribadi
                </li>
                <li>Konsultasi gratis</li>
                <li>
                  Dapat melihat statistik perkembangan pribadi
                </li>
                <li>
                  Dapat mengatur waktu latihan sendiri
                </li>
              </ul>
            </td>
          </tr>
        </table>
        <a href="#" class="regist">REGISTER NOW</a>
      </article>`;
}

export default renderPrivat;