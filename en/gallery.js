(() => {
  const gallery = document.querySelector('.training-gallery');
  if (!gallery) return;
  const companies = [...gallery.querySelectorAll('[data-company]')];
  const TOTAL_PHOTOS = gallery.querySelectorAll('[data-gallery-photo]').length, TOTAL_ALBUMS = companies.length;
  gallery.querySelectorAll('[data-gallery-total]').forEach(el => { el.textContent = `${TOTAL_PHOTOS} photos across ${TOTAL_ALBUMS} albums`; });
  document.querySelectorAll('[data-gallery-count]').forEach(el => { el.textContent = TOTAL_PHOTOS; });
  const pick = gallery.querySelector('#gallery-album option[value=""]'); if (pick) pick.textContent = `Choose from all ${TOTAL_ALBUMS} albums`;
  const filters = gallery.querySelector('.training-gallery__filters');
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-industry-filter]');
    if (!button) return;
    const industry = button.dataset.industryFilter;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    companies.forEach(company => { company.hidden = industry !== 'all' && company.dataset.industry !== industry; });
    const visible = companies.filter(company => !company.hidden);
    const count = visible.reduce((n, company) => n + company.querySelectorAll('[data-gallery-photo]').length, 0);
    gallery.querySelector('[role=status]').textContent = industry === 'all' ? `Showing all ${count} photos · ${visible.length} albums` : `Showing ${count} of ${TOTAL_PHOTOS} photos · ${visible.length} of ${TOTAL_ALBUMS} albums`;
    if (industry !== 'all') document.getElementById('gallery-album').value = '';
  });
  const showAll = () => filters.querySelector('[data-industry-filter="all"]').click();
  document.querySelector('[data-show-all-photos]').addEventListener('click', () => {
    showAll();
    document.getElementById('gallery-album').value = '';
  });
  document.getElementById('gallery-album').addEventListener('change', event => {
    const id = event.target.value;
    if (!id) return;
    showAll();
    const heading = document.getElementById(id);
    heading.closest('[data-company]').querySelectorAll('img').forEach(img => { img.loading = 'eager'; });
    heading.scrollIntoView({block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    heading.setAttribute('tabindex', '-1');
    heading.focus({preventScroll:true});
  });
  document.querySelectorAll('.client-logos__item').forEach(link => {
    link.addEventListener('click', () => {
      filters.querySelector('[data-industry-filter="all"]').click();
    });
  });
  const viewer = document.querySelector('.gallery-viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;
  const photo = viewer.querySelector('img');
  const caption = viewer.querySelector('.gallery-viewer__caption');
  const error = viewer.querySelector('.gallery-viewer__error');
  let photos = [], index = 0, opener;
  const display = () => {
    const link = photos[index];
    error.hidden = true;
    photo.src = link.href;
    photo.alt = link.querySelector('img').alt;
    error.querySelector('a').href = link.href;
    caption.textContent = `${index + 1} / ${photos.length} · ${link.dataset.caption.split(' · ').slice(1).join(' · ')}`;
  };
  photo.addEventListener('error', () => { error.hidden = false; });
  gallery.addEventListener('click', event => {
    const link = event.target.closest('[data-gallery-photo]');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    opener = link;
    const company = link.closest('[data-company]');
    photos = [...company.querySelectorAll('[data-gallery-photo]')];
    index = photos.indexOf(link);
    viewer.querySelector('h2').textContent = company.dataset.company;
    display();
    viewer.showModal();
    document.body.classList.add('gallery-is-open');
    viewer.querySelector('.gallery-viewer__close').focus();
  });
  const move = step => { index = (index + step + photos.length) % photos.length; display(); };
  viewer.querySelector('.gallery-viewer__previous').addEventListener('click', () => move(-1));
  viewer.querySelector('.gallery-viewer__next').addEventListener('click', () => move(1));
  viewer.querySelector('.gallery-viewer__close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); }
  });
  viewer.addEventListener('click', event => {
    if (event.target !== viewer) return;
    const rect = viewer.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('gallery-is-open');
    photo.removeAttribute('src');
    if (opener) opener.focus({preventScroll: true});
  });
})();
