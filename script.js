// =========================================================
// Sidhiti — main script
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
    cartDrawer.classList.remove('open');
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
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  /* ---------- Sticky header shadow on scroll + scroll-top button ---------- */
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) scrollTopBtn.classList.add('show');
    else scrollTopBtn.classList.remove('show');
  });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Patra list toggle (Vinayaka Chavithi featured kit) ---------- */
  const patraToggle = document.getElementById('patraToggle');
  const patraList = document.getElementById('patraList');
  patraToggle.addEventListener('click', () => {
    patraList.classList.toggle('open');
    patraToggle.classList.toggle('open');
  });

  /* ---------- Kit data ---------- */
  const KITS = [
    {
      id: 'vinayaka',
      name: 'Vinayaka Chavithi Kit (Standard)',
      category: 'festival',
      img: 'ganesh_image_kit.webp',
      imgAlt: 'Lord Ganesha idol',
      badge: 'Bestseller',
      meta: '30+ items · Idol + All 21 Patras',
      desc: 'Clay idol, all 21 patra leaves, modakam mix, kalasha, dhoop and full pooja essentials.',
      price: 1299
    },
    {
      id: 'varalakshmi',
      name: 'Varalakshmi Vratham Kit',
      category: 'vratam',
      img: 'varalakshmivratham_image.png',
      imgAlt: 'Varalakshmi Vratham idol',
      badge: 'Popular',
      meta: '25+ items · Idol + Vastra',
      desc: 'Goddess Lakshmi idol/kalasha face, blouse piece, thread, turmeric, flowers and full samagri.',
      price: 1499
    },
    {
      id: 'diwali',
      name: 'Diwali Lakshmi Pooja Kit',
      category: 'festival',
      img: 'Diwali_image.jpeg',
      imgAlt: 'Diwali Lakshmi idol',
      badge: null,
      meta: '20+ items · Lakshmi-Ganesha Idols',
      desc: 'Lakshmi-Ganesha idols, diyas, cotton wicks, dry fruits, sweets mix and rangoli colours.',
      price: 1399
    },
    {
      id: 'navaratri',
      name: 'Navaratri / Dasara Kit',
      category: 'festival',
      img: 'Durga_pooja.jpg',
      imgAlt: 'DurgaPooja idol',
      badge: 'Seasonal',
      meta: '9-Day Golu &amp; Devi Pooja Essentials',
      desc: 'Nine-day pooja samagri set with daily alankaram items, kumkum, haldi and golu decoration essentials.',
      price: 1799
    },
    {
      id: 'satyanarayana',
      name: 'Satyanarayana Pooja Kit',
      category: 'vratam',
      img: 'Satyanarayanaswamy_image.jpg',
      imgAlt: 'Satyanarayana Pooja ',
      badge: null,
      meta: '28+ items · Katha Book Included',
      desc: 'Complete samagri as per the Satyanarayana Vratha Katha, including panchamrutham items and prasad mix.',
      price: 1199
    },
    {
      id: 'gruhapravesham',
      name: 'Gruhapravesham Kit',
      category: 'occasion',
      img: 'Housewarmimg_image.jpg',
      imgAlt: 'Housewarming idol',
      badge: null,
      meta: '35+ items · Vastu Shanti Samagri',
      desc: 'Mango leaf toran, kalasha set, navadhanyam, homam samagri and everything for a blessed house-warming.',
      price: 2199
    },
    {
      id: 'daily',
      name: 'Daily Pooja Essentials Kit',
      category: 'daily',
      img: 'Pooja_images.webp',
      imgAlt: 'Daily Pooja essentials',
      badge: 'Restock Friendly',
      meta: '15+ items · Monthly Refill',
      desc: 'Agarbatti, dhoop, camphor, cotton wicks, kumkum, turmeric and oil - restocked for your daily prayers.',
      price: 499
    },
    {
      id: 'sankranti',
      name: 'Sankranti / Pongal Kit',
      category: 'festival',
      img: 'Sankranthi_image.jpg',
      imgAlt: 'Sankranti Pongal idol',
      badge: null,
      meta: '18+ items · Muggu &amp; Pongal Items',
      desc: 'Muggu powders, sugarcane, gugulu, new rice, jaggery and pooja items for a joyful harvest festival.',
      price: 999
    }
  ];

  /* ---------- Render kit cards ---------- */
  const kitGrid = document.getElementById('kitGrid');
  kitGrid.innerHTML = KITS.map(kit => `
    <div class="kit-card reveal" data-category="${kit.category}">
      <div class="kit-media">
        ${kit.img ? `<img src="${kit.img}" alt="${kit.imgAlt || kit.name}" class="kit-media-img">` : kit.icon}
        ${kit.badge ? `<span class="kit-badge">${kit.badge}</span>` : ''}
      </div>
      <div class="kit-body">
        <h3>${kit.name}</h3>
        <p class="kit-meta">${kit.meta}</p>
        <p class="kit-desc">${kit.desc}</p>
        <div class="kit-footer">
          <span class="kit-price">₹${kit.price.toLocaleString('en-IN')}</span>
          <button class="kit-add add-cart-btn" data-name="${kit.name}" data-price="${kit.price}">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');

  /* ---------- Filter bar ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.kit-card').forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hide', !show);
      });
    });
  });

  /* ---------- Cart logic ---------- */
  let cart = [];
  const cartCount = document.getElementById('cartCount');
  const cartItemsEl = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartDrawer = document.getElementById('cartDrawer');

  function formatRupees(n){ return '₹' + n.toLocaleString('en-IN'); }

  function renderCart(){
    if (cart.length === 0) {
      cartItemsEl.innerHTML = '<p class="cart-empty" id="cartEmpty">Your cart is empty. Explore our pooja kits!</p>';
    } else {
      cartItemsEl.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
          <div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${formatRupees(item.price)}</div>
          </div>
          <button class="cart-item-remove" data-idx="${idx}" aria-label="Remove item">✕</button>
        </div>
      `).join('');
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalEl.textContent = formatRupees(total);
    cartCount.textContent = cart.length;

    cartItemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        cart.splice(Number(btn.dataset.idx), 1);
        renderCart();
      });
    });
  }

  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-cart-btn');
    if (!addBtn) return;
    const name = addBtn.dataset.name;
    const price = Number(addBtn.dataset.price);
    cart.push({ name, price });
    renderCart();
    openCart();

    const original = addBtn.textContent;
    addBtn.textContent = '✓ Added';
    addBtn.disabled = true;
    setTimeout(() => { addBtn.textContent = original; addBtn.disabled = false; }, 1200);
  });

  function openCart(){
    closeNav();
    cartDrawer.classList.add('open');
    overlay.classList.add('show');
  }
  function closeCart(){
    cartDrawer.classList.remove('open');
    overlay.classList.remove('show');
  }
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('closeCart').addEventListener('click', closeCart);
  overlay.addEventListener('click', () => { closeCart(); closeNav(); });

  renderCart();

  /* ---------- Testimonial slider ---------- */
  const track = document.getElementById('testimonialTrack');
  const slides = track.children;
  const dotsWrap = document.getElementById('testimonialDots');
  let current = 0;

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  }

  function goToSlide(index){
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    [...dotsWrap.children].forEach((d, i) => d.classList.toggle('active', i === current));
  }

  document.getElementById('prevTestimonial').addEventListener('click', () => goToSlide(current - 1));
  document.getElementById('nextTestimonial').addEventListener('click', () => goToSlide(current + 1));

  let autoSlide = setInterval(() => goToSlide(current + 1), 5000);
  const slider = document.querySelector('.testimonial-slider');
  slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
  slider.addEventListener('mouseleave', () => { autoSlide = setInterval(() => goToSlide(current + 1), 5000); });

  /* ---------- Contact form ---------- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const phone = contactForm.phone.value.trim();
    const poojaType = contactForm.poojaType.value;
    const message = contactForm.message.value.trim();
    const enquiryText = [
      'Namaste! I would like to enquire about a pooja kit.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Kit Required: ${poojaType}`,
      message ? `Message: ${message}` : null
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiryText)}`, '_blank', 'noopener');
    formSuccess.classList.add('show');
    contactForm.reset();
    setTimeout(() => formSuccess.classList.remove('show'), 6000);
  });

  /* ---------- Newsletter form ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    input.value = '';
    input.placeholder = '🙏 Subscribed! Thank you.';
    setTimeout(() => { input.placeholder = 'Your email address'; }, 4000);
  });

  /* ---------- WhatsApp links (replace with real business number) ---------- */
  const WHATSAPP_NUMBER = '917993938547';
  const waMessageText = 'Namaste! How would  Sidhiti help you?';
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessageText)}`;
  const whatsappLink = document.getElementById('whatsappLink');
  const whatsappFloat = document.getElementById('whatsappFloat');
  const footerWhatsapp = document.getElementById('footerWhatsapp');
  document.getElementById('waTooltip').textContent = waMessageText;
  [whatsappLink, whatsappFloat, footerWhatsapp].forEach(el => {
    el.addEventListener('click', () => window.open(waUrl, '_blank', 'noopener'));
  });

  /* ---------- Scroll reveal animation ---------- */
  const revealEls = document.querySelectorAll('.reveal, .kit-card, .how-step, .about-inner, .featured-grid');
  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});
