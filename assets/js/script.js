import renderHome from "./home.js";
import renderService from "./service.js";
import renderRegister from "./register.js";
import renderGallery from "./gallery.js";
import renderAbout from "./about.js";
import renderContact from "./contact.js";
import renderLatihan from "./latihan.js";
import renderVideo from "./video.js";
import renderPrivat from "./privat.js";
import renderBerita from "./berita.js";
import renderCamp from "./camp.js";
import renderKonsultasi from "./konsultasi.js";
// NAVIGASI
const sidebar = document.querySelector("nav ul");
const toggle = document.querySelector(".menu-toggle");
const all = document.querySelector("main");
const first = toggle.querySelector("span:nth-child(1)");
const second = toggle.querySelector("span:nth-child(2)");
const third = toggle.querySelector("span:nth-child(3)");
const brand = document.querySelectorAll("nav .logo a");
const menuService = document.querySelector('nav  ul li:nth-child(3) a');
const menuLearn = document.querySelector('nav  ul li:nth-child(2) a');
const contentScroll = document.querySelector("body main .content").offsetTop - 70;
toggle.addEventListener("click", () => {
  first.classList.toggle("topburger");
  third.classList.toggle("bottomburger");
  second.classList.toggle("midburger");
  sidebar.classList.toggle("slide");
  all.classList.toggle("hilangkan");
});

const menu = document.querySelectorAll("nav ul li a");
menu.forEach((m) => {
  m.addEventListener("click", (event) => {
    menu.forEach((men) => {
      if (men === event.target) {
        event.target.style.fontWeight = "bold";
        event.target.style.color = "white";
        if (event.target.innerHTML == "Home") renderHome();
        else if (event.target.innerHTML == "Service") renderService();
        else if (event.target.innerHTML == "Register") renderRegister();
        else if (event.target.innerHTML == "Gallery") renderGallery();
        else if (event.target.innerHTML == "About") renderAbout();
        else renderContact();
      } else {
        men.style.fontWeight = "inherit";
        men.style.color = "rgb(180, 180, 180)";
      }
    });
    sidebar.classList.remove("slide");
    all.classList.remove("hilangkan");
    first.classList.remove("topburger");
    third.classList.remove("bottomburger");
    second.classList.remove("midburger");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    window.scroll({
      top: contentScroll,
      left: 0,
      behavior: "smooth"
    });
    event.preventDefault();
  });
});

brand.forEach((b) => {
  b.addEventListener("click", (event) => {
    const home = document.querySelector("nav ul li a:nth-child(1)");
    menu.forEach((men) => {
      men.style.fontWeight = "inherit";
      men.style.color = "rgb(180, 180, 180)";
    });
    home.style.fontWeight = "bold";
    home.style.color = "white";
    renderHome();
    event.preventDefault();
  });
});
// AKHIR NAVIGASI
// MARQUE

setInterval(() => {
  const marqueArt = document.querySelectorAll(".animasi.art-devider");
  marqueArt.forEach((marq) => {
    let sinyal = "";
    for (let x = 0; x < 10; x++) {
      sinyal += "|I|I|I|I|I|I|I|I|I|I|I|I|I";
    }
    marq.innerHTML = sinyal;
  });
}, 500);
//AKHIR MARQUE
// SIDEBAR KIRI
const tombol = document.querySelectorAll(".aside1 .contain-side div img");
tombol.forEach((tom) => {
  tom.addEventListener("mouseover", (event) => {
    event.target.style.padding = "5px";
    event.target.style.opacity = "1";
  });
  tom.addEventListener("mouseout", (event) => {
    event.target.style.padding = "0px";
    event.target.style.borderRadius = "0px";
    event.target.style.opacity = "0.5";
  });
});

// MUSIK
const mainkan = document.querySelector(".play");
mainkan.addEventListener("click", () => {
  document.getElementById("bgsound").play();
});
const berhenti = document.querySelector(".stop");
berhenti.addEventListener("click", () => {
  document.getElementById("bgsound").pause();
});
// AKHIR SIDEBAR KIRI
// SERVICE
const servis = document.querySelectorAll(".contain-side .item-overflow a");
servis.forEach((s) => {
  s.addEventListener("click", (event) => {
    const serve = event.target.dataset.tujuan;
    if (serve === "latihan") renderLatihan();
    else if (serve === "privat") renderPrivat();
    else if (serve === "camp") renderCamp();
    else if (serve === "video") renderVideo();
    else if (serve === "konsultasi") renderKonsultasi();
    else renderBerita();
    menu.forEach(men => {
      men.style.fontWeight = "inherit";
      men.style.color = "rgb(180, 180, 180)";
    });
    menuLearn.style.color = "white";
    menuLearn.style.fontWeight = "bold";
    event.preventDefault();
  });
});

setInterval(() => {
  const serviceItem = document.querySelectorAll(".product .service-item a");
  serviceItem.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(event.target);
      const serve = event.target.dataset.tujuan;
      if (serve === "latihan") renderLatihan();
      else if (serve === "privat") renderPrivat();
      else if (serve === "camp") renderCamp();
      else if (serve === "video") renderVideo();
      else if (serve === "konsultasi") renderKonsultasi();
      else renderBerita();
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      window.scroll({
        top: contentScroll,
        left: 0,
        behavior: "smooth"
      });
      event.preventDefault();
    });
  });
}, 500);

const mainLearn = document.querySelector("header .hero-words .learn");
mainLearn.addEventListener("click", (event) => {
  menu.forEach(men => {
    men.style.fontWeight = "inherit";
    men.style.color = "rgb(180, 180, 180)";
  });
  menuLearn.style.color = "white";
  menuLearn.style.fontWeight = "bold";
  window.scroll({
    top: contentScroll,
    left: 0,
    behavior: "smooth"
  });
  renderService();
  event.preventDefault();
});
// AKHIR SERVICE
// GALERI
setInterval(() => {
  const jumbo = document.querySelector(".content .container .jumbo");
  const thumbnail = document.querySelectorAll(".thumbnail .thumb");
  const container = document.querySelector(".content .container");
  if (jumbo !== null && (thumbnail !== null) & (container !== null)) {
    container.addEventListener("click", (event) => {
      if (event.target.className == "thumb") {
        jumbo.src = event.target.src;
        jumbo.classList.add("fade");
        setTimeout(() => {
          jumbo.classList.remove("fade");
        }, 500);
        thumbnail.forEach((thumb) => {
          thumb.className = "thumb";
        });
        event.target.classList.add("active");
      }
    });
  }
}, 500);
// AKHIR GALERI
// FORMULIR
setInterval(() => {
  const regist = document.querySelector(".ket-service .regist");
  if (regist !== null) {
    regist.addEventListener("click", (event) => {
      renderRegister();
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      window.scroll({
        top: contentScroll,
        left: 0,
        behavior: "smooth"
      });
      event.preventDefault();
    });
  }
}, 500);

const mainRegist = document.querySelector("header .hero-words .regist");
mainRegist.addEventListener("click", (event) => {
  menu.forEach(men => {
    men.style.fontWeight = "inherit";
    men.style.color = "rgb(180, 180, 180)";
  });
  menuService.style.color = "white";
  menuService.style.fontWeight = "bold";
  window.scroll({
    top: contentScroll,
    left: 0,
    behavior: "smooth"
  });
  renderRegister();
  event.preventDefault();
});

const subInterval = setInterval(() => {
  const submit = document.querySelector("article form input.submit");
  if (submit !== null) {
    submit.addEventListener("click", (event) => {
      clearInterval(subInterval);
      const nama = document.formulir.nama.value;
      if (nama == "") {
        alert("Nama belum diisi");
        return;
      }
      const pria = document.getElementById("pria");
      const perempuan = document.getElementById("perempuan");
      let kelamin = "";
      if (pria.checked == true) {
        kelamin = pria.value;
      } else {
        kelamin = perempuan.value;
      }
      const pelajar = document.getElementById("pelajar");
      const pekerja = document.getElementById("pekerja");
      let status = "";
      if (pelajar.checked == true) {
        status = pelajar.value;
      } else {
        status = pekerja.value;
      }
      const email = document.formulir.email.value;
      if (email == "") {
        alert("Email belum diisi");
        return;
      }
      let setter = "";
      let outside = "";
      let opposite = "";
      let middle = "";
      let libero = "";
      const posisi = new Array();

      if (document.formulir.setter.checked == true) {
        setter = document.formulir.setter.value;
        posisi.push(setter);
      }
      if (document.formulir.outside.checked == true) {
        outside = document.formulir.outside.value;
        posisi.push(outside);
      }
      if (document.formulir.opposite.checked == true) {
        opposite = document.formulir.opposite.value;
        posisi.push(opposite);
      }
      if (document.formulir.middle.checked == true) {
        middle = document.formulir.middle.value;
        posisi.push(middle);
      }
      if (document.formulir.libero.checked == true) {
        libero = document.formulir.libero.value;
        posisi.push(libero);
      }
      let latihan = "";
      let privat = "";
      let berita = "";
      let video = "";
      let camp = "";
      let konsultasi = "";
      const program = new Array();

      if (document.formulir.latihan.checked == true) {
        latihan = document.formulir.latihan.value;
        program.push(latihan);
      }
      if (document.formulir.privat.checked == true) {
        privat = document.formulir.privat.value;
        program.push(privat);
      }
      if (document.formulir.berita.checked == true) {
        berita = document.formulir.berita.value;
        program.push(berita);
      }
      if (document.formulir.video.checked == true) {
        video = document.formulir.video.value;
        program.push(video);
      }
      if (document.formulir.camp.checked == true) {
        camp = document.formulir.camp.value;
        program.push(camp);
      }
      if (document.formulir.konsultasi.checked == true) {
        konsultasi = document.formulir.konsultasi.value;
        program.push(konsultasi);
      }
      const transfer = document.getElementById("transfer");
      const cash = document.getElementById("cash");
      let metode = "";
      if (transfer.checked == true) {
        metode = transfer.value;
      } else {
        metode = cash.value;
      }
      const keterangan = document.formulir.keterangan.value;
      let message = "";
      if (metode == "Transfer") {
        message =
          "<h4>Silahkan Melakukan Pembayaran Ke: 90390031862 (BTPN)</h4><p>Registrasi akan berhasil setelah pembayaran dilakukan.</p>";
      } else {
        message =
          "<h4>Silahkan Melakukan Pembayaran Ke: Kantor Operasional (Jl.Tengah Cicadas Ds.Cicadas No.14 Sagalaherang-Subang 41282)</h4><p>Registrasi akan berhasil setelah pembayaran dilakukan.</p>";
      }
      const content = document.querySelector("body main .content");
      content.innerHTML = `
    <article class="card checkout">
    <div class="welcome-message"><H2>YOUR DATA HAS BEEN RECORDED</H2></DIV>
    <table>
    <tr>
      <th>Nama</th>
      <td>: ${nama}</td>
    </tr>
    <tr>
      <th>Jenis Kelamin</th>
      <td>: ${kelamin}</td>
    </tr>
    <tr>
      <th>Status</th>
      <td>: ${status}</td>
    </tr>
    <tr>
    <th>Email</th>
    <td>: <a href="mailto:${email}">${email}</a></td>
    </tr>
    <tr>
      <th>Posisi</th>
      <td>: ${posisi}</td>
    </tr>
    <tr>
    <th>Program</th>
    <td>: ${program}</td>
  </tr>
  <tr>
  <th>Metode Pembayaran</th>
  <td>: ${metode}</td>
</tr>
<tr>
<th>Keterangan</th>
<td>: ${keterangan}</td>
</tr>
    </table>
    <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>
    ${message}
    </article>`;
      event.preventDefault();
    });
  }
}, 5000);