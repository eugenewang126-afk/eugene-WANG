/**
 * Mars Base Alpha - Main JavaScript
 * Accessible, progressive enhancement approach
 * With comprehensive i18n support
 */

(function() {
  'use strict';

  // ==========================================
  // i18n Translation System
  // ==========================================
  var currentLang = 'zh';

  // English translations mapped by CSS selector
  // Original Chinese text is auto-stored in data-i18n-orig on first switch
  var EN_MAP = {
    // -- Navigation --
    '.skip-link': 'Skip to main content',
    '.nav-link[href="#overview"]': 'Overview',
    '.nav-link[href="#systems"]': 'Systems',
    '.nav-link[href="#roadmap"]': 'Roadmap',
    '.nav-link[href="#materials"]': 'Materials',
    '.nav-link[href="#updates"]': 'Updates',
    '.nav-link[href="#contact"]': 'Contact',

    // -- Hero --
    '#hero .hero-subtitle': 'A modular Mars base technical framework built on first principles, covering the complete engineering design of four core modules: <strong>Energy Supply</strong>, <strong>Communication Systems</strong>, <strong>Materials &amp; Structure</strong>, and <strong>Auxiliary Networks</strong>.',
    '#hero .btn-primary': '<span aria-hidden="true">⚡</span> Explore Systems',
    '#hero .btn-secondary': '<span aria-hidden="true">📄</span> View Framework',
    '#hero .stat-item:nth-child(1) .stat-label': 'Core Modules',
    '#hero .stat-item:nth-child(2) .stat-label': 'Orbit Shells',
    '#hero .stat-item:nth-child(3) .stat-label': 'kWe Baseline Power',
    '#hero .stat-item:nth-child(4) .stat-label': 'mSv/yr Radiation Limit',

    // -- Overview --
    '#overview .section-desc': 'Based on Mars environmental parameters and first principles, constructing a modular, scalable Mars base design framework. Each module is independently optimized for rapid integration and scale expansion.',
    '#overview .module-card:nth-child(1) .module-desc': 'Three-track parallel power architecture: Fission Surface Power (base load) + In-situ gas thermoelectric conversion + Solar PV (flexible supplement), ensuring 40 kWe baseline power around the clock.',
    '#overview .module-card:nth-child(2) .module-desc': 'MarsLink constellation design based on Starlink architecture: Three-layer orbital architecture (LMO/MO/ArSO) + Laser inter-satellite links + Full-duplex autonomous link establishment protocol.',
    '#overview .module-card:nth-child(3) .module-desc': 'Five-track parallel material roadmap: Regolith fiber reinforcement + Sulfur concrete + StarCrete + Geopolymer + Cold sintered ceramics, maximizing in-situ resource utilization.',
    '#overview .module-card:nth-child(4) .module-desc': 'Four-layer autonomous pyramid architecture: Execution → Coordination → Planning → Decision, achieving fully autonomous operation under 3-22 minute communication delay.',

    // -- Systems: Energy Panel --
    '#panel-energy .sys-panel-desc': 'The Mars energy system is a novel engineering solution uniquely determined by Mars physical constraint equations. Based on first principles, constructing a three-track parallel, mutually redundant power generation architecture for round-the-clock, uninterrupted power supply.',
    '#panel-energy .sub-card:nth-child(1) .sub-card-body': 'NASA/DOE jointly developed FSP project, utilizing uranium-235 controlled fission to provide round-the-clock base load power. Output power is independent of solar irradiance, dust storms, and day-night cycles — the only reliable high power density solution on Mars.',
    '#panel-energy .sub-card:nth-child(2) .sub-card-body': 'Using CO₂ from the Martian atmosphere as working medium, achieving energy conversion through thermoelectric generation. USTC research shows CO₂ working fluid improves efficiency by 7.4%–20.0% and power density by 1.0%–14.2% compared to traditional rare gases.',
    '#panel-energy .sub-card:nth-child(3) .sub-card-body': 'Flexible supplementary power source with intelligent scheduling via dust storm monitoring. Mars solar irradiance is approximately 43% of Earth\'s, requiring efficient energy storage systems for day-night cycle power supply.',
    '#panel-energy .sub-card:nth-child(1) .sub-card-list': '<li>Thermal Power: 400 kWth</li><li>Electric Power: 40 kWe</li><li>Operating Temp: 800–1000 K</li><li>Design Life: 10+ years</li>',
    '#panel-energy .sub-card:nth-child(2) .sub-card-list': '<li>Medium: Martian CO₂ (95%+)</li><li>Temperature Drive: Day-night differential</li><li>ISRU Advantage: Zero transport cost</li><li>Power Range: 10–100 kWe</li>',
    '#panel-energy .sub-card:nth-child(3) .sub-card-list': '<li>Irradiance: ~590 W/m²</li><li>Dust Storm Attenuation: Up to 99%</li><li>Power Range: 5–20 kWe</li><li>Function: Flexible supplement + Peak shaving</li>',

    // -- Systems: Communication Panel --
    '#panel-communication .sys-panel-desc': 'MarsLink constellation design based on Starlink technology stack, redefining the engineering paradigm of Mars space networks. Mass deployment amortizes costs, laser inter-satellite links eliminate ground station dependency, SDN enables dynamic self-healing.',
    '#panel-communication .sub-card:nth-child(1) .sub-card-body': 'Orbital altitude 17,032 km, 3 satellites evenly distributed for global coverage. Primary functions: Earth-Mars laser communication relay + global broadcast.',
    '#panel-communication .sub-card:nth-child(2) .sub-card-body': 'Eliminating ground station dependency, enabling direct high-speed inter-satellite communication. In the Mars environment without GPS infrastructure, building a fully autonomous space network backbone.',
    '#panel-communication .sub-card:nth-child(3) .sub-card-body': 'Software-defined networking for dynamic routing and fault self-healing. Adapting to Mars environmental uncertainties (dust storm occlusion, node failure), ensuring communication link robustness.',

    // -- Systems: Materials Panel --
    '#panel-materials .sys-panel-desc': 'Mars materials and structure system uniquely determined by Mars physicochemical environment equations. Optimal solution under constraints of 0.38 g gravity, 610 Pa atmospheric pressure, 240 mSv/yr radiation dose, and >80 °C/Sol temperature range.',
    '#panel-materials .sub-card:nth-child(1) .sub-card-body': 'Utilizing silicate minerals in Martian regolith to manufacture fiber-reinforced materials, enhancing structural strength.',
    '#panel-materials .sub-card:nth-child(2) .sub-card-body': 'Using sulfur from the Martian atmosphere to manufacture anhydrous concrete, adapted to Mars\' arid environment.',
    '#panel-materials .sub-card:nth-child(3) .sub-card-body': 'Mars concrete based on starch binder, with strength twice that of standard concrete.',

    // -- Systems: Network Panel --
    '#panel-network .sys-panel-desc': 'Four-layer autonomous pyramid architecture: Execution → Coordination → Planning → Decision. Under four-fold constraints of 3–22 min communication delay, no GPS infrastructure, continuous GCR radiation, and extremely limited energy, achieving fully autonomous sensing, decision-making, and execution.',
    '#panel-network .sub-card:nth-child(1) .sub-card-body': 'Sensors, actuators, controllers. Millisecond response, deterministic execution.',
    '#panel-network .sub-card:nth-child(2) .sub-card-body': 'Subsystem coordination, resource scheduling. Second-level response, optimized allocation.',
    '#panel-network .sub-card:nth-child(3) .sub-card-body': 'Task planning, path optimization. Minute-level response, AI-assisted decision-making.',
    '#panel-network .sub-card:nth-child(4) .sub-card-body': 'Strategic decision-making, exception handling. Hour-level response, human-machine collaboration.',

    // -- Roadmap --
    '#roadmap .section-desc': 'A complete development path from unmanned automation to human habitation, with clear technical objectives and milestones for each phase.',
    '#roadmap .timeline-item:nth-child(1) .timeline-items': '<span class="timeline-chip">FSP Deployed</span><span class="timeline-chip">MarsLink Network</span><span class="timeline-chip">ISRU Verified</span><span class="timeline-chip">40 kWe Baseline</span>',
    '#roadmap .timeline-item:nth-child(2) .timeline-items': '<span class="timeline-chip">Life Support</span><span class="timeline-chip">Radiation Shield</span><span class="timeline-chip">100 kWe Expansion</span><span class="timeline-chip">Return Capability</span>',
    '#roadmap .timeline-item:nth-child(3) .timeline-items': '<span class="timeline-chip">Continuous Habitation</span><span class="timeline-chip">2 MWe Scale</span><span class="timeline-chip">Propellant Production</span><span class="timeline-chip">Mars Manufacturing</span>',
    '#roadmap .timeline-item:nth-child(4) .timeline-items': '<span class="timeline-chip">100-Person Scale</span><span class="timeline-chip">Agricultural Closure</span><span class="timeline-chip">Economic Self-Sufficiency</span><span class="timeline-chip">Cultural Independence</span>',

    // -- Updates --
    '#updates .update-card:nth-child(1) .update-summary': 'Completed detailed engineering design of the 40 kWe-class fission surface power, including thermal management, shielding layout, and redundancy architecture.',
    '#updates .update-card:nth-child(2) .update-summary': 'Semi-physical simulation platform verification of the three-layer orbital constellation completed, achieving end-to-end testing of the full-duplex autonomous link establishment protocol.',
    '#updates .update-card:nth-child(3) .update-summary': 'StarCrete material testing under Mars-simulated environment showed tensile strength reaching 72 MPa, twice that of standard concrete.',

    // -- Contact --
    '#contact .contact-info p:nth-of-type(2)': 'We welcome research institutions, engineering teams, and individual researchers interested in Mars base engineering to collaborate. This is an open-source project with all technical documentation and design materials publicly available on GitHub.',
    '#contact .form-label[for="name"]': 'Name',
    '#contact .form-label[for="email"]': 'Email',
    '#contact .form-label[for="subject"]': 'Subject',
    '#contact .form-label[for="message"]': 'Message',
    '#contact .form-select option[value="collaboration"]': 'Collaboration',
    '#contact .form-select option[value="technical"]': 'Technical Question',
    '#contact .form-select option[value="feedback"]': 'Feedback',
    '#contact .form-select option[value="other"]': 'Other',
    '#contact .contact-form .btn-primary': '<span aria-hidden="true">📤</span> Send Message',

    // -- Footer --
    'footer p:first-of-type': '<strong>Mars Base Alpha</strong><br />An Open-Source Engineering Design Platform for Mars Permanent Base'
  };

  // Aria-label translations
  var EN_ARIA = {
    '.hero-stats': 'Key Data',
    '.hero-cta-group': 'Primary Actions',
    '.systems-nav': 'System Navigation',
    '.metrics-strip': 'Key Metrics',
    '#panel-energy .metrics-strip': 'Key Metrics',
    '#panel-communication .metrics-strip': 'Key Metrics',
    '#panel-materials .metrics-strip': 'Key Metrics',
    '#panel-network .metrics-strip': 'Key Metrics',
    '.sidebar-panel': 'System Status',
    '.contact-form': 'Contact Form'
  };

  var ZH_ARIA = {};

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // --- 1. Show/Hide dual-language elements ---
    var zhSelectors = '.zh, .module-title-zh, .panel-zh, .sys-nav-name-zh, .metric-label-zh, .update-title-zh, .sidebar-header-zh, .timeline-title-zh, .form-title-zh, .nav-logo-zh, .hero-title-zh, .sys-status-zh';
    var enSelectors = '.en, .module-title-en, .metric-label-en, .update-title-en, .nav-logo-en, .hero-title-en, .sys-status-name';

    if (lang === 'en') {
      document.querySelectorAll(zhSelectors).forEach(function(el) { el.style.display = 'none'; });
      document.querySelectorAll(enSelectors).forEach(function(el) { el.style.display = ''; });
    } else {
      document.querySelectorAll(zhSelectors).forEach(function(el) { el.style.display = ''; });
      document.querySelectorAll(enSelectors).forEach(function(el) { el.style.display = ''; });
    }

    // --- 2. Text-swap via EN_MAP ---
    if (lang === 'en') {
      Object.keys(EN_MAP).forEach(function(sel) {
        document.querySelectorAll(sel).forEach(function(el) {
          if (!el.dataset.i18nOrig) {
            el.dataset.i18nOrig = el.innerHTML;
          }
          el.innerHTML = EN_MAP[sel];
        });
      });
      // Store and translate aria-labels
      Object.keys(EN_ARIA).forEach(function(sel) {
        document.querySelectorAll(sel).forEach(function(el) {
          if (!el.dataset.i18nOrigAria) {
            el.dataset.i18nOrigAria = el.getAttribute('aria-label') || '';
          }
          el.setAttribute('aria-label', EN_ARIA[sel]);
        });
      });
    } else {
      // Restore original Chinese text
      document.querySelectorAll('[data-i18n-orig]').forEach(function(el) {
        el.innerHTML = el.dataset.i18nOrig;
      });
      // Restore original aria-labels
      document.querySelectorAll('[data-i18n-orig-aria]').forEach(function(el) {
        el.setAttribute('aria-label', el.dataset.i18nOrigAria);
      });
    }

    // --- 3. Update language toggle buttons ---
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      var isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // --- 4. Update dynamic aria-labels ---
    var menuBtn = document.querySelector('.mobile-menu-btn');
    if (menuBtn) {
      menuBtn.setAttribute('aria-label', lang === 'zh' ? '打开菜单' : 'Open menu');
    }
  }

  // ==========================================
  // Stars Background Animation
  // ==========================================
  function createStars() {
    var container = document.getElementById('stars-container');
    if (!container) return;
    
    var count = Math.min(80, Math.floor(window.innerWidth / 15));
    var fragment = document.createDocumentFragment();
    
    for (var i = 0; i < count; i++) {
      var star = document.createElement('div');
      star.className = 'star';
      star.setAttribute('aria-hidden', 'true');
      
      var size = Math.random() * 2 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.setProperty('--dur', (Math.random() * 4 + 2) + 's');
      star.style.setProperty('--delay', (Math.random() * 5) + 's');
      star.style.setProperty('--min-op', '0.1');
      star.style.setProperty('--max-op', (Math.random() * 0.6 + 0.3).toFixed(2));
      
      fragment.appendChild(star);
    }
    
    container.appendChild(fragment);
  }

  // ==========================================
  // Navbar Scroll Effect
  // ==========================================
  function initNavbar() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ==========================================
  // Smooth Scroll with Focus Management
  // ==========================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href').slice(1);
        var target = document.getElementById(targetId);
        
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          document.querySelectorAll('.nav-link').forEach(function(nl) {
            nl.classList.remove('active');
          });
          if (this.classList.contains('nav-link')) {
            this.classList.add('active');
          }
          
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  // ==========================================
  // System Panels (Tab-like behavior)
  // ==========================================
  function initSystemPanels() {
    var navItems = document.querySelectorAll('.sys-nav-item');
    var panels = document.querySelectorAll('.sys-panel');
    
    navItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var panelId = this.dataset.panel;
        
        navItems.forEach(function(ni) {
          ni.classList.remove('active');
          ni.removeAttribute('aria-current');
        });
        this.classList.add('active');
        this.setAttribute('aria-current', 'true');
        
        panels.forEach(function(panel) {
          panel.classList.remove('active');
          panel.hidden = true;
        });
        
        var targetPanel = document.getElementById('panel-' + panelId);
        if (targetPanel) {
          targetPanel.classList.add('active');
          targetPanel.hidden = false;
        }
      });
      
      item.addEventListener('keydown', function(e) {
        var items = Array.from(navItems);
        var idx = items.indexOf(this);
        
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          var next = items[(idx + 1) % items.length];
          next.click();
          next.focus();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          var prev = items[(idx - 1 + items.length) % items.length];
          prev.click();
          prev.focus();
        }
      });
    });
  }

  // ==========================================
  // Language Toggle (using i18n system)
  // ==========================================
  function initLanguageToggle() {
    var langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        setLanguage(this.dataset.lang);
      });
    });
  }

  // ==========================================
  // Mobile Menu
  // ==========================================
  function initMobileMenu() {
    var menuBtn = document.querySelector('.mobile-menu-btn');
    var navLinks = document.querySelector('.nav-links');
    
    if (!menuBtn || !navLinks) return;
    
    menuBtn.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      this.setAttribute('aria-label', expanded 
        ? (currentLang === 'zh' ? '打开菜单' : 'Open menu') 
        : (currentLang === 'zh' ? '关闭菜单' : 'Close menu'));
      navLinks.style.display = expanded ? 'none' : 'flex';
    });
    
    navLinks.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth < 768) {
          navLinks.style.display = 'none';
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // ==========================================
  // Scroll Spy (Active Nav Link)
  // ==========================================
  function initScrollSpy() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');
    
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });
    
    sections.forEach(function(section) {
      observer.observe(section);
    });
  }

  // ==========================================
  // Contact Form Handling
  // ==========================================
  function initContactForm() {
    var form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.innerHTML;
      var successMsg = currentLang === 'zh' 
        ? '<span aria-hidden="true">✅</span> 消息已发送' 
        : '<span aria-hidden="true">✅</span> Message Sent';
      btn.innerHTML = successMsg;
      btn.disabled = true;
      
      setTimeout(function() {
        btn.innerHTML = originalText;
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

  // ==========================================
  // Skip Link Styling
  // ==========================================
  function initSkipLink() {
    var style = document.createElement('style');
    style.textContent = '.skip-link{position:absolute;top:-100%;left:50%;transform:translateX(-50%);background:var(--mars-orange);color:white;padding:12px 24px;border-radius:0 0 8px 8px;z-index:10000;font-weight:700;text-decoration:none;transition:top 0.2s;}.skip-link:focus{top:0;}';
    document.head.appendChild(style);
  }

  // ==========================================
  // Responsive Handling
  // ==========================================
  function initResponsive() {
    function checkMobile() {
      var menuBtn = document.querySelector('.mobile-menu-btn');
      var navLinks = document.querySelector('.nav-links');
      
      if (window.innerWidth < 768) {
        if (menuBtn) menuBtn.style.display = 'block';
        if (navLinks) navLinks.style.display = 'none';
      } else {
        if (menuBtn) menuBtn.style.display = 'none';
        if (navLinks) navLinks.style.display = 'flex';
      }
    }
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
  }

  // ==========================================
  // Animate on Scroll (progressive)
  // ==========================================
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;
    
    var elements = document.querySelectorAll('.module-card, .sub-card, .timeline-item, .update-card');
    
    elements.forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(function(el) {
      observer.observe(el);
    });
  }

  // ==========================================
  // Initialize Everything
  // ==========================================
  function init() {
    createStars();
    initNavbar();
    initSmoothScroll();
    initSystemPanels();
    initLanguageToggle();
    initMobileMenu();
    initScrollSpy();
    initContactForm();
    initSkipLink();
    initResponsive();
    initScrollAnimations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
