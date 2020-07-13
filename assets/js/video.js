function renderVideo() {
    const content = document.querySelector('main .content');
    content.innerHTML =
        `  <article class="gambar video">
        <h1>Volleyball Tutorial Videos Package</h1>
      </article>
      <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
      <article class="card ket-service">
        <h2>What is Volleyball Tutorial Videos Package?</h2>
        <p>
          Anda akan mendapatkan paket lengkap tutorial permainan bola voli original Nekoma Volleyball School. Video ini
          mencakup teknik, strategi, tips dan hal menarik lainnya
        </p>
        <table>
          <tr>
            <th>Harga</th>
            <td>Rp.150.000</td>
          </tr>
          <tr>
            <th>Fasilitas</th>
            <td>
              <ul>
                <li>
                  Mendapatkan akses ke video-video original Nekoma VBS
                </li>
                <li>Akses berlaku secara permanen</li>
                <li>
                  Dapat mengajukan pertanyaan tentang konten video lewat email
                </li>
              </ul>
            </td>
          </tr>
        </table>
        <a href="#" class="regist">REGISTER NOW</a>
      </article>`;
}

export default renderVideo;