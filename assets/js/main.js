/**
 * MEHERUNNESA ANTARA - CAMPAIGN INTERACTIVE SUITE
 * Vice President-1 (Strategy) | VDF Narayanganj 2026
 * Hashtag: #Vote_For_Antara
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sound Effects (Web Audio API - Zero External Dependencies) ---
  let soundEnabled = false;
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playRetroBeep(freq = 440, type = 'sine', duration = 0.08) {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio notice:', e);
    }
  }

  function playCheerChime() {
    if (!soundEnabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        playRetroBeep(freq, 'triangle', 0.18);
      }, idx * 90);
    });
  }

  const soundBtn = document.getElementById('sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      initAudio();
      soundBtn.innerHTML = soundEnabled ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
      soundBtn.title = soundEnabled ? 'Mute Sound' : 'Unmute Sound';
      showToast(soundEnabled ? '🔊 Sound effects turned ON' : '🔇 Sound effects muted');
      if (soundEnabled) playRetroBeep(587, 'triangle', 0.12);
    });
  }

  // --- 2. Live Election Countdown Timer (October 13, 2026, 08:00:00 BST) ---
  // Target: 2026-10-13T08:00:00+06:00
  const electionDate = new Date('2026-10-13T08:00:00+06:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = electionDate - now;

    const daysEl = document.querySelectorAll('.countdown-days');
    const hoursEl = document.querySelectorAll('.countdown-hours');
    const minsEl = document.querySelectorAll('.countdown-mins');
    const secsEl = document.querySelectorAll('.countdown-secs');

    if (distance <= 0) {
      daysEl.forEach(el => el.textContent = '00');
      hoursEl.forEach(el => el.textContent = '00');
      minsEl.forEach(el => el.textContent = '00');
      secsEl.forEach(el => el.textContent = '00');
      const banner = document.getElementById('election-banner-status');
      if (banner) banner.textContent = 'ELECTION DAY IS TODAY! CAST YOUR VOTE FOR ANTARA!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    daysEl.forEach(el => el.textContent = pad(days));
    hoursEl.forEach(el => el.textContent = pad(hours));
    minsEl.forEach(el => el.textContent = pad(minutes));
    secsEl.forEach(el => el.textContent = pad(seconds));
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // --- 3. Confetti Animation Engine (Native HTML5 Canvas) ---
  const confettiCanvas = document.getElementById('confetti-canvas');
  let confettiCtx = confettiCanvas ? confettiCanvas.getContext('2d') : null;
  let confettiParticles = [];
  let confettiAnimId = null;

  function resizeConfetti() {
    if (!confettiCanvas) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeConfetti);
  resizeConfetti();

  function triggerConfetti(particleCount = 120) {
    if (!confettiCanvas || !confettiCtx) return;
    resizeConfetti();
    const colors = ['#1E4D8B', '#F26522', '#7C3AED', '#FFD13B', '#10B981', '#EC4899', '#FFFFFF'];
    
    for (let i = 0; i < particleCount; i++) {
      confettiParticles.push({
        x: window.innerWidth * (0.2 + Math.random() * 0.6),
        y: window.innerHeight * (0.3 + Math.random() * 0.3),
        w: 8 + Math.random() * 8,
        h: 6 + Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 14,
        vy: -8 - Math.random() * 12,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 12,
        gravity: 0.35 + Math.random() * 0.2,
        opacity: 1,
        life: 0
      });
    }

    if (!confettiAnimId) {
      animateConfetti();
    }
  }

  function animateConfetti() {
    if (!confettiCtx) return;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRot;
      p.life++;

      if (p.life > 90) {
        p.opacity -= 0.02;
      }

      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.globalAlpha = Math.max(0, p.opacity);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      confettiCtx.restore();

      if (p.y > confettiCanvas.height + 50 || p.opacity <= 0) {
        confettiParticles.splice(i, 1);
      }
    }

    if (confettiParticles.length > 0) {
      confettiAnimId = requestAnimationFrame(animateConfetti);
    } else {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      confettiAnimId = null;
    }
  }

  // --- 4. Toast Notification Utility ---
  const toastEl = document.getElementById('toast-notification');
  let toastTimer = null;

  function showToast(message, icon = 'fas fa-info-circle') {
    if (!toastEl) return;
    clearTimeout(toastTimer);
    toastEl.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
    toastEl.classList.add('show');
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3400);
  }

  // --- 5. Interactive "Commit to Vote" Supporter Card Generator ---
  const pledgeForm = document.getElementById('pledge-form');
  const supporterNameInput = document.getElementById('supporter-name-input');
  const supporterAreaSelect = document.getElementById('supporter-area-select');
  const previewName = document.getElementById('preview-supporter-name');
  const previewLocation = document.getElementById('preview-supporter-location');
  const previewId = document.getElementById('preview-supporter-id');
  const downloadCardBtn = document.getElementById('download-card-btn');
  const shareCardBtn = document.getElementById('share-card-btn');

  // Generate random or sequential Supporter ID
  function generateSupporterId() {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `VDF-ANTARA-2026-${randomNum}`;
  }

  let currentSupporterId = generateSupporterId();
  if (previewId) previewId.textContent = currentSupporterId;

  // Real-time Card Preview Update
  if (supporterNameInput) {
    supporterNameInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (previewName) {
        previewName.textContent = val.length > 0 ? val.toUpperCase() : 'YOUR NAME HERE';
      }
    });
  }

  if (supporterAreaSelect) {
    supporterAreaSelect.addEventListener('change', (e) => {
      const area = e.target.value;
      if (previewLocation) {
        previewLocation.textContent = area ? `📍 ${area}, Narayanganj` : '📍 Narayanganj District';
      }
    });
  }

  if (pledgeForm) {
    pledgeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = supporterNameInput ? supporterNameInput.value.trim() : 'Supporter';
      const area = supporterAreaSelect ? supporterAreaSelect.value : 'Narayanganj';
      
      currentSupporterId = generateSupporterId();
      if (previewId) previewId.textContent = currentSupporterId;
      if (previewName) previewName.textContent = name.toUpperCase();
      if (previewLocation) previewLocation.textContent = `📍 ${area}, Narayanganj`;

      // Trigger Celebration
      triggerConfetti(150);
      playCheerChime();
      showToast(`🎉 Thank you, ${name}! Your vote commitment has been recorded!`, 'fas fa-heart');

      // Increment Supporter Count
      const countEl = document.getElementById('pledged-counter-num');
      if (countEl) {
        let currentCount = parseInt(countEl.textContent.replace(/\D/g, ''), 10) || 1480;
        countEl.textContent = (currentCount + 1).toLocaleString() + '+';
      }

      // Smooth scroll slightly to view the card
      const cardWrap = document.querySelector('.voter-card-container');
      if (cardWrap) {
        cardWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // Generate and Download Supporter Card as PNG using HTML5 Canvas
  if (downloadCardBtn) {
    downloadCardBtn.addEventListener('click', () => {
      playRetroBeep(659, 'triangle', 0.1);
      renderSupporterCardCanvas();
    });
  }

  function renderSupporterCardCanvas() {
    const sName = (previewName ? previewName.textContent : 'COMMITTED VOTER').toUpperCase();
    const sLocation = previewLocation ? previewLocation.textContent : '📍 Narayanganj District';
    const sId = currentSupporterId;

    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 540;
    const ctx = canvas.getContext('2d');

    // 1. Background Gradient (VDF Blue to Navy)
    const bgGrad = ctx.createLinearGradient(0, 0, 900, 540);
    bgGrad.addColorStop(0, '#1E4D8B');
    bgGrad.addColorStop(0.6, '#112A4F');
    bgGrad.addColorStop(1, '#0C1B33');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 900, 540);

    // 2. Retro Diagonal Stripes & Color Accents
    ctx.fillStyle = '#7C3AED'; // Purple
    ctx.beginPath();
    ctx.moveTo(720, 0);
    ctx.lineTo(900, 0);
    ctx.lineTo(900, 220);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#F26522'; // Orange
    ctx.beginPath();
    ctx.moveTo(820, 0);
    ctx.lineTo(900, 0);
    ctx.lineTo(900, 110);
    ctx.closePath();
    ctx.fill();

    // 3. Thick Outer Retro Border
    ctx.strokeStyle = '#FFD13B'; // Gold / Yellow
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, 886, 526);

    ctx.strokeStyle = '#121826';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, 860, 500);

    // 4. Header Bar
    ctx.fillStyle = '#FFD13B';
    ctx.fillRect(40, 42, 280, 40);
    ctx.fillStyle = '#121826';
    ctx.font = 'bold 20px "Space Grotesk", sans-serif';
    ctx.fillText('OFFICIAL VOTER PLEDGE', 55, 69);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 24px "Outfit", sans-serif';
    ctx.fillText('VOLUNTEER DEVELOPMENT FORUM (VDF)', 340, 70);

    // Divider Line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, 102);
    ctx.lineTo(860, 102);
    ctx.stroke();

    // 5. Candidate Portrait Image
    const portraitImg = new Image();
    portraitImg.crossOrigin = 'anonymous';
    portraitImg.src = 'assets/images/antara-portrait.jpg';

    portraitImg.onload = () => {
      // Draw Portrait with Retro Frame
      ctx.fillStyle = '#121826';
      ctx.fillRect(52, 132, 186, 186);
      ctx.fillStyle = '#FFD13B';
      ctx.fillRect(48, 128, 186, 186);
      ctx.drawImage(portraitImg, 53, 133, 176, 176);

      // Candidate Badge Under Photo
      ctx.fillStyle = '#F26522';
      ctx.fillRect(48, 324, 186, 36);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 15px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('MEHERUNNESA ANTARA', 141, 348);
      ctx.textAlign = 'left';

      // 6. Supporter Information Block
      ctx.fillStyle = '#E2E8F0';
      ctx.font = 'bold 16px "Space Grotesk", sans-serif';
      ctx.fillText('COMMITTED SUPPORTER:', 270, 155);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 36px "Outfit", sans-serif';
      ctx.fillText(sName, 270, 198);

      ctx.fillStyle = '#FF8547';
      ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(sLocation, 270, 235);

      ctx.fillStyle = '#CBD5E1';
      ctx.font = '17px "Space Grotesk", monospace';
      ctx.fillText(`SUPPORTER REGISTRATION ID: ${sId}`, 270, 272);

      // Supporting Voting Statement
      ctx.fillStyle = '#FBBF24';
      ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Pledged to Vote for Meherunnesa Antara for VP-1 (Strategy)', 270, 318);

      ctx.fillStyle = '#94A3B8';
      ctx.font = '16px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Divisional Executive Committee Election • October 13, 2026', 270, 348);

      // 7. Footer Strip
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(40, 420);
      ctx.lineTo(860, 420);
      ctx.stroke();

      ctx.fillStyle = '#FFD13B';
      ctx.font = '900 24px "Outfit", sans-serif';
      ctx.fillText('BUILDING A STRONGER VDF TOGETHER', 40, 465);

      ctx.fillStyle = '#F26522';
      ctx.fillRect(630, 436, 230, 42);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 20px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('#Vote_For_Antara', 745, 464);
      ctx.textAlign = 'left';

      // Trigger Direct Download
      const link = document.createElement('a');
      link.download = `Antara_Voter_Pledge_${sName.replace(/[^A-Za-z0-9]/g, '_')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      showToast('📥 Supporter Badge downloaded! Share it on social media!', 'fas fa-check-circle');
    };

    portraitImg.onerror = () => {
      // Fallback if image fails to load in canvas
      showToast('Card generated without image.', 'fas fa-info-circle');
    };
  }

  // Share Card Handler
  if (shareCardBtn) {
    shareCardBtn.addEventListener('click', () => {
      const sName = previewName ? previewName.textContent : 'Supporter';
      const shareText = `Proud to pledge my vote for Meherunnesa Antara for Vice President-1 (Strategy) in the VDF Divisional Election 2026! 🗳️ Join me and commit your vote: https://vote-antara.vercel.app #Vote_For_Antara`;
      
      if (navigator.share) {
        navigator.share({
          title: 'Meherunnesa Antara for VP-1 (Strategy) - VDF 2026',
          text: shareText,
          url: 'https://vote-antara.vercel.app'
        }).catch(() => {
          copyToClipboard(shareText);
        });
      } else {
        copyToClipboard(shareText);
      }
    });
  }

  // --- 6. Volunteer Registration Form ---
  const volunteerForm = document.getElementById('volunteer-form');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const vName = document.getElementById('vol-name')?.value || 'Friend';
      const vPhone = document.getElementById('vol-phone')?.value || '';
      const vRole = document.getElementById('vol-role')?.value || 'Campaign Volunteer';

      triggerConfetti(120);
      playCheerChime();
      showToast(`🎉 Welcome to the team, ${vName}! Our coordinator will reach you at ${vPhone}!`, 'fas fa-star');
      volunteerForm.reset();
    });
  }

  // --- 7. Interactive Photo Gallery & Lightbox ---
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentGalleryIndex = 0;
  let activeVisibleItems = [];

  function updateActiveVisibleItems() {
    activeVisibleItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
  }

  // Filter Buttons
  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playRetroBeep(480, 'sine', 0.06);
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      updateActiveVisibleItems();
    });
  });

  updateActiveVisibleItems();

  // Open Lightbox
  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      playRetroBeep(520, 'sine', 0.08);
      updateActiveVisibleItems();
      currentGalleryIndex = activeVisibleItems.indexOf(item);
      if (currentGalleryIndex < 0) currentGalleryIndex = 0;
      showLightbox(currentGalleryIndex);
    });
  });

  function showLightbox(idx) {
    if (!lightbox || !activeVisibleItems[idx]) return;
    const item = activeVisibleItems[idx];
    const imgSrc = item.getAttribute('data-full') || item.querySelector('img').src;
    const title = item.getAttribute('data-title') || item.querySelector('.gallery-item-title')?.textContent || '';
    const desc = item.getAttribute('data-desc') || '';

    if (lightboxImg) lightboxImg.src = imgSrc;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxDesc) lightboxDesc.textContent = desc;
    if (lightboxCounter) lightboxCounter.textContent = `${idx + 1} / ${activeVisibleItems.length}`;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    playRetroBeep(380, 'sine', 0.06);
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  function showNextLightbox() {
    if (activeVisibleItems.length === 0) return;
    playRetroBeep(520, 'sine', 0.06);
    currentGalleryIndex = (currentGalleryIndex + 1) % activeVisibleItems.length;
    showLightbox(currentGalleryIndex);
  }

  function showPrevLightbox() {
    if (activeVisibleItems.length === 0) return;
    playRetroBeep(520, 'sine', 0.06);
    currentGalleryIndex = (currentGalleryIndex - 1 + activeVisibleItems.length) % activeVisibleItems.length;
    showLightbox(currentGalleryIndex);
  }

  if (lightboxNext) lightboxNext.addEventListener('click', showNextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevLightbox);

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextLightbox();
    if (e.key === 'ArrowLeft') showPrevLightbox();
  });

  // --- 8. Mobile Navigation Drawer ---
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  function toggleMobileNav() {
    playRetroBeep(440, 'triangle', 0.08);
    const isOpen = mobileDrawer?.classList.contains('open');
    if (isOpen) {
      mobileDrawer?.classList.remove('open');
      mobileDrawerOverlay?.classList.remove('open');
      mobileNavToggle?.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      mobileDrawer?.classList.add('open');
      mobileDrawerOverlay?.classList.add('open');
      mobileNavToggle?.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  if (mobileNavToggle) mobileNavToggle.addEventListener('click', toggleMobileNav);
  if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', toggleMobileNav);

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
      mobileDrawerOverlay?.classList.remove('open');
      mobileNavToggle?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // --- 9. Scroll Spy & Navbar Sticky Highlighting ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Back to top button visibility
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      playRetroBeep(620, 'sine', 0.08);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 10. Social Sharing Utilities ---
  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('📋 Link copied to clipboard! Share it with friends!', 'fas fa-copy');
        triggerConfetti(60);
      });
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast('📋 Link copied to clipboard!', 'fas fa-copy');
    }
  }

  const copyLinkBtns = document.querySelectorAll('.btn-copy-link');
  copyLinkBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      playRetroBeep(520, 'triangle', 0.08);
      copyToClipboard('https://vote-antara.vercel.app');
    });
  });

  const shareWaBtns = document.querySelectorAll('.btn-share-whatsapp');
  shareWaBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const msg = encodeURIComponent('Vote Meherunnesa Antara for Vice President-1 (Strategy) in Volunteer Development Forum (VDF) Election 2026! 🗳️ Join the movement: https://vote-antara.vercel.app #Vote_For_Antara');
      window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
    });
  });

  const shareFbBtns = document.querySelectorAll('.btn-share-facebook');
  shareFbBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = encodeURIComponent('https://vote-antara.vercel.app');
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    });
  });

  const shareTwBtns = document.querySelectorAll('.btn-share-twitter');
  shareTwBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = encodeURIComponent('Vote Meherunnesa Antara for Vice President-1 (Strategy) | Volunteer Development Forum (VDF) Election 2026! #Vote_For_Antara');
      const url = encodeURIComponent('https://vote-antara.vercel.app');
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    });
  });

  // Sound triggers on any button click
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playRetroBeep(480, 'sine', 0.05);
    });
  });
});
