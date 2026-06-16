(function () {
  'use strict';

  var LANG_KEY = 'twojingjoks-lang';
  var SUPPORTED = ['th', 'en', 'zh'];

  var translations = {
    th: {
      'meta.title': 'Twojingjoks | Digital Bestie — รับงาน Sponsor & Collaboration',
      'meta.description': 'Twojingjoks — Digital bestie พร้อมรับงาน sponsor, collaboration และ brand partnership ติดต่องานผ่าน Instagram @twojingjoks',
      'nav.menuLabel': 'เปิดเมนู',
      'nav.about': 'เกี่ยวกับเรา',
      'nav.collaboration': 'รูปแบบงาน',
      'nav.whyUs': 'จุดเด่น',
      'nav.contact': 'ติดต่องาน',
      'hero.badge': 'Digital Bestie ✨',
      'hero.tagline': 'เพื่อนดิจิทัลที่พร้อมแชร์ไลฟ์สไตล์สนุกๆ ให้ทุกคน',
      'hero.desc': 'พร้อมรับงาน sponsor & collaboration กับแบรนด์ที่อยากเข้าถึงคนรุ่นใหม่แบบเป็นกันเอง',
      'hero.btnContact': 'ติดต่องานผ่าน Instagram',
      'hero.btnProfile': 'ดู Instagram Profile',
      'hero.float1': 'Lifestyle',
      'hero.float2': 'Fun Content',
      'hero.float3': 'Digital Bestie',
      'about.label': 'About Us',
      'about.titlePrefix': 'เราคือ',
      'about.desc': 'Content creator สาย Digital Bestie ที่ชอบแชร์เรื่องราวสนุกๆ ไลฟ์สไตล์ และสิ่งที่น่าสนใจให้กับเพื่อนๆ บนโซเชียล',
      'collab.label': 'Collaboration',
      'collab.title': 'รูปแบบงานที่รับ',
      'collab.desc': 'เปิดรับงานร่วมกับแบรนด์หลากหลายรูปแบบ ปรับแต่งได้ตาม brief',
      'collab.card1.title': 'Sponsored Post / Reels',
      'collab.card1.desc': 'โพสต์หรือ Reels รีวิวสินค้า/บริการ สไตล์สนุก เป็นกันเอง — คอนเทนต์ที่ relatable เข้าถึงกลุ่มคนรุ่นใหม่ที่แบรนด์อยากพูดด้วยได้จริง',
      'collab.card2.title': 'Product Review / Unboxing',
      'collab.card2.desc': 'รีวิวสินค้าแบบละเอียด Unboxing สนุกๆ ให้ผู้ติดตามเห็นจุดเด่นของแบรนด์ชัดเจน',
      'collab.card3.title': 'Brand Ambassador',
      'collab.card3.desc': 'ร่วมงานระยะยาวเป็นแบรนด์แอมบาสเดอร์ สร้างภาพลักษณ์แบรนด์อย่างต่อเนื่อง',
      'collab.card4.title': 'Event / Live Coverage',
      'collab.card4.desc': 'เข้าร่วมงานอีเวนต์ ถ่ายทอดสด หรือทำ content สดๆ จากงานของแบรนด์',
      'why.label': 'Why Partner With Us',
      'why.title': 'ทำไมต้องร่วมงานกับเรา',
      'why.card1.title': 'Audience ตรงกลุ่ม',
      'why.card1.desc': 'ผู้ติดตามส่วนใหญ่เป็นคนรุ่นใหม่ที่ชอบ lifestyle, beauty และ content สนุกๆ — เหมาะกับแบรนด์ที่อยากเข้าถึง Gen Z & Young Millennial',
      'why.card2.title': 'Content สนุก มีสีสัน',
      'why.card2.desc': 'คอนเทนต์สไตล์ Digital Bestie อ่านง่าย น่ารัก มีเอกลักษณ์ — ทำให้แบรนด์ของคุณโดดเด่นใน feed',
      'why.card3.title': 'Responsive ต่อ Brief',
      'why.card3.desc': 'ตอบกลับเร็ว ปรับ content ตาม brief ของแบรนด์ได้ ทำงานร่วมกันอย่างเป็นมิตรและมืออาชีพ',
      'cta.title': 'สนใจร่วมงาน? ทักมาได้เลย! 💌',
      'cta.desc': 'ส่ง DM มาบน Instagram พร้อม brief งาน เราจะตอบกลับโดยเร็วที่สุด',
      'cta.btn': 'ทัก Instagram DM',
      'footer.copy': '© 2026 Twojingjoks. All rights reserved.',
      'lang.label': 'เลือกภาษา'
    },
    en: {
      'meta.title': 'Twojingjoks | Digital Bestie — Sponsorship & Collaboration',
      'meta.description': 'Twojingjoks — Your digital bestie, open for sponsorship, collaboration, and brand partnerships. Contact us on Instagram @twojingjoks',
      'nav.menuLabel': 'Open menu',
      'nav.about': 'About',
      'nav.collaboration': 'Collaboration',
      'nav.whyUs': 'Why Us',
      'nav.contact': 'Contact',
      'hero.badge': 'Digital Bestie ✨',
      'hero.tagline': 'Your digital bestie sharing fun lifestyle content with everyone',
      'hero.desc': 'Open for sponsorship & collaboration with brands looking to reach young audiences in a friendly, authentic way',
      'hero.btnContact': 'Contact via Instagram',
      'hero.btnProfile': 'View Instagram Profile',
      'hero.float1': 'Lifestyle',
      'hero.float2': 'Fun Content',
      'hero.float3': 'Digital Bestie',
      'about.label': 'About Us',
      'about.titlePrefix': 'We are',
      'about.desc': 'A Digital Bestie content creator who loves sharing fun stories, lifestyle tips, and interesting finds with friends on social media',
      'collab.label': 'Collaboration',
      'collab.title': 'Collaboration Types',
      'collab.desc': 'We work with brands in many formats — flexible to your brief',
      'collab.card1.title': 'Sponsored Post / Reels',
      'collab.card1.desc': 'Fun, charismatic posts and Reels that showcase your product or service, helping your brand connect with the right audience and drive meaningful engagement.',
      'collab.card2.title': 'Product Review / Unboxing',
      'collab.card2.desc': 'Detailed product reviews and fun unboxing videos that highlight your brand clearly',
      'collab.card3.title': 'Brand Ambassador',
      'collab.card3.desc': 'Long-term brand ambassador partnerships to build your brand image consistently',
      'collab.card4.title': 'Event / Live Coverage',
      'collab.card4.desc': 'Attend events, live stream, or create real-time content from your brand activations',
      'why.label': 'Why Partner With Us',
      'why.title': 'Why Work With Us',
      'why.card1.title': 'Targeted Audience',
      'why.card1.desc': 'A community of foodies always searching for their next great dining experience, from trendy cafés to local hidden gems. Perfect for restaurants, food brands, beverages, and hospitality businesses looking to connect with engaged food lovers. 🍽️✨',
      'why.card2.title': 'Fun, Colorful Content',
      'why.card2.desc': 'Cute, engaging, and easy to read Digital Bestie style content that helps your brand stand out and leave a lasting impression. 💌✨',
      'why.card3.title': 'Responsive to Briefs',
      'why.card3.desc': 'We work hand in hand with your brand, refining ideas and developing content together to create campaigns that feel natural, creative, and effective.',
      'cta.title': 'Interested in working together? Say hi! 💌',
      'cta.desc': 'Send us a DM on Instagram to discuss your ideas and collaborate with us.',
      'cta.btn': 'Message on Instagram',
      'footer.copy': '© 2026 Twojingjoks. All rights reserved.',
      'lang.label': 'Select language'
    },
    zh: {
      'meta.title': 'Twojingjoks | Digital Bestie — 赞助与合作',
      'meta.description': 'Twojingjoks — 你的数字闺蜜，开放赞助、合作与品牌联名。通过 Instagram @twojingjoks 联系我们',
      'nav.menuLabel': '打开菜单',
      'nav.about': '关于我们',
      'nav.collaboration': '合作形式',
      'nav.whyUs': '合作优势',
      'nav.contact': '联系我们',
      'hero.badge': 'Digital Bestie ✨',
      'hero.tagline': '你的数字闺蜜，与大家分享有趣的生活方式',
      'hero.desc': '开放赞助与合作，帮助品牌以亲切真实的方式触达年轻受众',
      'hero.btnContact': '通过 Instagram 联系',
      'hero.btnProfile': '查看 Instagram 主页',
      'hero.float1': '生活方式',
      'hero.float2': '趣味内容',
      'hero.float3': '数字闺蜜',
      'about.label': 'About Us',
      'about.titlePrefix': '我们是',
      'about.desc': 'Digital Bestie 风格的内容创作者，喜欢在社交媒体上与朋友分享有趣的故事、生活方式和好物',
      'collab.label': 'Collaboration',
      'collab.title': '合作形式',
      'collab.desc': '接受多种品牌合作形式，可根据 brief 灵活调整',
      'collab.card1.title': '赞助帖文 / Reels',
      'collab.card1.desc': '以轻松亲切的风格发布帖文或 Reels 评测产品/服务，真实触达受众',
      'collab.card2.title': '产品评测 / 开箱',
      'collab.card2.desc': '详细的产品评测和趣味开箱视频，清晰展现品牌亮点',
      'collab.card3.title': '品牌大使',
      'collab.card3.desc': '长期品牌大使合作，持续塑造品牌形象',
      'collab.card4.title': '活动 / 直播报道',
      'collab.card4.desc': '出席活动、直播或现场创作品牌相关内容',
      'why.label': 'Why Partner With Us',
      'why.title': '为什么选择我们',
      'why.card1.title': '精准受众',
      'why.card1.desc': '粉丝以年轻人为主，喜爱生活方式、美妆和趣味内容 — 非常适合 targeting Gen Z 和年轻千禧一代的品牌',
      'why.card2.title': '有趣有色的内容',
      'why.card2.desc': 'Digital Bestie 风格内容易读、可爱、有辨识度 — 让你的品牌在信息流中脱颖而出',
      'why.card3.title': '快速响应 Brief',
      'why.card3.desc': '回复迅速，内容可根据品牌 brief 灵活调整 — 专业且友好的合作体验',
      'cta.title': '有兴趣合作？欢迎私信！💌',
      'cta.desc': '在 Instagram 发送 DM 并附上项目 brief，我们会尽快回复',
      'cta.btn': 'Instagram 私信',
      'footer.copy': '© 2026 Twojingjoks. All rights reserved.',
      'lang.label': '选择语言'
    }
  };

  function detectLanguage() {
    var saved = localStorage.getItem(LANG_KEY);
    if (saved && SUPPORTED.indexOf(saved) !== -1) {
      return saved;
    }

    var browserLang = (navigator.language || navigator.userLanguage || 'th').toLowerCase();
    if (browserLang.indexOf('zh') === 0) return 'zh';
    if (browserLang.indexOf('en') === 0) return 'en';
    if (browserLang.indexOf('th') === 0) return 'th';
    return 'th';
  }

  function applyLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'th';

    var strings = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (strings[key] !== undefined) {
        el.textContent = strings[key];
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (strings[key] !== undefined) {
        el.setAttribute('aria-label', strings[key]);
      }
    });

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    document.body.setAttribute('data-lang', lang);

    document.title = strings['meta.title'];

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', strings['meta.description']);

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', strings['meta.title']);

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', strings['meta.description']);

    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      var locales = { th: 'th_TH', en: 'en_US', zh: 'zh_CN' };
      ogLocale.setAttribute('content', locales[lang]);
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });

    localStorage.setItem(LANG_KEY, lang);
  }

  function initI18n() {
    var lang = detectLanguage();
    applyLanguage(lang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  window.TwojingjoksI18n = {
    applyLanguage: applyLanguage,
    init: initI18n
  };
})();
