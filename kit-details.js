// =========================================================
// Sidhiti — kit details page
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');
  const overlay = document.getElementById('overlay');
  const siteHeader = document.getElementById('header');

  function openNav(){
    mainNav.classList.add('open');
    hamburger.classList.add('active');
    overlay.classList.add('show');
    siteHeader.classList.add('nav-open');
  }
  function closeNav(){
    mainNav.classList.remove('open');
    hamburger.classList.remove('active');
    overlay.classList.remove('show');
    siteHeader.classList.remove('nav-open');
  }
  hamburger.addEventListener('click', () => {
    mainNav.classList.contains('open') ? closeNav() : openNav();
  });
  overlay.addEventListener('click', closeNav);

  /* ---------- WhatsApp float button ---------- */
  const WHATSAPP_NUMBER = '917993938547';
  document.getElementById('whatsappFloat').addEventListener('click', () => {
    const text = 'Namaste! How would Sidhiti help you?';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
  document.getElementById('footerWhatsapp').addEventListener('click', () => {
    const text = 'Namaste! How would Sidhiti help you?';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });

  /* ---------- Render kit details (KITS comes from js/kits-data.js) ---------- */
  const params = new URLSearchParams(window.location.search);
  const kit = KITS.find(k => k.id === params.get('id'));
  const wrap = document.getElementById('kitDetailContent');

  if (!kit) {
    wrap.innerHTML = `
      <div class="kit-not-found">
        <h2>Kit Not Found</h2>
        <p>We couldn't find the kit you're looking for.</p>
        <a href="index.html#kits" class="btn btn-primary">Browse All Kits</a>
      </div>
    `;
    return;
  }

  document.title = `${kit.name} | Sidhiti`;

  const includesHtml = (kit.includes && kit.includes.length) ? `
    <div class="kit-includes">
      <h2>What's Inside This Kit</h2>
      <div class="kit-includes-grid">
        ${kit.includes.map(item => `
          <div class="kit-include-item">
            <span class="kit-include-icon">${item.icon}</span>
            <div>
              <h4>${item.name}</h4>
              <p>${item.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  wrap.innerHTML = `
    <div class="kit-detail-media">
      ${kit.img ? `<img src="${kit.img}" alt="${kit.imgAlt || kit.name}" class="kit-detail-img">` : ''}
      ${kit.badge ? `<span class="kit-badge">${kit.badge}</span>` : ''}
    </div>
    <div class="kit-detail-body">
      <span class="section-tag">${kit.category.charAt(0).toUpperCase() + kit.category.slice(1)} Kit</span>
      <h1>${kit.name}</h1>
      <p class="kit-detail-meta">${kit.meta}</p>
      <p class="kit-detail-desc">${kit.desc}</p>
      <div class="kit-detail-price-row">
        ${kit.oldPrice ? `<span class="kit-price-old">₹${kit.oldPrice.toLocaleString('en-IN')}</span>` : ''}
        <span class="kit-price">₹${kit.price.toLocaleString('en-IN')}</span>
      </div>
      <div class="kit-detail-actions">
        <button class="btn btn-whatsapp" id="enquireBtn">
          <img src="whatsapp_image.png" alt="" class="whatsapp-icon"> Enquire on WhatsApp
        </button>
        <a href="index.html#contact" class="btn btn-outline">Send an Enquiry Form</a>
      </div>
    </div>
    ${includesHtml}
  `;

  document.getElementById('enquireBtn').addEventListener('click', () => {
    const text = `Namaste! I'm interested in the ${kit.name} (₹${kit.price.toLocaleString('en-IN')}). Please share more details.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });

});
