function renderLatihan() {
    const content = document.querySelector('main .content');
    content.innerHTML =
        ` <article class="gambar latihan">
        <h1>Intensive Training Program</h1>
      </article>
      <marquee
        behavior="alternate"
        direction="right"
        class="animasi art-devider"
      ></marquee>
      <marquee
        behavior="alternate"
        direction="left"
        class="animasi art-devider"
      ></marquee>
      <article class="card ket-service">
        <h2>What is Intensive Training Program?</h2>
        <p>
          Anda dapat mengikuti latihan intensif bersama dengan member lain,
          latihan dilaksanakan 2 kali dalam satu minggu. Waktu, tempat serta
          materi latihan akan dikirim sehari sebelum latihan ke e-mail anda
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
                  Dapat mengikuti latihan intensif bersama anggkota lain
                </li>
                <li>Mendapatkan bimbingan dari para pelatih</li>
                <li>
                  Berhak menggunakan seluruh fasilitas Nekoma Volleball School
                </li>
                <li>Berhak diikutsertakan dalam turnamen</li>
              </ul>
            </td>
          </tr>
        </table>
        <a href="#" class="regist">REGISTER NOW</a>
      </article>`;
}

export default renderLatihan;