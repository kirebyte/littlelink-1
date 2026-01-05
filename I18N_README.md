# Sistema de Internacionalización (i18n)

Este proyecto implementa un sistema completo de internacionalización que permite cambiar entre inglés y español dinámicamente.

## Características

✅ **Detección automática de idioma**: Detecta el idioma del navegador del usuario
✅ **Persistencia**: Guarda la preferencia de idioma en localStorage
✅ **Selector visual**: Dropdown elegante en la esquina superior derecha
✅ **Traducciones completas**: Incluye contenido, botones y meta tags
✅ **Responsive**: Se adapta a dispositivos móviles
✅ **Accesible**: Cumple con estándares de accesibilidad (ARIA labels)
✅ **Temas**: Compatible con tema claro y oscuro

## Estructura de Archivos

```
littlelink/
├── js/
│   └── i18n.js          # Sistema de internacionalización
├── css/
│   └── i18n.css         # Estilos del selector de idioma
└── index.html           # Página principal con atributos data-i18n
```

## Cómo Funciona

### 1. Atributos `data-i18n`

Cada elemento traducible tiene un atributo `data-i18n` con una clave única:

```html
<p data-i18n="site.description">An open source DIY Linktree alternative.</p>
<span data-i18n="button.instagram">Instagram</span>
```

### 2. Objeto de Traducciones

Las traducciones se definen en `js/i18n.js`:

```javascript
const translations = {
  en: {
    'site.description': 'An open source DIY Linktree alternative.',
    'button.instagram': 'Instagram',
    // ...
  },
  es: {
    'site.description': 'Una alternativa DIY de código abierto a Linktree.',
    'button.instagram': 'Instagram',
    // ...
  }
};
```

### 3. Detección y Persistencia

El sistema detecta el idioma en este orden:
1. Idioma guardado en localStorage (preferencia previa del usuario)
2. Idioma del navegador (`navigator.language`)
3. Idioma por defecto: español

## Agregar Nuevas Traducciones

### Paso 1: Agregar la clave en el objeto de traducciones

Edita `js/i18n.js` y agrega la nueva clave en ambos idiomas:

```javascript
const translations = {
  en: {
    // ... traducciones existentes
    'nuevo.elemento': 'New element text',
  },
  es: {
    // ... traducciones existentes
    'nuevo.elemento': 'Texto del nuevo elemento',
  }
};
```

### Paso 2: Agregar el atributo data-i18n en el HTML

```html
<span data-i18n="nuevo.elemento">New element text</span>
```

## Agregar Nuevos Idiomas

Para agregar un nuevo idioma (por ejemplo, francés):

### Paso 1: Agregar traducciones en `js/i18n.js`

```javascript
const translations = {
  en: { /* ... */ },
  es: { /* ... */ },
  fr: {
    'site.description': 'Une alternative DIY open source à Linktree.',
    'button.instagram': 'Instagram',
    // ... todas las traducciones
  }
};
```

### Paso 2: Agregar opción en el selector de idioma

En `index.html`:

```html
<select id="language-selector" class="language-selector" aria-label="Select language">
  <option value="en">English</option>
  <option value="es">Español</option>
  <option value="fr">Français</option>
</select>
```

## Buenas Prácticas Implementadas

### 1. Nomenclatura de Claves
Usamos punto (.) para organizar las claves jerárquicamente:
- `meta.*` - Meta tags
- `site.*` - Contenido del sitio
- `button.*` - Botones
- `footer.*` - Pie de página
- `language.*` - Selector de idioma

### 2. SEO y Accesibilidad
- El atributo `lang` del HTML se actualiza dinámicamente
- Los meta tags (description, keywords) se traducen
- El selector tiene `aria-label` para accesibilidad

### 3. Rendimiento
- Script cargado con `defer` para no bloquear el render
- Traducciones en un solo archivo (no requiere peticiones adicionales)
- Uso de event delegation

### 4. UX
- El selector es visible y fácil de usar
- La preferencia se guarda para futuras visitas
- Transiciones suaves sin recargar la página

## API del Sistema

### Métodos Públicos

```javascript
// Obtener instancia del sistema i18n
const i18n = window.i18n;

// Cambiar idioma programáticamente
i18n.updateLanguage('en');

// Obtener traducción
const traduccion = i18n.t('site.description');

// Obtener idioma actual
const idiomaActual = i18n.currentLang;
```

### Eventos

El sistema emite un evento personalizado cuando cambia el idioma:

```javascript
window.addEventListener('languageChanged', (event) => {
  console.log('Nuevo idioma:', event.detail.lang);
});
```

## Compatibilidad

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+
- ✅ Navegadores móviles modernos

## Solución de Problemas

### El idioma no se guarda
Verifica que localStorage esté habilitado en el navegador.

### Las traducciones no aparecen
1. Verifica que el archivo `js/i18n.js` se cargue correctamente
2. Revisa la consola del navegador en busca de errores
3. Asegúrate de que las claves en `data-i18n` coincidan con las del objeto `translations`

### El selector no se muestra
Verifica que el archivo `css/i18n.css` esté vinculado correctamente en el HTML.

## Mantenimiento

Al agregar nuevos botones o contenido:
1. Envuelve el texto en un `<span>` con `data-i18n="clave.unica"`
2. Agrega la traducción en `js/i18n.js` para ambos idiomas
3. Usa una clave descriptiva y organizada

## Licencia

Este sistema de i18n es parte del proyecto LittleLink y sigue la misma licencia del proyecto principal.
