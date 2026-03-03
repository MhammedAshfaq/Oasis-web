"use client";

import { useEffect } from "react";

const clinicLocations = [
  {
    lat: 10.4014812,
    lng: 76.1129021,
    name: "OASIS UNANI HOSPITAL & WELLNESS CENTRE",
    address: "Valapad, Triprayar, Thrissur, Kerala",
    mapUrl:
      "https://www.google.com/maps/place/OASIS+UNANI+HOSPITAL+%26+WELLNESS+CENTRE/@10.4015755,76.1128181,21z/data=!4m14!1m7!3m6!1s0x3ba7f5cfba18a05b:0x5248cc18efd0cc27!2sOASIS+UNANI+HOSPITAL+%26+WELLNESS+CENTRE!8m2!3d10.4014812!4d76.1129021!16s%2Fg%2F11thdjx26h!3m5!1s0x3ba7f5cfba18a05b:0x5248cc18efd0cc27!8m2!3d10.4014812!4d76.1129021!16s%2Fg%2F11thdjx26h?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
  }
];

const pageMarkup = `
    <div id="preloader">
        <div class="preloader-inner">
            <div class="crescent"></div>
            <p class="preloader-text">Oasis Unani Hospital & Wellness Center</p>
        </div>
    </div>

    <nav id="navbar" class="navbar">
        <div class="container nav-container">
            <a href="#hero" class="logo">
                <span class="logo-icon"></span>
                <div class="logo-text">
                    <span class="logo-name">OASIS UNANI HOSPITAL & WELLNESS CENTER</span>
                    <span class="logo-tagline">Unani Hospital</span>
                </div>
            </a>
            <ul class="nav-links" id="navLinks">
                <li><a href="#hero" class="nav-link active">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#services" class="nav-link">Services</a></li>
                <li><a href="#doctors" class="nav-link">Doctors</a></li>
                <li><a href="#testimonials" class="nav-link">Testimonials</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <a href="#contact" class="btn btn-primary nav-cta">Book Appointment</a>
            <button class="hamburger" id="hamburger" aria-label="Toggle navigation menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>

    <section id="hero" class="hero">
        <div class="hero-bg-overlay"></div>
        <div class="floating-particles" id="particles"></div>
        <div class="container hero-content">
            <div class="hero-badge animate-on-scroll" data-animation="fadeIn">Trusted Unani Care for Modern Wellness</div>
            <h1 class="hero-title animate-on-scroll" data-animation="slideUp">
                Healing Through <br>
                <span class="text-gradient">Ancient Wisdom</span>
            </h1>
            <p class="hero-subtitle animate-on-scroll" data-animation="slideUp" data-delay="200">
                Experience the time-tested Unani medicine traditions combined with modern care.
                Your path to holistic health begins here.
            </p>
            <div class="hero-buttons animate-on-scroll" data-animation="slideUp" data-delay="400">
                <a href="#services" class="btn btn-primary btn-lg">
                    <span>Explore Services</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </a>
                <a href="#contact" class="btn btn-outline btn-lg">
                    <span>Book Appointment</span>
                </a>
            </div>
            <div class="hero-stats animate-on-scroll" data-animation="fadeIn" data-delay="600">
                <div class="stat">
                    <span class="stat-number" data-count="4">0</span><span class="stat-plus">+</span>
                    <span class="stat-label">Years Experience</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat">
                    <span class="stat-number" data-count="10000">0</span><span class="stat-plus">+</span>
                    <span class="stat-label">Patients Treated</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat">
                    <span class="stat-number" data-count="25">0</span><span class="stat-plus">+</span>
                    <span class="stat-label">Herbal Remedies</span>
                </div>
            </div>
        </div>
        <div class="hero-scroll-indicator">
            <div class="scroll-line"></div>
            <span>Scroll Down</span>
        </div>
    </section>

    <section id="about" class="section about">
        <div class="container">
            <div class="about-grid">
                <div class="about-image-wrapper animate-on-scroll" data-animation="slideRight">
                    <div class="about-image">
                        <img src="/assets/images/hero-bg.svg" alt="Oasis Unani Hospital Interior">
                        <div class="about-image-badge">
                            <span class="badge-number">4+</span>
                            <span class="badge-text">Years of<br>Excellence</span>
                        </div>
                    </div>
                    <div class="about-pattern-accent"></div>
                </div>
                <div class="about-content">
                    <span class="section-label animate-on-scroll" data-animation="fadeIn">About Our Hospital</span>
                    <h2 class="section-title animate-on-scroll" data-animation="slideUp">
                        A Legacy of <span class="text-gradient">Healing & Care</span>
                    </h2>
                    <p class="about-text animate-on-scroll" data-animation="slideUp" data-delay="100">
                        Oasis Unani Hospital is a premier center for traditional Unani medicine,
                        rooted in the ancient healing wisdom of Hippocrates, Avicenna (Ibn Sina), and the great
                        scholars of Islamic medicine. We believe in treating the whole person - body, mind, and spirit.
                    </p>
                    <p class="about-text animate-on-scroll" data-animation="slideUp" data-delay="200">
                        Our hospital combines centuries-old Unani practices with modern diagnostic techniques
                        to provide safe, effective, and natural healthcare solutions for a wide range of conditions.
                    </p>
                    <div class="about-features animate-on-scroll" data-animation="slideUp" data-delay="300">
                        <div class="about-feature"><div class="feature-icon">🌿</div><div><h4>100% Natural</h4><p>All treatments use natural herbs and remedies</p></div></div>
                        <div class="about-feature"><div class="feature-icon">🏆</div><div><h4>Certified Experts</h4><p>Licensed Unani practitioners & hakims</p></div></div>
                        <div class="about-feature"><div class="feature-icon">❤️</div><div><h4>Personalized Care</h4><p>Tailored treatment plans for every patient</p></div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="section services">
        <div class="section-pattern-bg"></div>
        <div class="container">
            <div class="section-header">
                <span class="section-label animate-on-scroll" data-animation="fadeIn">What We Offer</span>
                <h2 class="section-title animate-on-scroll" data-animation="slideUp">Our <span class="text-gradient">Treatments & Services</span></h2>
                <p class="section-desc animate-on-scroll" data-animation="slideUp" data-delay="100">
                    We offer a comprehensive range of Unani treatments backed by centuries of tradition and modern research.
                </p>
            </div>
            <div class="services-grid">
                <div class="service-card animate-on-scroll" data-animation="slideUp" data-delay="0"><div class="service-icon-wrapper"><div class="service-icon">🩸</div></div><h3>Hijama (Cupping)</h3><p>Traditional wet & dry cupping therapy for detoxification, pain relief, and improved blood circulation following Prophetic medicine.</p><a href="https://jddtonline.info/index.php/jddt/article/view/6655" class="service-link">Learn More →</a></div>
                <div class="service-card animate-on-scroll" data-animation="slideUp" data-delay="100"><div class="service-icon-wrapper"><div class="service-icon">🌿</div></div><h3>Herbal Medicine</h3><p>Custom-formulated herbal medicines using time-tested Unani pharmacopeia for chronic conditions and overall wellness.</p><a href="https://www.ncbi.nlm.nih.gov/books/NBK92773/" class="service-link">Learn More →</a></div>
                <div class="service-card animate-on-scroll" data-animation="slideUp" data-delay="200"><div class="service-icon-wrapper"><div class="service-icon">💆</div></div><h3>Ilaj bil Tadbeer</h3><p>Regimental therapy including massage, exercise therapy, and lifestyle modifications for holistic health improvement.</p><a href="https://ccrum.res.in/Home/Regimental?mid=1448" class="service-link">Learn More →</a></div>
                <div class="service-card animate-on-scroll" data-animation="slideUp" data-delay="0"><div class="service-icon-wrapper"><div class="service-icon">🧴</div></div><h3>Skin & Hair Care</h3><p>Natural Unani treatments for eczema, psoriasis, acne, hair loss and other dermatological conditions.</p></div>
                <div class="service-card animate-on-scroll" data-animation="slideUp" data-delay="100"><div class="service-icon-wrapper"><div class="service-icon">🦴</div></div><h3>Joint & Pain Therapy</h3><p>Specialized treatment for arthritis, back pain, sciatica, and musculoskeletal disorders using natural Unani methods.</p></div>
                <div class="service-card animate-on-scroll" data-animation="slideUp" data-delay="200"><div class="service-icon-wrapper"><div class="service-icon">👶</div></div><h3>Fertility Care</h3><p>Natural fertility treatments for both men and women using traditional Unani reproductive health practices.</p></div>
            </div>
        </div>
    </section>

    <div class="pattern-divider"><img src="/assets/images/pattern.svg" alt="Islamic geometric pattern"></div>

    <section id="doctors" class="section doctors">
        <div class="container">
            <div class="section-header">
                <span class="section-label animate-on-scroll" data-animation="fadeIn">Meet Our Experts</span>
                <h2 class="section-title animate-on-scroll" data-animation="slideUp">Our <span class="text-gradient">Specialist Doctors</span></h2>
                <p class="section-desc animate-on-scroll" data-animation="slideUp" data-delay="100">
                    Our team of experienced Unani physicians (Hakims) are dedicated to your well-being.
                </p>
            </div>
            <div class="doctors-grid">
                <div class="doctor-card animate-on-scroll" data-animation="scaleIn" data-delay="0">
                    <div class="doctor-image"><img src="/assets/images/Dr-Muhammed-shafeeq.png" onerror="this.onerror=null;this.src='/assets/images/doctor.svg';" alt="Dr. Muhammed shafeeq"><div class="doctor-socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Email">@</a></div></div>
                    <div class="doctor-info"><h3>Dr. Muhammed shafeeq</h3><span class="doctor-title">Chief Hakim & Founder</span><p>BUMS, MD (Unani) - 15+ years of experience in Unani medicine, specializing in chronic diseases and Hijama therapy.</p></div>
                </div>
                <div class="doctor-card animate-on-scroll" data-animation="scaleIn" data-delay="0">
                    <div class="doctor-image"><img src="/assets/images/doctor2.png" onerror="this.onerror=null;this.src='/assets/images/doctor.svg';" alt="Dr. Muhammed shafeeq"><div class="doctor-socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Email">@</a></div></div>
                    <div class="doctor-info"><h3>Dr. Muhammed shafeeq</h3><span class="doctor-title">Chief Hakim & Founder</span><p>BUMS, MD (Unani) - 15+ years of experience in Unani medicine, specializing in chronic diseases and Hijama therapy.</p></div>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonials" class="section testimonials">
        <div class="container">
            <div class="section-header">
                <span class="section-label animate-on-scroll" data-animation="fadeIn">Patient Stories</span>
                <h2 class="section-title animate-on-scroll" data-animation="slideUp">What Our <span class="text-gradient">Patients Say</span></h2>
            </div>
            <div class="testimonials-slider">
                <div class="testimonial-card animate-on-scroll" data-animation="slideUp" data-delay="0"><div class="testimonial-stars">★★★★</div><p class="testimonial-text">"good unani hospital in Thrissur district. I think Oasis unani hospital providing very good treatment for all kind of pains. I experienced their service for my ankle joint pain, now i am very happy now. Thanks to team OASIS"</p><div class="testimonial-author"><div class="author-avatar">MF</div><div><h4>MUHAMMED FAZIL</h4><span>Joint Pain Patient</span></div></div></div>
                <div class="testimonial-card animate-on-scroll" data-animation="slideUp" data-delay="150"><div class="testimonial-stars">★★★★★</div><p class="testimonial-text">"I visited oasis unani hospital for my skin problem, within one week I got good result. They are providing best unani treatment with traditional herbal medicines and unani regimenal therapies"</p><div class="testimonial-author"><div class="author-avatar">MR</div><div><h4>Muhammad Rashid</h4><span>Skin Care Patient</span></div></div></div>
                <div class="testimonial-card animate-on-scroll" data-animation="slideUp" data-delay="300"><div class="testimonial-stars">★★★★</div><p class="testimonial-text">"Oasis unani hospital provinding Very good treatment for back pain. I am very happy on their service"</p><div class="testimonial-author"><div class="author-avatar">FS</div><div><h4>Fathima Salva</h4><span>Back Pain Patient</span></div></div></div>
            </div>
        </div>
    </section>

    <section id="contact" class="section contact">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-info">
                    <span class="section-label animate-on-scroll" data-animation="fadeIn">Get In Touch</span>
                    <h2 class="section-title animate-on-scroll" data-animation="slideUp">Book Your <span class="text-gradient">Appointment</span></h2>
                    <p class="contact-desc animate-on-scroll" data-animation="slideUp" data-delay="100">
                        Visit us or schedule a consultation. We are here to guide you on your journey to natural wellness.
                    </p>
                    <div class="contact-details animate-on-scroll" data-animation="slideUp" data-delay="200">
                        <div class="contact-item"><div class="contact-icon">📍</div><div><h4>Location</h4><p>Valapad, Triprayar, Opposite to Valapad Puthan Palli Juma Masjid<br>,Thrissur, Kerala - 680567</p></div></div>
                        <div class="contact-item"><div class="contact-icon">📞</div><div><h4>Phone</h4><p>+91 9988916917<br>+91 87654 32109</p></div></div>
                        <div class="contact-item"><div class="contact-icon">🕒</div><div><h4>Working Hours</h4><p>Mon - Fri: 9:00 AM - 7:00 PM<br>Saturday: 9:00 AM - 5:00 PM</p></div></div>
                        <div class="contact-item"><div class="contact-icon">📧</div><div><h4>Email</h4><p>[EMAIL_ADDRESS]<br>[EMAIL_ADDRESS]</p></div></div>
                    </div>
                </div>
                <div class="contact-form-wrapper animate-on-scroll" data-animation="slideLeft">
                    <form class="contact-form" id="appointmentForm">
                        <h3>Request an Appointment</h3>
                        <div class="form-row">
                            <div class="form-group"><label for="fullName">Full Name</label><input type="text" id="fullName" placeholder="Your full name" required></div>
                            <div class="form-group"><label for="phone">Phone Number</label><input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" required></div>
                        </div>
                        <div class="form-group"><label for="email">Email Address</label><input type="email" id="email" placeholder="your@email.com"></div>
                        <div class="form-group">
                            <label for="service">Select Service</label>
                            <select id="service" required>
                                <option value="" disabled selected>Choose a service</option>
                                <option value="hijama">Hijama (Cupping Therapy)</option>
                                <option value="herbal">Herbal Medicine</option>
                                <option value="skin">Skin & Hair Care</option>
                                <option value="joint">Joint & Pain Therapy</option>
                                <option value="fertility">Fertility Care</option>
                                <option value="general">General Consultation</option>
                            </select>
                        </div>
                        <div class="form-group"><label for="message">Your Message</label><textarea id="message" rows="4" placeholder="Tell us about your condition..."></textarea></div>
                        <button type="submit" class="btn btn-primary btn-lg btn-full" id="submitBtn">
                            <span>Book Appointment</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section id="locations" class="section locations">
        <div class="container">
            <div class="section-header">
                <span class="section-label animate-on-scroll" data-animation="fadeIn">Our Locations</span>
                <h2 class="section-title animate-on-scroll" data-animation="slideUp">Find Us on the <span class="text-gradient">Map</span></h2>
                <p class="section-desc animate-on-scroll" data-animation="slideUp" data-delay="100">
                    Multiple clinic locations can be shown here. Share latitude and longitude to add more markers.
                </p>
            </div>
            <div id="map" class="map-container animate-on-scroll" data-animation="fadeIn"></div>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-pattern"></div>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <a href="#hero" class="footer-logo">
                        <span class="logo-icon"></span>
                        <div class="logo-text"><span class="logo-name">OASIS</span><span class="logo-tagline">Unani Hospital</span></div>
                    </a>
                    <p>Dedicated to providing holistic healing through the ancient wisdom of Unani medicine. Your health is our mission.</p>
                </div>
                <div class="footer-links-group">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#doctors">Our Doctors</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-links-group">
                    <h4>Services</h4>
                    <ul class="footer-links">
                        <li><a href="#services">Hijama Therapy</a></li>
                        <li><a href="#services">Herbal Medicine</a></li>
                        <li><a href="#services">Skin & Hair Care</a></li>
                        <li><a href="#services">Fertility Care</a></li>
                    </ul>
                </div>
                <div class="footer-links-group">
                    <h4>Visit Us</h4>
                    <p class="footer-address">Oasis Unani Hospital, Valapad, Triprayar, Thrissur, Kerala, India - 680567</p>
                    <p class="footer-phone">📞 +91 99889 16917</p>
                    <div class="footer-socials"></div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Oasis Unani Hospital. All Rights Reserved.</p>
                <p>Healing with the wisdom of the ancients 💚</p>
            </div>
        </div>
    </footer>

    <button class="back-to-top" id="backToTop" aria-label="Back to top">↑</button>
`;

export default function HomePage() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const navbar = document.getElementById("navbar");
    const backToTop = document.getElementById("backToTop");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const particleContainer = document.getElementById("particles");
    const form = document.getElementById("appointmentForm");
    const submitBtn = document.getElementById("submitBtn");
    let mapInstance = null;

    const hidePreloader = () => preloader?.classList.add("hidden");
    const preloaderTimer = window.setTimeout(hidePreloader, 3000);
    window.addEventListener("load", () => window.setTimeout(hidePreloader, 1200), {
      once: true
    });

    const sections = document.querySelectorAll(".section, .hero");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (navbar) navbar.classList.toggle("scrolled", scrollY > 60);
      if (backToTop) backToTop.classList.toggle("visible", scrollY > 500);

      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) current = section.getAttribute("id");
      });

      document.querySelectorAll(".nav-link").forEach((link) => {
        const isActive = link.getAttribute("href") === `#${current}`;
        link.classList.toggle("active", isActive);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    backToTop?.addEventListener("click", scrollToTop);

    const handleHamburgerClick = () => {
      hamburger?.classList.toggle("active");
      navLinks?.classList.toggle("mobile-open");
      document.body.style.overflow = navLinks?.classList.contains("mobile-open")
        ? "hidden"
        : "";
    };
    hamburger?.addEventListener("click", handleHamburgerClick);

    const closeMobileNav = () => {
      hamburger?.classList.remove("active");
      navLinks?.classList.remove("mobile-open");
      document.body.style.overflow = "";
    };
    navLinks?.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || "0", 10);
            window.setTimeout(() => entry.target.classList.add("visible"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    animatedElements.forEach((el) => observer.observe(el));

    const counters = document.querySelectorAll(".stat-number");
    let countersAnimated = false;
    const animateCounters = () => {
      if (countersAnimated) return;
      countersAnimated = true;

      counters.forEach((counter) => {
        const target = parseInt(counter.dataset.count || "0", 10);
        const duration = 2000;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          counter.textContent = current.toLocaleString();
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };

        requestAnimationFrame(updateCounter);
      });
    };

    const heroStats = document.querySelector(".hero-stats");
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (heroStats) statsObserver.observe(heroStats);

    if (particleContainer) {
      const particleCount = 20;
      for (let i = 0; i < particleCount; i += 1) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${50 + Math.random() * 50}%`;
        particle.style.width = `${2 + Math.random() * 4}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${4 + Math.random() * 4}s`;
        particleContainer.appendChild(particle);
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      });
    });

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!submitBtn || !form) return;

      submitBtn.innerHTML = "<span>Sending...</span>";
      submitBtn.disabled = true;

      window.setTimeout(() => {
        submitBtn.innerHTML = "<span>✓ Appointment Requested!</span>";
        submitBtn.style.background = "linear-gradient(135deg, #14a05e, #0d6b3f)";

        window.setTimeout(() => {
          submitBtn.innerHTML =
            '<span>Book Appointment</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>';
          submitBtn.disabled = false;
          submitBtn.style.background = "";
          form.reset();
        }, 2500);
      }, 1500);
    };
    form?.addEventListener("submit", handleSubmit);

    const initMap = async () => {
      const mapNode = document.getElementById("map");
      if (!mapNode) return;
      if (mapNode.dataset.initialized === "true") return;

      const leafletModule = await import("leaflet");
      const L = leafletModule.default || leafletModule;
      mapNode.dataset.initialized = "true";
      const first = clinicLocations[0] || { lat:  10.401495699449645, lng: 76.11290746097916 };
      mapInstance = L.map("map").setView([first.lat, first.lng], 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      }).addTo(mapInstance);

      const bounds = [];
      clinicLocations.forEach((clinic) => {
        const marker = L.marker([clinic.lat, clinic.lng]).addTo(mapInstance);
        marker.bindPopup(
          `<b>${clinic.name}</b><br>${clinic.address}<br><a href="${clinic.mapUrl || "#"}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>`
        );
        bounds.push([clinic.lat, clinic.lng]);
      });

      if (bounds.length > 1) {
        mapInstance.fitBounds(bounds, { padding: [30, 30] });
      }
    };

    initMap();

    return () => {
      window.clearTimeout(preloaderTimer);
      window.removeEventListener("scroll", handleScroll);
      backToTop?.removeEventListener("click", scrollToTop);
      hamburger?.removeEventListener("click", handleHamburgerClick);
      form?.removeEventListener("submit", handleSubmit);
      observer.disconnect();
      statsObserver.disconnect();
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  return <main dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
