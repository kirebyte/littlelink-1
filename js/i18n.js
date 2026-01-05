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
    'site.description': 'made with love for my "furritos" 💜',
    
    // Buttons
    'button.amazonWishlist': 'Amazon Wishlist',
    'button.discord': 'Discord',
    'button.instagram': 'Instagram',
    'button.kofi': 'Support me on Ko-fi',
    'button.onlyfans': 'OnlyFans (18+)',
    'button.paypal': 'PayPal',
    'button.telegram': 'Telegram',
    'button.tiktok': 'TikTok',
    'button.twitter': 'X (Twitter)',
    'button.youtube': 'YouTube',
    'button.youtubeMusic': "Kira's favorite music",
    
    // Footer
    'footer.privacy': 'Privacy Policy',
    'footer.buildYourOwn': 'Build your own by forking',
    'footer.rights': 'All rights reserved.',
    
    // Button sections
    'section.follow': 'Contact Me',
    'section.support': 'Support My Work',
    'section.content': 'Watch My Content',
    'section.fans': 'Fandom & Lore',
    
    // Language selector
    'language.select': 'Language',
    'language.en': 'English',
    'language.es': 'Español',
    
    // Privacy Policy Page
    'privacy.meta.description': 'Privacy policy and data collection information for Kitsuneando',
    'privacy.title': 'Privacy Policy',
    'privacy.backLink': '← Back to main page',
    'privacy.lastUpdated': 'Last updated: January 5, 2026',
    
    // Privacy sections
    'privacy.intro.heading': 'Introduction',
    'privacy.intro.p1': 'Welcome to Kitsuneando! This privacy policy explains how we handle information when you visit this page and interact with our content across various platforms.',
    'privacy.intro.p2': 'We are committed to protecting your privacy and being transparent about any data collection.',
    
    'privacy.dataCollection.heading': 'Information We Collect',
    'privacy.dataCollection.intro': 'This simple link page is designed to minimize data collection. We may collect:',
    'privacy.dataCollection.analytics': 'Basic Analytics:',
    'privacy.dataCollection.analyticsDesc': 'Page views, referral sources, and general location data (country/region level only) through standard web hosting analytics',
    'privacy.dataCollection.noPersonal': 'No Personal Information:',
    'privacy.dataCollection.noPersonalDesc': 'We do not collect names, email addresses, or any personally identifiable information directly through this page',
    
    'privacy.external.heading': 'Third-Party Platforms',
    'privacy.external.intro': 'When you click on links to external platforms (Twitter/X, TikTok, Ko-fi, etc.), you will be subject to those platforms\' privacy policies:',
    'privacy.external.socialMedia': 'Social Media Platforms',
    'privacy.external.privacyPolicy': 'Privacy Policy',
    'privacy.external.contentTools': 'Content & AI Tools',
    'privacy.external.contentToolsDesc': 'Our content is created using various AI tools. Any AI-generated content shown on our platforms does not contain or process your personal data.',
    
    'privacy.hosting.heading': 'Hosting and Infrastructure',
    'privacy.hosting.intro': 'This website is hosted using standard web hosting services. These services may collect:',
    'privacy.hosting.ip': 'IP addresses (for security and basic analytics)',
    'privacy.hosting.browser': 'Browser type and version',
    'privacy.hosting.access': 'Access times and referring website addresses',
    'privacy.hosting.usage': 'This data is used solely for maintaining site security and performance.',
    
    'privacy.cookies.heading': 'Cookies',
    'privacy.cookies.desc': 'This page uses minimal or no cookies. Your browser\'s theme preference (light/dark mode) may be stored locally in your browser but is not transmitted to any server.',
    
    'privacy.userContent.heading': 'User-Generated Content',
    'privacy.userContent.desc': 'If you interact with our content on social media platforms (comments, likes, shares), that interaction is governed by the respective platform\'s privacy policy, not ours.',
    
    'privacy.children.heading': 'Adult Content (18+)',
    'privacy.children.desc': 'Our content is intended exclusively for audiences 18 years and older. We do not allow or knowingly collect information from minors. By accessing our content, you confirm that you are of legal age.',
    
    'privacy.changes.heading': 'Changes to This Policy',
    'privacy.changes.desc': 'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.',
    
    'privacy.contact.heading': 'Contact',
    'privacy.contact.intro': 'If you have questions about this privacy policy, you can reach us through:',
    'privacy.contact.email': 'Email:',
    'privacy.contact.location': 'Location: México'
  },
  es: {
    // Meta tags
    'meta.description': 'Enlaces oficiales y redes sociales de Kitsuneando. Encuentra todo mi contenido en un solo lugar.',
    'meta.keywords': 'Kitsuneando, redes sociales, enlaces, creador de contenido',
    
    // Main content
    'site.description': 'con amor para mis furritos 💜',
    
    // Buttons
    'button.amazonWishlist': 'Lista de deseos Amazon',
    'button.discord': 'Discord',
    'button.instagram': 'Instagram',
    'button.kofi': 'Apóyame en Ko-fi',
    'button.onlyfans': 'OnlyFans (18+)',
    'button.paypal': 'PayPal',
    'button.telegram': 'Telegram',
    'button.tiktok': 'TikTok',    'button.twitter': 'X (Twitter)',    'button.youtube': 'YouTube',
    'button.youtubeMusic': "La música favorita de Kira",
    
    // Footer
    'footer.privacy': 'Política de Privacidad',
    'footer.buildYourOwn': 'Crea el tuyo haciendo fork de',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Button sections
    'section.follow': 'Contáctame',
    'section.support': 'Apoya Mi Trabajo',
    'section.content': 'Mira Mi Contenido',
    'section.fans': 'Fandom y Lore',
    
    // Language selector
    'language.select': 'Idioma',
    'language.en': 'English',
    'language.es': 'Español',
    
    // Privacy Policy Page
    'privacy.meta.description': 'Política de privacidad e información de recopilación de datos de Kitsuneando',
    'privacy.title': 'Política de Privacidad',
    'privacy.backLink': '← Volver a la página principal',
    'privacy.lastUpdated': 'Última actualización: 5 de enero de 2026',
    
    // Privacy sections
    'privacy.intro.heading': 'Introducción',
    'privacy.intro.p1': '¡Bienvenido a Kitsuneando! Esta política de privacidad explica cómo manejamos la información cuando visitas esta página e interactúas con nuestro contenido en varias plataformas.',
    'privacy.intro.p2': 'Estamos comprometidos a proteger tu privacidad y ser transparentes sobre cualquier recopilación de datos.',
    
    'privacy.dataCollection.heading': 'Información que Recopilamos',
    'privacy.dataCollection.intro': 'Esta simple página de enlaces está diseñada para minimizar la recopilación de datos. Podemos recopilar:',
    'privacy.dataCollection.analytics': 'Análisis Básicos:',
    'privacy.dataCollection.analyticsDesc': 'Visualizaciones de página, fuentes de referencia y datos de ubicación general (solo a nivel de país/región) a través de análisis estándar de alojamiento web',
    'privacy.dataCollection.noPersonal': 'Sin Información Personal:',
    'privacy.dataCollection.noPersonalDesc': 'No recopilamos nombres, direcciones de correo electrónico ni ninguna información de identificación personal directamente a través de esta página',
    
    'privacy.external.heading': 'Plataformas de Terceros',
    'privacy.external.intro': 'Cuando haces clic en enlaces a plataformas externas (Twitter/X, TikTok, Ko-fi, etc.), estarás sujeto a las políticas de privacidad de esas plataformas:',
    'privacy.external.socialMedia': 'Plataformas de Redes Sociales',
    'privacy.external.privacyPolicy': 'Política de Privacidad',
    'privacy.external.contentTools': 'Contenido y Herramientas de IA',
    'privacy.external.contentToolsDesc': 'Nuestro contenido se crea utilizando varias herramientas de IA. Cualquier contenido generado por IA mostrado en nuestras plataformas no contiene ni procesa tus datos personales.',
    
    'privacy.hosting.heading': 'Alojamiento e Infraestructura',
    'privacy.hosting.intro': 'Este sitio web está alojado utilizando servicios estándar de alojamiento web. Estos servicios pueden recopilar:',
    'privacy.hosting.ip': 'Direcciones IP (para seguridad y análisis básicos)',
    'privacy.hosting.browser': 'Tipo y versión del navegador',
    'privacy.hosting.access': 'Horarios de acceso y direcciones de sitios web de referencia',
    'privacy.hosting.usage': 'Estos datos se utilizan únicamente para mantener la seguridad y el rendimiento del sitio.',
    
    'privacy.cookies.heading': 'Cookies',
    'privacy.cookies.desc': 'Esta página utiliza cookies mínimas o ninguna. La preferencia de tema de tu navegador (modo claro/oscuro) puede almacenarse localmente en tu navegador, pero no se transmite a ningún servidor.',
    
    'privacy.userContent.heading': 'Contenido Generado por el Usuario',
    'privacy.userContent.desc': 'Si interactúas con nuestro contenido en plataformas de redes sociales (comentarios, me gusta, compartir), esa interacción se rige por la política de privacidad de la plataforma respectiva, no la nuestra.',
    
    'privacy.children.heading': 'Contenido para Adultos (18+)',
    'privacy.children.desc': 'Nuestro contenido está destinado exclusivamente para audiencias mayores de 18 años. No permitimos ni recopilamos información conscientemente de menores de edad. Al acceder a nuestro contenido, confirmas que eres mayor de edad.',
    
    'privacy.changes.heading': 'Cambios en Esta Política',
    'privacy.changes.desc': 'Podemos actualizar esta política de privacidad de vez en cuando. Cualquier cambio se publicará en esta página con una fecha de revisión actualizada.',
    
    'privacy.contact.heading': 'Contacto',
    'privacy.contact.intro': 'Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través de:',
    'privacy.contact.email': 'Correo electrónico:',
    'privacy.contact.location': 'Ubicación: México'
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

    // Update meta tags - check if we're on privacy page
    const isPrivacyPage = window.location.pathname.includes('privacy');
    if (isPrivacyPage) {
      this.updateMetaTag('description', translations[lang]['privacy.meta.description']);
    } else {
      this.updateMetaTag('description', translations[lang]['meta.description']);
      this.updateMetaTag('keywords', translations[lang]['meta.keywords']);
    }

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

    // Update contact email based on language
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) {
      const emailPrefix = lang === 'es' ? 'privacidad' : 'privacy';
      contactEmail.href = `mailto:${emailPrefix}@nahualis.com`;
      contactEmail.textContent = `${emailPrefix}@nahualis.com`;
    }

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
