function renderCamp() {
    const content = document.querySelector('main .content');
    content.innerHTML =
        ` <article class="gambar camp">
        <h1>Training Camp</h1>
      </article>
      <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
      <article class="card ket-service">
        <h2>What is Training Camp?</h2>
        <p>
          Setiap 6 bulan, Nekoma Volleyball School akan mengadakan Training Camp selama satu minggu penuh, akan sangat
          banyak kegiatan yang dilakukan, yang pasti akan meningkatkan fisik, skill dan mental para member, karena kuota
          terbatas maka ayo segera mendaftar
        </p>
        <table>
          <tr>
            <th>Harga</th>
            <td>Rp.500.000</td>
          </tr>
          <tr>
            <th>Fasilitas</th>
            <td>
              <ul>
                <li>
                  Mengikuti training camp selama satu minggu
                </li>
                <li>
                  Makan, minum, serta fasilitas harian terjamin
                </li>
                <li>Mendapat pelatihan spesial training camp</li>
                <li>
                  Memperluas pergaulan dengan para calon atlet lain
                </li>
              </ul>
            </td>
          </tr>
        </table>
        <a href="#" class="regist">REGISTER NOW</a>
      </article>`;
}

export default renderCamp;