function renderKonsultasi() {
    const content = document.querySelector('main .content');
    content.innerHTML =
        ` <article class="gambar konsultasi">
        <h1>Volleyball Consultation</h1>
      </article>
      <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
      <article class="card ket-service">
        <h2>What is Volleyball Consultation?</h2>
        <p>
          Untuk anda yang memiliki masalah dalam bermain voli, silahkan segera daftar program ini, kami akan
          mendengarkan masalah anda, dan membantu menyelesaikannya sebaik mungkin
        </p>
        <table>
          <tr>
            <th>Harga</th>
            <td>Rp.50.000/sesi</td>
          </tr>
          <tr>
            <th>Fasilitas</th>
            <td>
              <ul>
                <li>
                  Mendapatkan pandangan ahli akan permasalahan anda
                </li>
                <li>
                  Mendapatkan saran serta tips untuk terus berkembang
                </li>
                <li>Dibantu dalam menyelesaikan permasalahan</li>
                <li>
                  Dapat diarahkan kejalan yang sesuai
                </li>
              </ul>
            </td>
          </tr>
        </table>
        <a href="#" class="regist">REGISTER NOW</a>
      </article>`;
}

export default renderKonsultasi;
