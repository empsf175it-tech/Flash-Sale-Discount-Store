/* ==========================================================================
   VOLTDROP — LUXURY & CYBER TECH FLASH SALE STORE
   Interactive Engine (Vanilla JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Product Database ---
  const PRODUCTS = [
    {
      id: 'volt-1',
      title: 'AeroSpatial Pro ANC Wireless',
      category: 'audio',
      categoryLabel: 'Acoustics',
      originalPrice: 399,
      salePrice: 129,
      discount: 68,
      stock: 3,
      stockMax: 25,
      rating: 4.9,
      reviews: 1248,
      badge: 'FLASH DEAL',
      badgeClass: '',
      image: 'assets/images/flash_cyber_headset.svg',
      featuredFlash: true,
      featuredDeal: false,
      description: 'Audiophile-grade 50mm custom beryllium dynamic drivers paired with next-generation neural active noise cancellation. Features sub-5ms low-latency wireless transmission and an anatomical memory foam chassis.',
      specs: ['96kHz / 24-Bit Lossless Audio', '45h Playtime w/ Fast Fuel', 'Dual Beamforming Neural Mics', 'Grade 5 Titanium Pivot Arms']
    },
    {
      id: 'volt-2',
      title: 'Quantum75 Frosted RGB Keyboard',
      category: 'battlestations',
      categoryLabel: 'Battlestations',
      originalPrice: 249,
      salePrice: 79,
      discount: 68,
      stock: 5,
      stockMax: 30,
      rating: 4.8,
      reviews: 892,
      badge: 'HOT DROP',
      badgeClass: 'cyan',
      image: 'assets/images/flash_mech_keyboard.svg',
      featuredFlash: true,
      featuredDeal: false,
      description: 'Gasket-mounted mechanical gaming keyboard with CNC-machined frosted polycarbonate chassis, factory pre-lubed linear switches, and an 8,000Hz polling rate engine for instantaneous response.',
      specs: ['8000Hz Hyper-Polling Engine', 'Frosted Double-Shot PBT Keycaps', 'Solid Brass Rotary Volume Dial', 'Tri-Mode 2.4GHz + BT 5.3 + USB-C']
    },
    {
      id: 'volt-3',
      title: 'ChronoVolt Titanium Cyberwatch',
      category: 'wearables',
      categoryLabel: 'Wearables',
      originalPrice: 549,
      salePrice: 189,
      discount: 66,
      stock: 2,
      stockMax: 20,
      rating: 5.0,
      reviews: 2104,
      badge: 'ALMOST GONE',
      badgeClass: 'lime',
      image: 'assets/images/flash_smartwatch.svg',
      featuredFlash: true,
      featuredDeal: false,
      description: 'Chiseled Grade 5 titanium aerospace casing with sapphire crystal shield and 2,000-nit curved micro-OLED panel. Includes tactical continuous biometric telemetry, SpO2 radar, and 14-day energy reserve.',
      specs: ['Grade 5 Titanium Armor', 'Sapphire Glass 2,000-Nit Peak', 'Continuous ECG, HRV & Vitals', '50-Meter Submersible Waterproof']
    },
    {
      id: 'volt-4',
      title: 'ApexViper 49g Ultralight Mouse',
      category: 'battlestations',
      categoryLabel: 'Battlestations',
      originalPrice: 159,
      salePrice: 54,
      discount: 66,
      stock: 7,
      stockMax: 40,
      rating: 4.9,
      reviews: 674,
      badge: 'FLASH DEAL',
      badgeClass: '',
      image: 'assets/images/flash_gaming_mouse.svg',
      featuredFlash: true,
      featuredDeal: false,
      description: 'Featherweight 49-gram ergonomic honeycomb structure designed for high-velocity competitive esports. Equipped with a 26,000 DPI optical sensor and 100-million click optical switches.',
      specs: ['49g Magnesium-Composite Shell', '26,000 DPI 650 IPS Sensor', 'Optical Microswitch Actuation', '100% Virgin Grade PTFE Skates']
    },
    {
      id: 'volt-5',
      title: 'Valkyrie 4K Gimbal Drone',
      category: 'optics',
      categoryLabel: 'Optics & Drones',
      originalPrice: 899,
      salePrice: 299,
      discount: 67,
      stock: 4,
      stockMax: 25,
      rating: 4.9,
      reviews: 930,
      badge: "EDITOR'S PICK",
      badgeClass: 'cyan',
      image: 'assets/images/deal_drone.svg',
      featuredFlash: false,
      featuredDeal: true,
      description: 'Sub-249g folding carbon-fiber drone equipped with a mechanical 3-axis stabilized 4K HDR camera gimbal, 360° omnidirectional LiDAR obstacle evasion, and a 45-minute continuous flight envelope.',
      specs: ['4K 60fps HDR Raw Video', '12km Low-Latency Transmission', '360° Omni LiDAR Collision Avoidance', 'Level 7 High-Wind Resistance']
    },
    {
      id: 'volt-6',
      title: 'Orbital Mag-Lev Acoustic Sphere',
      category: 'audio',
      categoryLabel: 'Acoustics',
      originalPrice: 349,
      salePrice: 119,
      discount: 66,
      stock: 6,
      stockMax: 30,
      rating: 4.8,
      reviews: 512,
      badge: 'TRENDING',
      badgeClass: 'lime',
      image: 'assets/images/deal_speaker.svg',
      featuredFlash: false,
      featuredDeal: true,
      description: 'Zero-friction magnetic levitation acoustic sphere delivering 360-degree omnidirectional acoustic dispersion with an illuminated reactive spectrum ring and deep neodymium subwoofer base.',
      specs: ['360° Omnidirectional Dispersion', 'True Magnetic Suspension Float', 'RGB Music Reactive Spectrum Ring', '18-Hour Continuous Playtime']
    },
    {
      id: 'volt-7',
      title: 'NeuroVision Spatial VR Goggles',
      category: 'optics',
      categoryLabel: 'Optics & Drones',
      originalPrice: 1199,
      salePrice: 449,
      discount: 63,
      stock: 3,
      stockMax: 15,
      rating: 4.9,
      reviews: 1450,
      badge: 'BEST DEAL',
      badgeClass: '',
      image: 'assets/images/deal_vr_headset.svg',
      featuredFlash: false,
      featuredDeal: true,
      description: 'Dual 4K micro-OLED spatial computing displays boasting 120Hz refresh rates, true spatial audio mapping, and ultra-high-definition passthrough vision with 12 onboard sub-millimeter tracking sensors.',
      specs: ['Dual 4K Micro-OLED Displays', '120Hz Ultra-Fluid Refresh Rate', 'Sub-Millimeter Inside-Out Tracking', 'Ultralight 280g Carbon Chasis']
    },
    {
      id: 'volt-8',
      title: 'VoltCore 140W Cyber Station',
      category: 'battlestations',
      categoryLabel: 'Battlestations',
      originalPrice: 189,
      salePrice: 65,
      discount: 66,
      stock: 9,
      stockMax: 50,
      rating: 4.9,
      reviews: 780,
      badge: 'TRENDING',
      badgeClass: 'cyan',
      image: 'assets/images/deal_powerbank.svg',
      featuredFlash: false,
      featuredDeal: true,
      description: 'Transparent cybernetic casing revealing real-time gallium nitride fast-charging circuitry, digital OLED wattmeter, and a 27,000mAh airline-compliant high-density power cell.',
      specs: ['140W PD 3.1 Fast Charge Protocol', 'Real-Time Color OLED Telemetry', '27,000mAh Airline Compliant', 'Quad Concurrent High-Speed Ports']
    },
    {
      id: 'volt-9',
      title: 'Horizon 49" Curved OLED Display',
      category: 'battlestations',
      categoryLabel: 'Battlestations',
      originalPrice: 1499,
      salePrice: 699,
      discount: 53,
      stock: 2,
      stockMax: 12,
      rating: 5.0,
      reviews: 420,
      badge: 'PREMIUM DROP',
      badgeClass: '',
      image: 'assets/images/shop_curved_monitor.svg',
      featuredFlash: false,
      featuredDeal: false,
      description: 'Breathtaking 32:9 dual QHD curved OLED display with 240Hz refresh rate, 0.03ms instant response time, and ambient synchronized wall illumination for maximum immersion.',
      specs: ['49-Inch 5120x1440 Dual QHD Panel', '240Hz 0.03ms Instant Response', 'Quantum Dot Self-Lit OLED', 'Integrated Dual-PC KVM Switch']
    },
    {
      id: 'volt-10',
      title: 'TitanHalo Biometric Smart Ring',
      category: 'wearables',
      categoryLabel: 'Wearables',
      originalPrice: 299,
      salePrice: 109,
      discount: 64,
      stock: 8,
      stockMax: 45,
      rating: 4.7,
      reviews: 310,
      badge: "EDITOR'S PICK",
      badgeClass: 'lime',
      image: 'assets/images/shop_smart_ring.svg',
      featuredFlash: false,
      featuredDeal: false,
      description: 'Seamless aerospace titanium ring continuously tracking sleep architecture, daily recovery scores, and core temperature changes with zero recurring monthly subscription fees.',
      specs: ['Medical-Grade Infrared Sensors', 'Waterproof Submersible to 100m', '7-Day Continuous Battery Life', 'Zero Subscription Ever Required']
    },
    {
      id: 'volt-11',
      title: 'AuraStream Studio Broadcast Mic',
      category: 'audio',
      categoryLabel: 'Acoustics',
      originalPrice: 229,
      salePrice: 89,
      discount: 61,
      stock: 5,
      stockMax: 35,
      rating: 4.9,
      reviews: 530,
      badge: 'STUDIO DROP',
      badgeClass: 'cyan',
      image: 'assets/images/shop_mic.svg',
      featuredFlash: false,
      featuredDeal: false,
      description: '24-bit 192kHz professional condenser microphone capsule with built-in internal pop filter, analog optical limiter, and illuminated RGB acoustic shock ring.',
      specs: ['192kHz / 24-Bit Studio Grade ADC', 'Built-in Hardware Optical Limiter', 'Zero-Latency Headphone Monitoring', 'Tap-to-Mute LED Ring Status']
    },
    {
      id: 'volt-12',
      title: 'VoltDrop Flagship Headphones',
      category: 'audio',
      categoryLabel: 'Acoustics',
      originalPrice: 599,
      salePrice: 199,
      discount: 67,
      stock: 1,
      stockMax: 10,
      rating: 5.0,
      reviews: 3410,
      badge: 'HERO VAULT',
      badgeClass: '',
      image: 'assets/images/hero_showcase.svg',
      featuredFlash: false,
      featuredDeal: false,
      description: 'Our pinnacle acoustic drop. Planar magnetic diaphragms enclosed in carbon-fiber acoustic chambers with real-time lossless spatial binaural calibration.',
      specs: ['True Planar Magnetic Transducers', 'Lossless Spatial Head Tracking', 'Handcrafted Carbon-Fiber Housing', '60-Hour Playtime & USB-C DAC']
    }
  ];

  // --- Shopping Cart State ---
  let cart = [];
  let couponApplied = null;

  // --- Initialize UI Grids ---
  renderFlashSaleGrid();
  renderBestDealsGrid();
  renderShopGrid();

  // --- Initialize Event Listeners & Controllers ---
  initCountdownTimers();
  initTiltPhysics();
  initShopFilters();
  initModal();
  initCartDrawer();
  initForms();
  initHeaderScroll();
  initScrollSpy();
  initScrollToTop();
  initLiveTickerAlerts();



  // ==========================================================================
  // CARD RENDERING FUNCTIONS
  // ==========================================================================

  function createCardHTML(p) {
    const stockPercent = Math.round(((p.stockMax - p.stock) / p.stockMax) * 100);
    return `
      <div class="tilt-card" data-product-id="${p.id}">
        <span class="card-badge-top ${p.badgeClass}">${p.badge}</span>
        <span class="card-discount-tag">-${p.discount}%</span>
        
        <div class="card-media-box">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
        </div>

        <div class="card-info">
          <span class="card-category">${p.categoryLabel}</span>
          <h3 class="card-title">${p.title}</h3>
          
          <div class="card-rating">
            <span>★★★★★</span>
            <span class="rating-count">(${p.rating} • ${p.reviews.toLocaleString()})</span>
          </div>

          <div class="card-scarcity">
            <div class="scarcity-label">
              <span>⚡ Only ${p.stock} left</span>
              <span>${stockPercent}% Claimed</span>
            </div>
            <div class="scarcity-meter">
              <div class="scarcity-fill" style="width: ${stockPercent}%"></div>
            </div>
          </div>

          <div class="card-pricing">
            <span class="price-current">$${p.salePrice}</span>
            <span class="price-original">$${p.originalPrice}</span>
          </div>

          <div class="card-actions">
            <button class="btn-grab" data-action="grab" data-id="${p.id}">Grab Deal</button>
            <button class="btn-quick-view" data-action="view" data-id="${p.id}" title="Quick View" aria-label="Quick View ${p.title}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderFlashSaleGrid() {
    const container = document.getElementById('flash-sale-grid');
    if (!container) return;
    const flashItems = PRODUCTS.filter(p => p.featuredFlash);
    container.innerHTML = flashItems.map(p => createCardHTML(p)).join('');
  }

  function renderBestDealsGrid() {
    const container = document.getElementById('best-deals-grid');
    if (!container) return;
    const dealItems = PRODUCTS.filter(p => p.featuredDeal);
    container.innerHTML = dealItems.map(p => createCardHTML(p)).join('');
  }

  function renderShopGrid(filteredProducts = PRODUCTS) {
    const container = document.getElementById('shop-grid');
    const countDisplay = document.getElementById('filter-results-count');
    if (!container) return;

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filteredProducts.length} drops`;
    }

    if (filteredProducts.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-family: var(--font-display); font-size: 1.5rem; color: #FFF; margin-bottom: 0.5rem;">No drops found</h3>
          <p>Try clearing your search query or adjusting price/discount filters.</p>
        </div>
      `;
      return;
    }

    let cardsHTML = '';
    filteredProducts.forEach((p) => {
      cardsHTML += createCardHTML(p);
    });

    container.innerHTML = cardsHTML;
    // Re-bind tilt physics for newly rendered cards
    initTiltPhysics();
  }

  // ==========================================================================
  // 3D TILT EFFECT ENGINE
  // ==========================================================================

  function initTiltPhysics() {
    const cards = document.querySelectorAll('.tilt-card, .category-card, .hero-card-showcase');

    // Skip tilt on touch devices for maximum performance
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    cards.forEach(card => {
      // Remove prior listeners if re-rendering
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    function handleMouseMove(e) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation angles (max 10 degrees)
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      // Update CSS custom property for specular radial glow
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`;
    }

    function handleMouseLeave(e) {
      const card = e.currentTarget;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }
  }

  // ==========================================================================
  // LIVE COUNTDOWN TIMER ENGINE
  // ==========================================================================

  function initCountdownTimers() {
    // Set drop target 24-hour cycle
    let targetTime = Date.now() + (5 * 3600 + 42 * 60 + 19) * 1000;

    function update() {
      const now = Date.now();
      let diff = targetTime - now;

      if (diff <= 0) {
        // Reset rolling cycle
        targetTime = Date.now() + 24 * 3600 * 1000;
        diff = targetTime - now;
      }

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const daysElem = document.getElementById('timer-days');
      const hoursElem = document.getElementById('timer-hours');
      const minsElem = document.getElementById('timer-mins');
      const secsElem = document.getElementById('timer-secs');
      const heroTimerElems = document.querySelectorAll('.hero-countdown-strip-val, #hero-countdown-strip');

      if (daysElem) daysElem.textContent = '00';
      if (hoursElem) hoursElem.textContent = String(hours).padStart(2, '0');
      if (minsElem) minsElem.textContent = String(minutes).padStart(2, '0');
      if (secsElem) secsElem.textContent = String(seconds).padStart(2, '0');

      const timeFormatted = `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
      heroTimerElems.forEach(elem => { elem.textContent = timeFormatted; });
    }

    update();
    setInterval(update, 1000);
  }

  // ==========================================================================
  // SHOP FILTERING & SEARCH ENGINE
  // ==========================================================================

  function initShopFilters() {
    let currentCategory = 'all';
    let currentMaxPrice = 1500;
    let currentMinDiscount = 0;
    let currentSort = 'featured';
    let searchQuery = '';

    const searchInput = document.getElementById('shop-search');
    const categoryPills = document.querySelectorAll('.filter-pill');
    const priceSlider = document.getElementById('price-range-slider');
    const priceDisplay = document.getElementById('price-slider-val');
    const discountSelect = document.getElementById('discount-filter-select');
    const sortSelect = document.getElementById('sort-select');

    // Category pills click
    categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategory = pill.dataset.category;
        applyFilters();
      });
    });

    // Category section card click handling (auto-scroll to shop and filter)
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.dataset.category;
        const targetPill = document.querySelector(`.filter-pill[data-category="${cat}"]`);
        if (targetPill) {
          categoryPills.forEach(p => p.classList.remove('active'));
          targetPill.classList.add('active');
          currentCategory = cat;
          applyFilters();
          document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Price Slider
    if (priceSlider) {
      priceSlider.addEventListener('input', (e) => {
        currentMaxPrice = Number(e.target.value);
        if (priceDisplay) priceDisplay.textContent = `$${currentMaxPrice}`;
        applyFilters();
      });
    }

    // Discount Select
    if (discountSelect) {
      discountSelect.addEventListener('change', (e) => {
        currentMinDiscount = Number(e.target.value);
        applyFilters();
      });
    }

    // Sort Select
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        applyFilters();
      });
    }

    // Search Input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyFilters();
      });
    }

    function applyFilters() {
      let results = PRODUCTS.filter(p => {
        // Category
        if (currentCategory !== 'all' && p.category !== currentCategory) return false;
        // Price
        if (p.salePrice > currentMaxPrice) return false;
        // Discount
        if (p.discount < currentMinDiscount) return false;
        // Search
        if (searchQuery) {
          const matchTitle = p.title.toLowerCase().includes(searchQuery);
          const matchCat = p.categoryLabel.toLowerCase().includes(searchQuery);
          const matchDesc = p.description.toLowerCase().includes(searchQuery);
          if (!matchTitle && !matchCat && !matchDesc) return false;
        }
        return true;
      });

      // Sorting
      if (currentSort === 'price-asc') {
        results.sort((a, b) => a.salePrice - b.salePrice);
      } else if (currentSort === 'price-desc') {
        results.sort((a, b) => b.salePrice - a.salePrice);
      } else if (currentSort === 'discount-desc') {
        results.sort((a, b) => b.discount - a.discount);
      } else if (currentSort === 'rating-desc') {
        results.sort((a, b) => b.rating - a.rating);
      }

      renderShopGrid(results);
    }
  }

  // ==========================================================================
  // PRODUCT DETAILS MODAL OVERLAY
  // ==========================================================================

  function initModal() {
    const modalBackdrop = document.getElementById('product-modal-backdrop');
    const closeBtn = document.getElementById('modal-close-btn');

    if (!modalBackdrop) return;

    // Delegated click on document for View or Grab buttons
    document.addEventListener('click', (e) => {
      const grabBtn = e.target.closest('[data-action="grab"]');
      const viewBtn = e.target.closest('[data-action="view"]');
      const cardMedia = e.target.closest('.card-media-box, .card-title');

      if (grabBtn) {
        const id = grabBtn.dataset.id;
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) {
          addToCart(prod, 1);
          openCartDrawer();
        }
        return;
      }

      if (viewBtn) {
        const id = viewBtn.dataset.id;
        openProductModal(id);
        return;
      }

      if (cardMedia) {
        const card = cardMedia.closest('.tilt-card');
        if (card && card.dataset.productId) {
          openProductModal(card.dataset.productId);
        }
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeModal();
      }
    });

    function openProductModal(productId) {
      const prod = PRODUCTS.find(p => p.id === productId);
      if (!prod) return;

      document.getElementById('modal-img').src = prod.image;
      document.getElementById('modal-img').alt = prod.title;
      document.getElementById('modal-category').textContent = prod.categoryLabel;
      document.getElementById('modal-title').textContent = prod.title;
      document.getElementById('modal-desc').textContent = prod.description;
      document.getElementById('modal-price').textContent = `$${prod.salePrice}`;
      document.getElementById('modal-orig-price').textContent = `$${prod.originalPrice}`;
      document.getElementById('modal-discount').textContent = `-${prod.discount}%`;
      document.getElementById('modal-stock').textContent = `⚡ Only ${prod.stock} units remain at this flash tier`;

      const specsList = document.getElementById('modal-specs');
      if (specsList) {
        specsList.innerHTML = prod.specs.map(s => `<li class="modal-spec-item">${s}</li>`).join('');
      }

      // Quantity control
      let currentQty = 1;
      const qtyDisplay = document.getElementById('modal-qty-val');
      const minusBtn = document.getElementById('modal-qty-minus');
      const plusBtn = document.getElementById('modal-qty-plus');
      const addCartBtn = document.getElementById('modal-add-cart-btn');

      if (qtyDisplay) qtyDisplay.textContent = '1';

      if (minusBtn && plusBtn) {
        minusBtn.onclick = () => {
          if (currentQty > 1) {
            currentQty--;
            qtyDisplay.textContent = currentQty;
          }
        };
        plusBtn.onclick = () => {
          if (currentQty < prod.stock) {
            currentQty++;
            qtyDisplay.textContent = currentQty;
          } else {
            showToast(`Max available flash stock is ${prod.stock} units`, 'warning');
          }
        };
      }

      if (addCartBtn) {
        addCartBtn.onclick = () => {
          addToCart(prod, currentQty);
          closeModal();
          openCartDrawer();
        };
      }

      // Render Related Deals
      const relatedContainer = document.getElementById('modal-related-grid');
      if (relatedContainer) {
        const related = PRODUCTS.filter(p => p.id !== prod.id && p.category === prod.category).slice(0, 3);
        relatedContainer.innerHTML = related.map(r => `
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.75rem; text-align: center; cursor: pointer;" onclick="document.getElementById('product-modal-backdrop').dataset.switchId='${r.id}'">
            <img src="${r.image}" alt="${r.title}" style="width: 50px; height: 50px; margin: 0 auto 0.4rem; object-fit: contain;" />
            <div style="font-size: 0.78rem; font-weight: 700; color: #FFF; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${r.title}</div>
            <div style="font-size: 0.85rem; font-weight: 800; color: var(--color-cyan);">$${r.salePrice}</div>
          </div>
        `).join('');

        // Listen for switch
        modalBackdrop.dataset.switchId = '';
        const observer = new MutationObserver(() => {
          if (modalBackdrop.dataset.switchId) {
            const newId = modalBackdrop.dataset.switchId;
            modalBackdrop.dataset.switchId = '';
            openProductModal(newId);
          }
        });
        observer.observe(modalBackdrop, { attributes: true, attributeFilter: ['data-switch-id'] });
      }

      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // ==========================================================================
  // SHOPPING CART DRAWER
  // ==========================================================================

  function initCartDrawer() {
    const drawerBackdrop = document.getElementById('cart-drawer-backdrop');
    const openBtns = document.querySelectorAll('.cart-btn');
    const closeBtn = document.getElementById('cart-close-btn');
    const couponInput = document.getElementById('cart-coupon-input');
    const couponBtn = document.getElementById('cart-coupon-btn');
    const checkoutBtn = document.getElementById('cart-checkout-btn');

    openBtns.forEach(btn => btn.addEventListener('click', openCartDrawer));
    if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);

    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', (e) => {
        if (e.target === drawerBackdrop) closeCartDrawer();
      });
    }

    if (couponBtn && couponInput) {
      couponBtn.addEventListener('click', () => {
        const code = couponInput.value.trim().toUpperCase();
        if (code === 'VOLT70') {
          couponApplied = { code: 'VOLT70', amount: 20 };
          showToast('Coupon VOLT70 applied: $20 extra savings!', 'success');
          updateCartUI();
        } else if (code === 'FLASH50') {
          couponApplied = { code: 'FLASH50', percent: 10 };
          showToast('Coupon FLASH50 applied: 10% off your bag!', 'success');
          updateCartUI();
        } else {
          showToast('Invalid drop code. Try "VOLT70" or "FLASH50"', 'warning');
        }
      });
    }

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
          showToast('Your cart is empty. Add a flash deal first!', 'warning');
          return;
        }

        // Simulate Instant Flash Checkout
        checkoutBtn.disabled = true;
        checkoutBtn.innerHTML = '⚡ Securing Drop Allocation...';

        setTimeout(() => {
          triggerConfetti();
          showToast('🎉 FLASH ORDER SECURED! Confirmation #VD-' + Math.floor(100000 + Math.random() * 900000), 'success');
          cart = [];
          couponApplied = null;
          updateCartUI();
          checkoutBtn.disabled = false;
          checkoutBtn.innerHTML = '⚡ Instant Flash Checkout';
          setTimeout(closeCartDrawer, 1200);
        }, 1200);
      });
    }
  }

  function openCartDrawer() {
    const drawerBackdrop = document.getElementById('cart-drawer-backdrop');
    if (drawerBackdrop) {
      drawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    const drawerBackdrop = document.getElementById('cart-drawer-backdrop');
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function addToCart(product, quantity = 1) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    showToast(`Added ${quantity}x "${product.title}" to drop bag`, 'success');
    updateCartUI();
  }

  function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    const badges = document.querySelectorAll('.cart-badge');
    const subtotalElem = document.getElementById('cart-subtotal');
    const discountElem = document.getElementById('cart-discount-row');
    const discountValElem = document.getElementById('cart-discount-val');
    const totalElem = document.getElementById('cart-total');

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    badges.forEach(b => { b.textContent = totalCount; });

    if (!list) return;

    if (cart.length === 0) {
      list.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">⚡</div>
          <h4 style="font-family: var(--font-display); color: #FFF; margin-bottom: 0.4rem;">Your drop bag is empty</h4>
          <p style="font-size: 0.88rem;">Flash deals vanish once timers hit zero. Secure your drop now.</p>
        </div>
      `;
      if (subtotalElem) subtotalElem.textContent = '$0.00';
      if (discountElem) discountElem.style.display = 'none';
      if (totalElem) totalElem.textContent = '$0.00';
      return;
    }

    let subtotal = 0;
    list.innerHTML = cart.map(item => {
      const itemTotal = item.salePrice * item.quantity;
      subtotal += itemTotal;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
          <div class="cart-item-info">
            <h5 class="cart-item-title">${item.title}</h5>
            <div class="cart-item-price">$${item.salePrice} × ${item.quantity} = $${itemTotal}</div>
          </div>
          <button class="cart-remove-btn" onclick="window.removeCartItem('${item.id}')" title="Remove item" aria-label="Remove ${item.title}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `;
    }).join('');

    let discountAmount = 0;
    if (couponApplied) {
      if (couponApplied.amount) discountAmount = couponApplied.amount;
      if (couponApplied.percent) discountAmount = (subtotal * couponApplied.percent) / 100;
      if (discountElem) discountElem.style.display = 'flex';
      if (discountValElem) discountValElem.textContent = `-$${discountAmount.toFixed(2)}`;
    } else {
      if (discountElem) discountElem.style.display = 'none';
    }

    const grandTotal = Math.max(0, subtotal - discountAmount);

    if (subtotalElem) subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
    if (totalElem) totalElem.textContent = `$${grandTotal.toFixed(2)}`;
  }

  // Global window handler for item deletion
  window.removeCartItem = function(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
  };

  // ==========================================================================
  // FORMS & TOAST SYSTEM
  // ==========================================================================

  function initForms() {
    // Newsletter Deal Alerts Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('newsletter-email');
        if (!input || !input.value.includes('@')) {
          showToast('Please enter a valid email address', 'warning');
          return;
        }
        showToast('🔥 Priority Flash Drop Alerts Activated for ' + input.value, 'success');
        input.value = '';
      });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();

        if (!name || !email || !message) {
          showToast('Please complete all required fields', 'warning');
          return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Transmitting Message...';

        setTimeout(() => {
          showToast('⚡ Dispatch received! A support agent will respond in < 10 mins.', 'success');
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Priority Message';
        }, 1000);
      });
    }
  }

  function showToast(msg, type = 'normal') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : '⚡'}</span>
      <div style="font-size: 0.88rem; font-weight: 600;">${msg}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Realistic Periodic Drop Alerts Ticker
  function initLiveTickerAlerts() {
    const sampleBuyers = [
      { name: 'Marcus K.', city: 'Berlin', product: 'Valkyrie 4K Drone' },
      { name: 'Sarah L.', city: 'New York', product: 'Quantum75 RGB Keyboard' },
      { name: 'Hiroshi T.', city: 'Tokyo', product: 'ChronoVolt Cyberwatch' },
      { name: 'Elena V.', city: 'London', product: 'AeroSpatial ANC Wireless' },
      { name: 'Mateo R.', city: 'Madrid', product: 'VoltCore 140W Station' }
    ];

    setInterval(() => {
      const buyer = sampleBuyers[Math.floor(Math.random() * sampleBuyers.length)];
      showToast(`🔥 ${buyer.name} from ${buyer.city} just claimed ${buyer.product}!`, 'normal');
    }, 28000);
  }

  // Header Scroll Effect & Mobile Nav
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });

      document.querySelectorAll('.nav-link, .nav-drawer-cart-btn').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
        });
      });
    }
  }

  // Dynamic Nav Bar Scroll Spy & Active Link Controller
  function initScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-link');
    if (!navLinks.length) return;

    // Collect sections referenced in nav links
    const sectionsMap = [];
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
          sectionsMap.push({ link, section, href });
        }
      }
    });

    function updateActiveState() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const offsetThreshold = 180; // Header height & section top offset

      function setActive(targetLink) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (targetLink) {
          targetLink.classList.add('active');
        }
      }

      // If scrolled to absolute bottom of page, activate last item (Support)
      const isBottom = (scrollPosition + windowHeight) >= (documentHeight - 50);
      if (isBottom && sectionsMap.length > 0) {
        setActive(sectionsMap[sectionsMap.length - 1].link);
        return;
      }

      // If page is near top (hero section)
      if (scrollPosition < 200 && sectionsMap.length > 0) {
        setActive(sectionsMap[0].link);
        return;
      }

      let activeItem = null;
      for (let i = 0; i < sectionsMap.length; i++) {
        const { section } = sectionsMap[i];
        const sectionTop = section.offsetTop - offsetThreshold;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          activeItem = sectionsMap[i];
          break;
        }
      }

      if (activeItem) {
        setActive(activeItem.link);
      } else {
        // Fallback to nearest previous section
        for (let i = sectionsMap.length - 1; i >= 0; i--) {
          if (scrollPosition >= sectionsMap[i].section.offsetTop - offsetThreshold) {
            setActive(sectionsMap[i].link);
            break;
          }
        }
      }
    }

    // Bind scroll & resize events
    window.addEventListener('scroll', updateActiveState, { passive: true });
    window.addEventListener('resize', updateActiveState, { passive: true });

    // Initial trigger on page load
    updateActiveState();

    // Immediate active highlight on link click & auto-close mobile drawer
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        const navContainer = document.querySelector('.nav-links');
        if (window.innerWidth <= 868 && navContainer) {
          navContainer.style.display = 'none';
        }
      });
    });

    // Brand logo home clicks handler
    const brandLogos = document.querySelectorAll('.brand-logo');
    brandLogos.forEach(logo => {
      logo.addEventListener('click', () => {
        if (sectionsMap.length > 0) {
          navLinks.forEach(l => l.classList.remove('active'));
          sectionsMap[0].link.classList.add('active');
        }
      });
    });
  }


  // Scroll Up / Back to Top Controller
  function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-to-top');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Confetti Animation for Checkout Celebration

  function triggerConfetti() {
    const colors = ['#FF1A53', '#8B2DF5', '#00F2FE', '#00FFA3', '#FFE600'];
    for (let i = 0; i < 45; i++) {
      const p = document.createElement('div');
      p.style.position = 'fixed';
      p.style.top = '50%';
      p.style.left = '50%';
      p.style.width = Math.random() * 8 + 6 + 'px';
      p.style.height = Math.random() * 8 + 6 + 'px';
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      p.style.zIndex = '9999';
      p.style.pointerEvents = 'none';

      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 300 + 100;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;

      document.body.appendChild(p);

      p.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
      ], {
        duration: 1200,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }).onfinish = () => p.remove();
    }
  }

});
