function renderBerita() {
    const content = document.querySelector('main .content');
    content.innerHTML =
        `  <article class="gambar berita">
        <h1>Daily Volleyball News E-Mail Blast</h1>
      </article>
      <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
      <article class="card ket-service">
        <h2>What is Daily Volleyball News E-Mail Blast?</h2>
        <p>
          Selalu ketinggalan informasi dan berita di dunia voli? saatnya anda berlangganan program ini, kami akan
          mengirimi anda e-mail tentang berita terbaru di dunia voli setiap harinya
        </p>
        <table>
          <tr>
            <th>Harga</th>
            <td>Rp.50.000/bulan</td>
          </tr>
          <tr>
            <th>Fasilitas</th>
            <td>
              <ul>
                <li>
                  Mendapat email berisi berita-berita Voli setiap harinya
                </li>
                <li>
                  Selalu up to date akan berita Voli di seluruh dunia
                </li>
                <li>
                  Mendapatkan kemudahan dalam mencari informasi
                </li>
              </ul>
            </td>
          </tr>
        </table>
        <a href="#" class="regist">REGISTER NOW</a>
      </article>`;
}

export default renderBerita;