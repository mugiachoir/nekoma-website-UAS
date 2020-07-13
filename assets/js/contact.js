function renderContact() {
    const content = document.querySelector('main .content');
    content.innerHTML =
        ` <article class="card contact">
        <h2>Kantor Operasional</h2>
        <p>Jl.Tengah Cicadas Ds.Cicadas No.14 Sagalaherang-Subang 4128</p>
        <table>
          <tr>
            <td>Telepon</td>
            <td>: 0851-1638-4444</td>
          </tr>
          <tr>
            <td>Fax</td>
            <td>: 0851-1638-4445</td>
          </tr>
          <tr>
            <td>Whatsapp</td>
            <td>: <a href="https://wa.me/6283816355113">0851-1638-4446</a></td>
          </tr>
          <tr>
            <td>Website</td>
            <td>: <a href="/">www.nekomasch.com</a></td>
          </tr>
          <tr>
            <td>Email</td>
            <td>: <a href="mailto:mugia.choir@gmail.com">nekoma.sch@gmail.com</a></td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>: <a href="https://instagram.com/mugiachoir">nekomaVolley</a></td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>: <a href="https://facebook.com/mugia.choir">Nekoma Sch</a></td>
          </tr>
        </table>
      </article>
      <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
      <article class="card contact">
        <h2>Gymnasium</h2>
        <p>Jl.Raya Jalancagak-Subang No.061 Jalancagak-Subang 41281</p>
        <table>
          <tr>
            <td>Telepon</td>
            <td>: 0838-1635-5113</td>
          </tr>
          <tr>
            <td>Fax</td>
            <td>: 0838-1635-5114</td>
          </tr>
          <tr>
            <td>Whatsapp</td>
            <td>: <a href="https://wa.me/6283816355113">0838-1635-5113</a></td>
          </tr>
          <tr>
            <td>Website</td>
            <td>: <a href="/">www.nekomasch.com</a></td>
          </tr>
          <tr>
            <td>Email</td>
            <td>: <a href="mailto:mugia.miftahul@gmail.com">nekoma.sch@gmail.com</a></td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>: <a href="https://instagram.com/mugiachoir">nekomaVolley</a></td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>: <a href="https://facebook.com/mugia.choir">Nekoma Sch</a></td>
          </tr>
        </table>
      </article>`;
}

export default renderContact;