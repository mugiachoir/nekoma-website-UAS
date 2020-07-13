function renderRegister() {
  const content = document.querySelector("main .content");
  content.innerHTML = `     <article class="card">
        <form action="" name="formulir">
          <h2>Registration Form</h2>
          <section class="data-pribadi card">
            <div class="form-item">
              <label for="nama">Nama Lengkap</label>
              <input type="text" name="nama" id="nama" class="input-box" placeholder="Nama Anda" required>
            </div>
            <div class="form-item"> <label for="kelamin">Jenis Kelamin</label>
              <div class="form-inline">
                <input type="radio" id="pria" name="kelamin" class="input-radio" value="Laki-laki" checked>
                <label>Laki-laki</label>
              </div>
              <div class="form-inline"> <input type="radio" id="perempuan" name="kelamin" class="input-radio"
                  value="Perempuan">
                <label>Perempuan</label></div>
            </div>

            <div class="form-item"><label for="status">Status</label>
              <div class="form-inline">
                <input type="radio" id="pelajar" name="status" class="input-radio" value="Pelajar/Mahasiswa" checked>
                <label>Pelajar/Mahasiswa</label>
              </div>
              <div class="form-inline"> <input type="radio" id="pekerja" name="status" class="input-radio"
                  value="Pekerja">
                <label>Pekerja</label></div>
            </div>
            <div class="form-item"> <label for="email">Email</label>
              <input type="email" name="email" id="email" class="input-box" placeholder="nekoma.sch@nekoma.com"
                required>
            </div>
          </section>
          <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
          <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
          <section class="data-pendaftar card">
            <div class="form-item">
              <label for="program">Posisi</label>
              <div class="form-check">
                <div class="form-inline"> <input type="checkbox" name="setter" class="input-check" value="(Setter)"><label>Setter</label>
                </div>
                <div class="form-inline"> <input type="checkbox" name="outside" class="input-check"
                    value="(Outside Hitter)" ><label>Outside
                    Hitter</label></div>
                <div class="form-inline"> <input type="checkbox" name="opposite" class="input-check"
                    value="(Opposite)"><label>Opposite</label></div>
                <div class="form-inline"> <input type="checkbox" name="middle" class="input-check"
                    value="(Middle Blocker)"><label>Middle
                    Blocker</label></div>
                <div class="form-inline"> <input type="checkbox" name="libero" class="input-check" value="(Libero)"><label>Libero</label>
                </div>
              </div>
            </div>
            <div class="form-item">
              <label for="program">Program</label>
              <div class="form-check">
                <div class="form-inline"> <input type="checkbox" name="latihan" class="input-check"
                    value="(Intensive Training Program)" ><label>Intensive Training
                    Program</label></div>
                <div class="form-inline"> <input type="checkbox" name="privat" class="input-check"
                    value="(Private Training Program)"><label>Private Training
                    Program</label></div>
                <div class="form-inline"> <input type="checkbox" name="camp" class="input-check"
                    value="(Training Camp)"><label>Training
                    Camp</label></div>
                <div class="form-inline"><input type="checkbox" name="video" class="input-check"
                    value="(Volleyball Tutorial Videos Package)" ><label>Volleyball
                    Tutorial Videos Package</label></div>
                <div class="form-inline"> <input type="checkbox" name="berita" class="input-check"
                    value="(Daily Volleyball News E-Mail Blast)"><label>Daily
                    Volleyball News E-Mail Blast</label></div>
                <div class="form-inline"> <input type="checkbox" name="konsultasi" class="input-check"
                    value="(Volleyball Consultation)"><label>Volleyball
                    Consultation</label></div>
              </div>
            </div>

            <div class="form-item"><label for="status">Metode Pembayaran</label>
              <div class="form-inline">
                <input type="radio" id="transfer" name="pembayaran" class="input-item" value="Transfer" checked>
                <label>Transfer</label>
              </div>
              <div class="form-inline"> <input type="radio" id="cash" name="pembayaran" class="input-item" value="Cash">
                <label>Cash</label></div>
            </div>
            <div class="form-item"> <label for="keterangan">Keterangan</label>
              <textarea class="input-box" name="keterangan" id="keterangan" cols="5" rows="5"></textarea>
            </div>
          </section>
          <div class="tombol">
            <input class="reset button" type="reset" value="Reset"><input class="submit button" type="submit"
              value="Submit">
          </div>
        </form>
      </article>`;
}

export default renderRegister;
