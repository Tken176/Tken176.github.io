<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Đinh Minh Toàn · Hồ sơ học thuật</title>
<!-- Preconnect & scholarly typefaces – hỗ trợ hoàn hảo dấu tiếng Việt, cảm giác chữ thật -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Crimson+Pro:ital,wght@0,350;0,400;0,500;0,600;1,350;1,400;1,500&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet">
<style>
  /* ---------- RESET & NỀN ---------- */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --ink-deep:    #1f1c17;
    --ink-soft:    #3b3530;
    --ink-faded:   #6b6259;
    --ink-pale:    #90887e;
    --paper:       #fefaf5;
    --paper-edge:  #ede6dd;
    --accent:      #8f4a3a;      /* không “đỏ tươi AI” – màu gạch ấm học thuật */
    --accent-dim:  #b66b58;
    --serif-title: 'Cormorant Garamond', 'Georgia', 'Times New Roman', serif;
    --serif-body:  'Crimson Pro', 'Georgia', 'Times New Roman', serif;
    --mono:        'JetBrains Mono', 'SF Mono', 'Courier New', monospace;
  }

  html {
    scroll-behavior: smooth;
    font-size: 18px;
    background: var(--paper);
  }

  body {
    background: var(--paper);
    color: var(--ink-soft);
    font-family: var(--serif-body);
    font-weight: 400;
    line-height: 1.65;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* ---- KHÔNG CÓ BOX, CARD, SHADOW, BORDER-RADIUS ---- */
  .page {
    max-width: 760px;
    margin: 0 auto;
    padding: 0 1.75rem;
  }

  /* ----- TYPOGRAPHY HỌC THUẬT, ĐẬM CHẤT VĂN CHƯƠNG ----- */
  h1, h2, h3, .project-name, .nav-name {
    font-family: var(--serif-title);
    font-weight: 500;
    letter-spacing: -0.01em;
  }

  h1 {
    font-size: clamp(2.6rem, 8vw, 4.2rem);
    font-weight: 500;
    line-height: 1.1;
    color: var(--ink-deep);
    margin: 1rem 0 0.5rem 0;
    letter-spacing: -0.02em;
  }

  h1 em {
    font-style: italic;
    font-weight: 500;
    color: var(--accent);
  }

  .header-meta {
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink-pale);
    border-bottom: none;
    margin-bottom: 0.8rem;
  }

  .tagline {
    font-family: var(--serif-body);
    font-size: 0.85rem;
    color: var(--ink-faded);
    border-top: 1px solid var(--paper-edge);
    padding-top: 1rem;
    margin-top: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    align-items: baseline;
  }

  .tagline-sep {
    display: inline-block;
    width: 3px;
    height: 3px;
    background: var(--ink-pale);
    border-radius: 50%;
    opacity: 0.5;
  }

  /* tiêu đề section – không gạch đỏ, không hộp, chỉ chữ nhẹ nhàng */
  .section-title {
    font-family: var(--mono);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--ink-faded);
    margin-bottom: 1.1rem;
    font-weight: 400;
    border-bottom: none;
  }

  /* thay thế gạch đầu dòng bằng khoảng trống tinh tế */
  section {
    margin-bottom: 3.2rem;
  }

  /* GIỌNG ĐẦU DÒNG (DROP CAP) cho đoạn đầu About — tạo cảm giác ấn bản cũ */
  .dropcap:first-of-type::first-letter {
    font-family: var(--serif-title);
    font-size: 3.2rem;
    font-weight: 500;
    float: left;
    line-height: 0.8;
    margin-right: 0.5rem;
    color: var(--accent);
    padding-top: 0.15rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.2rem;
    color: var(--ink-soft);
    font-weight: 400;
  }

  strong, b {
    font-weight: 550;
    color: var(--ink-deep);
  }

  em {
    font-style: italic;
    font-weight: 450;
  }

  a {
    color: var(--accent);
    text-decoration: none;
    border-bottom: 0.5px solid rgba(143, 74, 58, 0.3);
    transition: border-color 0.2s, color 0.2s;
  }

  a:hover {
    color: var(--accent-dim);
    border-bottom-color: var(--accent-dim);
  }

  /* danh sách projects / achievements – kiểu chữ liền mạch, không đường viền hộp */
  .project {
    margin-bottom: 2.6rem;
    padding-bottom: 1.8rem;
    border-bottom: 1px solid var(--paper-edge);
  }
  .project:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .project-name {
    font-family: var(--serif-title);
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--ink-deep);
    margin-bottom: 0.2rem;
    letter-spacing: -0.3px;
  }

  .project-role {
    font-family: var(--mono);
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-pale);
    margin-bottom: 0.7rem;
  }

  .project-stack {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--ink-faded);
    margin-top: 0.9rem;
    letter-spacing: -0.1px;
    border-top: 1px dotted var(--paper-edge);
    padding-top: 0.7rem;
    display: inline-block;
    width: auto;
  }

  /* Thành tích – giản dị, không khung */
  .achievement {
    display: flex;
    gap: 1.2rem;
    align-items: baseline;
    margin-bottom: 1.4rem;
    padding-bottom: 1rem;
    border-bottom: 1px dotted var(--paper-edge);
  }
  .achievement:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .ach-year {
    font-family: var(--mono);
    font-size: 0.65rem;
    color: var(--ink-pale);
    min-width: 3rem;
    font-weight: 400;
  }
  .ach-title {
    font-size: 0.96rem;
    font-weight: 500;
    color: var(--ink-deep);
    line-height: 1.45;
  }
  .ach-sub {
    font-size: 0.82rem;
    color: var(--ink-faded);
    font-weight: 350;
    letter-spacing: -0.1px;
  }

  .contact-line {
    font-size: 0.9rem;
    font-family: var(--serif-body);
    margin: 0.5rem 0;
  }
  .contact-line a {
    font-family: var(--mono);
    font-size: 0.85rem;
    border-bottom: 0.5px dotted;
  }

  /* FOOTER – chân trang nhẹ như sách */
  footer {
    margin-top: 4rem;
    padding: 2rem 0 2.5rem;
    border-top: 1px solid var(--paper-edge);
  }
  .footer-text {
    font-family: var(--mono);
    font-size: 0.6rem;
    letter-spacing: 0.08em;
    color: var(--ink-pale);
    text-transform: uppercase;
  }

  /* NAVIGATION – không bóng, không background mờ, chỉ thanh gọn */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--paper);
    border-bottom: 1px solid var(--paper-edge);
    transform: translateY(-100%);
    transition: transform 0.3s ease-out;
    z-index: 100;
  }
  nav.visible {
    transform: translateY(0);
  }
  .nav-inner {
    max-width: 760px;
    margin: 0 auto;
    padding: 0 1.75rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-name {
    font-family: var(--serif-title);
    font-size: 0.85rem;
    font-style: italic;
    letter-spacing: -0.2px;
    color: var(--ink-deep);
    text-decoration: none;
    border-bottom: none;
  }
  .nav-links {
    display: flex;
    gap: 1.8rem;
    list-style: none;
  }
  .nav-links a {
    font-family: var(--mono);
    font-size: 0.6rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-faded);
    text-decoration: none;
    border-bottom: none;
    transition: color 0.2s;
  }
  .nav-links a:hover {
    color: var(--accent);
    border-bottom: none;
  }

  /* hiệu ứng hiển thị nhẹ nhàng – không gây AI */
  .reveal {
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.55s cubic-bezier(0.2, 0.9, 0.3, 1.1), transform 0.55s ease;
  }
  .reveal.in {
    opacity: 1;
    transform: translateY(0);
  }

  /* Ẩn nav-links trên mobile nhỏ để tránh rối nhưng vẫn truy cập được */
  @media (max-width: 560px) {
    .nav-links {
      display: none;
    }
    .page {
      padding: 0 1.2rem;
    }
    .achievement {
      gap: 0.8rem;
    }
    .ach-year {
      min-width: 2.4rem;
    }
  }

  /* giữ khoảng cách thoáng, không box nào cả */
  img, iframe, svg {
    display: none;
  }
  blockquote, pre {
    background: transparent;
    border: none;
    padding: 0;
  }

  hr {
    border: none;
    border-top: 1px solid var(--paper-edge);
    margin: 1.5rem 0;
  }
</style>
</head>
<body>

<nav id="sitenav">
  <div class="nav-inner">
    <a href="#top" class="nav-name">Đinh Minh Toàn</a>
    <ul class="nav-links">
      <li><a href="#about">Giới thiệu</a></li>
      <li><a href="#projects">Dự án</a></li>
      <li><a href="#achievements">Thành tích</a></li>
      <li><a href="#contact">Liên hệ</a></li>
    </ul>
  </div>
</nav>

<main class="page" id="top">
  <!-- HEADER – mở đầu như trang sách -->
  <header>
    <p class="header-meta">THPT Chuyên Bến Tre · Khóa 34 · Chuyên Vật Lý</p>
    <h1>Đinh<br><em>Minh Toàn</em></h1>
    <div class="tagline">
      <span>AI · Giáo dục & Hệ thống thông minh</span>
      <span class="tagline-sep"></span>
      <span>Bến Tre, Việt Nam</span>
      <span class="tagline-sep"></span>
      <a href="https://github.com/Tken176" target="_blank" style="font-family:var(--mono); border-bottom-color:var(--ink-pale);">github.com/Tken176</a>
    </div>
  </header>

  <!-- GIỚI THIỆU – thủ pháp drop cap cho nét chân phương -->
  <section id="about" class="reveal">
    <div class="section-title">Giới thiệu</div>
    <p class="dropcap">
      Chào bạn! Tôi là <strong>Đinh Minh Toàn</strong>, hiện đang là học sinh lớp
      Chuyên Vật Lý (Khóa 34) tại trường THPT Chuyên Bến Tre. Hướng nghiên cứu và
      phát triển cốt lõi của tôi xoay quanh việc ứng dụng <strong>Trí tuệ nhân tạo (AI)</strong>
      và <strong>Khoa học máy tính</strong> để giải quyết các bài toán thực tế.
    </p>
    <p>
      Tôi đặc biệt quan tâm đến giao điểm giữa AI và giáo dục — nơi công nghệ có thể
      thực sự thay đổi cách con người học hỏi. Ngoài việc xây dựng phần mềm, tôi
      còn giữ vai trò lớp trưởng và tham gia nhiều cuộc thi tin học, vật lý
      ở cấp tỉnh và quốc gia.
    </p>
  </section>

  <!-- DỰ ÁN – trình bày dạng văn xuôi, không box -->
  <section id="projects" class="reveal">
    <div class="section-title">Dự án tiêu biểu</div>
    
    <div class="project">
      <p class="project-name">GemXcel — Nền tảng Giáo dục tích hợp AI</p>
      <p class="project-role">Solo Developer · Nghiên cứu & xây dựng</p>
      <p>
        GemXcel là nền tảng giáo dục tiên tiến tôi tự thiết kế và xây dựng, nhằm chứng minh
        hiệu quả của việc kết hợp AI với Trò chơi hóa (<em>Gamification</em>) trong học tập.
        Hệ thống tích hợp <strong>Supabase</strong> để quản trị cơ sở dữ liệu, giải quyết
        bài toán đồng bộ lưu trữ giữa Local và Server, và đảm bảo tính ổn định của nền tảng
        ở quy mô thực tế.
      </p>
      <p>
        Tôi xây dựng luồng hệ thống sử dụng các lệnh gọi API để tự động hóa quy trình
        trích xuất nội dung văn bản và tạo lập các bài kiểm tra học thuật — giảm thiểu
        thời gian soạn đề và cá nhân hóa trải nghiệm học của từng người dùng.
        Dự án được quản lý toàn bộ qua <strong>GitHub</strong> và triển khai trên Cloudflare Pages.
      </p>
      <div class="project-stack">
        Supabase · Cloudflare Pages · REST API · AI Integration &nbsp;|&nbsp;
        <a href="https://gemxcel.pages.dev/" target="_blank" style="font-family:var(--mono);">gemxcel.pages.dev&nbsp;↗</a>
      </div>
    </div>
    <!-- (Có thể thêm dự án khác sau, nhưng giữ đúng tinh thần không khung) -->
  </section>

  <!-- THÀNH TÍCH -->
  <section id="achievements" class="reveal">
    <div class="section-title">Thành tích chọn lọc</div>

    <div class="achievement">
      <span class="ach-year">2026</span>
      <div>
        <p class="ach-title">Finalist — Vòng Sàn Đấu (Arena Round)</p>
        <p class="ach-sub">National AI Innovation · AI Young Guru · Đại học FPT</p>
      </div>
    </div>

    <div class="achievement">
      <span class="ach-year">2024</span>
      <div>
        <p class="ach-title">Giải Nhì cấp Tỉnh — Phần mềm sáng tạo (Bảng D3)</p>
        <p class="ach-sub">Hội thi Tin học trẻ tỉnh Bến Tre</p>
      </div>
    </div>

    <div class="achievement">
      <span class="ach-year">2024</span>
      <div>
        <p class="ach-title">Giải Nhì cấp Tỉnh — Học sinh giỏi môn Vật Lý</p>
        <p class="ach-sub">Kỳ thi chọn Học sinh giỏi cấp tỉnh Bến Tre</p>
      </div>
    </div>
  </section>

  <!-- LÃNH ĐẠO & HỌC THUẬT -->
  <section class="reveal">
    <div class="section-title">Hoạt động học thuật</div>
    <p>
      Tôi đảm nhận vai trò <strong>Lớp trưởng</strong> của lớp Chuyên Vật Lý (Khóa 34)
      tại THPT Chuyên Bến Tre, điều phối các hoạt động học tập và hỗ trợ tập thể lớp
      trong suốt khóa học. Luôn đề cao tư duy phản biện và tinh thần nghiên cứu độc lập.
    </p>
  </section>

  <!-- LIÊN HỆ – dạng thư từ, cởi mở -->
  <section id="contact" class="reveal">
    <div class="section-title">Liên hệ</div>
    <p>
      Nếu bạn muốn trao đổi về dự án, hợp tác nghiên cứu, hoặc đơn giản chỉ muốn
      nói chuyện về AI và phần mềm, tôi rất vui được lắng nghe.
    </p>
    <div class="contact-line">
      ✦ Email &nbsp;·&nbsp; <a href="mailto:minhtoan.dinh@chuyenbentre.edu.vn">minhtoan.dinh@chuyenbentre.edu.vn</a><br>
      ✦ GitHub &nbsp;·&nbsp; <a href="https://github.com/Tken176" target="_blank">github.com/Tken176</a><br>
      ✦ GemXcel &nbsp;·&nbsp; <a href="https://gemxcel.pages.dev/" target="_blank">gemxcel.pages.dev</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p class="footer-text">© 2026 Đinh Minh Toàn &nbsp;·&nbsp; Bến Tre, Việt Nam &nbsp;·&nbsp; “học để dẫn dắt, viết để sẻ chia”</p>
  </footer>
</main>

<script>
  // 1. Sticky nav chỉ hiện khi scroll qua header – gọn nhẹ, không hiệu ứng lạ
  const navEl = document.getElementById('sitenav');
  const headerEl = document.querySelector('header');
  if (headerEl && navEl) {
    const observerNav = new IntersectionObserver(([entry]) => {
      navEl.classList.toggle('visible', !entry.isIntersecting);
    }, { threshold: 0, rootMargin: '-1px 0px 0px 0px' });
    observerNav.observe(headerEl);
  }

  // 2. Reveal on scroll – từ từ hiện nội dung (không gây AI-style giật)
  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // thêm độ trễ nhẹ cho từng phần tử tạo cảm giác tự nhiên
        setTimeout(() => {
          entry.target.classList.add('in');
        }, idx * 40);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  revealItems.forEach(el => revealObserver.observe(el));

  // 3. Tinh chỉnh anchor link mượt mà (không cần overscroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#" || targetId === "#top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
</script>
</body>
</html>
