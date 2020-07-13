function renderGallery() {
  const content = document.querySelector('main .content');
  content.innerHTML =
    ` <article class="card">
        <h2>Galeri</h2>
        <section class="container">
          <img src="assets/img/galeri1.jpg" alt="galeri1" class="jumbo">
          <div class="thumbnail">
            <img src="assets/img/galeri1.jpg" alt="galeri1" class="thumb">
            <img src="assets/img/galeri2.jpg" alt="galeri1" class="thumb">
            <img src="assets/img/galeri3.jpg" alt="galeri1" class="thumb">
            <img src="assets/img/galeri4.jpg" alt="galeri1" class="thumb">
            <img src="assets/img/galeri5.jpg" alt="galeri1" class="thumb">
            <img src="assets/img/galeri6.jpg" alt="galeri1" class="thumb">
          </div>
        </section>
      </article>
      <marquee behavior="alternate" direction="right" class="animasi art-devider"></marquee>
      <marquee behavior="alternate" direction="left" class="animasi art-devider"></marquee>`;
}

export default renderGallery;