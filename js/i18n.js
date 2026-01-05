/**
 * Internationalization (i18n) System
 * Handles language switching between English and Spanish
 */

const translations = {
  en: {
    // Meta tags
    'meta.description': 'Official links and social media of Kitsuneando. Find all my content in one place.',
    'meta.keywords': 'Kitsuneando, social media, links, content creator',
    
    // Main content
    'site.description': 'An open source DIY Linktree alternative.',
    
    // Buttons
    'button.amazonWishlist': 'Amazon Wishlist',
    'button.discord': 'Discord',
    'button.instagram': 'Instagram',
    'button.kofi': 'Support me on Ko-fi',
    'button.onlyfans': 'OnlyFans (18+)',
    'button.paypal': 'PayPal',
    'button.telegram': 'Telegram',
    'button.tiktok': 'TikTok',
    'button.youtubeMusic': 'Listen on YouTube Music',
    
    // Footer
    'footer.privacy': 'Privacy Policy',
    'footer.buildYourOwn': 'Build your own by forking',
    
    // Language selector
    'language.select': 'Language',
    'language.en': 'English',
    'language.es': 'Español'
  },
  es: {
    // Meta tags
    'meta.description': 'Enlaces oficiales y redes sociales de Kitsuneando. Encuentra todo mi contenido en un solo lugar.',
    'meta.keywords': 'Kitsuneando, redes sociales, enlaces, creador de contenido',
    
    // Main content
    'site.description': 'Una alternativa DIY de código abierto a Linktree.',
    
    // Buttons
    'button.amazonWishlist': 'Lista de deseos Amazon',
    'button.discord': 'Discord',
    'button.instagram': 'Instagram',
    'button.kofi': 'Apóyame en Ko-fi',
    'button.onlyfans': 'OnlyFans (18+)',
    'button.paypal': 'PayPal',
    'button.telegram': 'Telegram',
    'button.tiktok': 'TikTok',
    'button.youtubeMusic': 'Escuchar en YouTube Music',
    
    // Footer
    'footer.privacy': 'Política de Privacidad',
    'footer.buildYourOwn': 'Crea el tuyo haciendo fork de',
    
    // Language selector
    'language.select': 'Idioma',
    'language.en': 'English',
    'language.es': 'Español'
  }
};

class I18n {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.init();
  }

  /**
   * Detects the user's preferred language
   * Priority: localStorage > browser language > default (es)
   */
  detectLanguage() {
    // Check localStorage first
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && translations[savedLang]) {
      return savedLang;
    }

    // Check browser language
    const browserLang = navigator.language.toLowerCase().split('-')[0];
    if (translations[browserLang]) {
      return browserLang;
    }

    // Default to Spanish
    return 'es';
  }

  /**
   * Initializes the i18n system
   */
  init() {
    this.updateLanguage(this.currentLang);
    this.setupLanguageSelector();
  }

  /**
   * Updates all translatable elements on the page
   */
  updateLanguage(lang) {
    if (!translations[lang]) {
      console.error(`Language ${lang} not supported`);
      return;
    }

    this.currentLang = lang;
    localStorage.setItem('preferred-language', lang);

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update meta tags
    this.updateMetaTag('description', translations[lang]['meta.description']);
    this.updateMetaTag('keywords', translations[lang]['meta.keywords']);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = translations[lang][key];
      
      if (translation) {
        // Check if it's an input/textarea element
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update language selector
    this.updateLanguageSelector();

    // Dispatch custom event for language change
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  /**
   * Updates a meta tag content
   */
  updateMetaTag(name, content) {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (meta) {
      meta.setAttribute('content', content);
    }
  }

  /**
   * Sets up the language selector dropdown
   */
  setupLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (!selector) return;

    selector.addEventListener('change', (e) => {
      this.updateLanguage(e.target.value);
    });
  }

  /**
   * Updates the language selector to show current language
   */
  updateLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (selector) {
      selector.value = this.currentLang;
    }
  }

  /**
   * Gets a translation for a specific key
   */
  t(key) {
    return translations[this.currentLang][key] || key;
  }
}

// Initialize i18n when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
  });
} else {
  window.i18n = new I18n();
}
