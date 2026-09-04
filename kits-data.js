// =========================================================
// Sidhiti — shared kit catalogue (used by index.html and kit-details.html)
// =========================================================

const KITS = [
  {
    id: 'vinayaka',
    name: 'Vinayaka Chavithi Kit (Standard)',
    category: 'festival',
    img: 'Ganesh_image_kit.webp',
    imgAlt: 'Lord Ganesha idol',
    badge: 'Bestseller',
    meta: '30+ items · Idol + All 21 Patras',
    desc: 'Clay idol, all 21 patra leaves, modakam mix, kalasha, dhoop and full pooja essentials.',
    price: 899,
    oldPrice: 1299,
    includes: [
      { icon: '🕉️', name: 'Ganesha Idol (Clay)', desc: 'Eco-friendly clay idol, ready for visarjanam.' },
      { icon: '🍃', name: 'All 21 Patras', desc: 'Complete Ekavimshati Patra set - every leaf shastra-prescribed.' },
      { icon: '🟡', name: 'Turmeric & Kumkum', desc: 'Pure haldi and kumkum for the pooja rituals.' },
      { icon: '🔥', name: 'Agarbatti & Dhoop', desc: 'Fragrant incense sticks and dhoop for the aarti.' },
      { icon: '🧵', name: 'Cotton Wicks & Camphor', desc: 'For the deepam and karpoora harathi.' },
      { icon: '📖', name: 'Mantra Pushpam Booklet', desc: 'Step-by-step pooja vidhanam and mantras.' }
    ]
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
    price: 1499,
    includes: [
      { icon: '🕉️', name: 'Lakshmi Kalasha Face / Idol', desc: 'Silver-finish kalasha face for the goddess.' },
      { icon: '👗', name: 'Silk Blouse Piece (Vastra)', desc: 'Traditional vastram to adorn the kalasha.' },
      { icon: '🧵', name: 'Sacred Thread (Toranam)', desc: 'Nine-knot thread for the vratham ritual.' },
      { icon: '🟡', name: 'Turmeric & Kumkum', desc: 'Pure haldi and kumkum for alankaram and pooja.' },
      { icon: '🌸', name: 'Fresh Flowers Set', desc: 'Seasonal flowers and garland material.' },
      { icon: '🥥', name: 'Coconut & Betel Leaves', desc: 'For the kalasha setup and tamboolam.' },
      { icon: '📖', name: 'Vratha Katha Book', desc: 'Complete vratham procedure and story booklet.' }
    ]
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
    price: 1399,
    includes: [
      { icon: '🕉️', name: 'Lakshmi-Ganesha Idols', desc: 'Paired idols for the Diwali pooja.' },
      { icon: '🪔', name: 'Clay Diyas Set', desc: 'Hand-made diyas for lighting up the home.' },
      { icon: '🧵', name: 'Cotton Wicks', desc: 'For diyas and the aarti lamp.' },
      { icon: '🥜', name: 'Dry Fruits Pack', desc: 'Assorted dry fruits for prasad and gifting.' },
      { icon: '🍬', name: 'Sweets Mix', desc: 'Ready mix for a quick festive sweet.' },
      { icon: '🎨', name: 'Rangoli Colours', desc: 'Vibrant colour powders for the doorstep rangoli.' }
    ]
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
    price: 1799,
    includes: [
      { icon: '🕉️', name: 'Devi Idol / Photo', desc: 'For the main golu pooja setup.' },
      { icon: '🎎', name: '9-Day Alankaram Items', desc: 'Daily decoration essentials for each Navaratri day.' },
      { icon: '🟡', name: 'Kumkum & Haldi', desc: 'Pure turmeric and kumkum for daily pooja and vayanam.' },
      { icon: '🎨', name: 'Golu Decoration Essentials', desc: 'Backdrop and stage decor material for the golu.' },
      { icon: '🌸', name: 'Daily Pooja Samagri', desc: 'Flowers, agarbatti and dhoop for all nine days.' },
      { icon: '🍬', name: 'Prasad & Vayanam Items', desc: 'For daily naivedyam and suvasini vayanam.' }
    ]
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
    price: 1199,
    includes: [
      { icon: '📖', name: 'Satyanarayana Vratha Katha Book', desc: 'Full katha text for the pooja reading.' },
      { icon: '🥛', name: 'Panchamrutham Items', desc: 'Milk, curd, ghee, honey and sugar essentials for abhishekam.' },
      { icon: '🍬', name: 'Prasad Mix (Sheera)', desc: 'Ready mix for the traditional prasadam.' },
      { icon: '🪔', name: 'Kalasha & Coconut', desc: 'Kalasha, coconut and mango leaves for the setup.' },
      { icon: '🌸', name: 'Flowers & Garlands', desc: 'Fresh flowers for the deity and kalasha.' },
      { icon: '🔥', name: 'Agarbatti & Camphor', desc: 'For the harathi and aarti.' }
    ]
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
    price: 2199,
    includes: [
      { icon: '🌿', name: 'Mango Leaf Toran', desc: 'Traditional torans for the main entrance.' },
      { icon: '🪔', name: 'Kalasha Set', desc: 'Kalasha with coconut and mango leaves for the vastu pooja.' },
      { icon: '🌾', name: 'Navadhanyam (9 Grains)', desc: 'Nine sacred grains for the homam and kalasha.' },
      { icon: '🔥', name: 'Homam Samagri', desc: 'Samith, ghee and havan items for the fire ritual.' },
      { icon: '🟡', name: 'Turmeric, Kumkum & Rice', desc: 'For akshantalu and vastu shanti rituals.' },
      { icon: '🥛', name: 'Milk Boiling Set Essentials', desc: 'For the auspicious milk-boil-over entry ritual.' }
    ]
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
    price: 499,
    includes: [
      { icon: '🔥', name: 'Agarbatti (Incense Sticks)', desc: 'Daily-use fragrant incense sticks.' },
      { icon: '🔥', name: 'Dhoop Sticks', desc: 'For the morning and evening aarti.' },
      { icon: '🕯️', name: 'Camphor', desc: 'Pure camphor for daily harathi.' },
      { icon: '🧵', name: 'Cotton Wicks', desc: 'Ready wicks for the pooja deepam.' },
      { icon: '🟡', name: 'Kumkum & Turmeric', desc: 'Restocked monthly for daily tilakam and pooja.' },
      { icon: '🛢️', name: 'Pooja Oil', desc: 'Sesame/gingelly oil for the lamp.' }
    ]
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
    price: 999,
    includes: [
      { icon: '🎨', name: 'Muggu (Rangoli) Powders', desc: 'Assorted colours for the courtyard muggu.' },
      { icon: '🎋', name: 'Sugarcane', desc: 'Fresh sugarcane sticks for the festive decor and prasad.' },
      { icon: '🔥', name: 'Gugulu (Dhoop Resin)', desc: 'Traditional dhoop resin for the pooja.' },
      { icon: '🌾', name: 'New Harvest Rice', desc: 'Fresh rice for Pongal naivedyam.' },
      { icon: '🍯', name: 'Jaggery', desc: 'Pure jaggery for the sweet Pongal.' },
      { icon: '🌸', name: 'Flowers & Pooja Essentials', desc: 'Turmeric, kumkum and flowers for the harvest pooja.' }
    ]
  }
];
