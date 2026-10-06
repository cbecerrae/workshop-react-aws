# 💻 Workshop #1 — Crea tu primera aplicación web con React

🎤 Instructora: [Agnes Buscal Chang](https://www.linkedin.com/in/agnes-buscal-chang/)

En este workshop vas a personalizar una plantilla de portafolio profesional con React + Vite usando tu propia información, visualizarla en tu navegador y generar la versión final para publicar.

La filosofía es simple: **edita tus datos y personaliza tu estilo, pero no necesitas tocar el código de la aplicación**.

---

## 📋 Requisitos

- Node.js instalado (ya está listo en las PCs del workshop).
- VS Code o cualquier editor de código.
- Conocimientos básicos para editar un archivo JavaScript.

---

## 📥 Paso 1: Instalar y ejecutar el proyecto

1. Clona o descarga este repositorio y abre la carpeta en VS Code.

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el proyecto:

```bash
npm run dev
```

4. Abre el enlace local que muestra Vite en la terminal.

---

## ✏️ Paso 2: Personaliza tu portafolio

Trabaja principalmente en:

```text
src/data/portfolio.js
public/profile.jpg
public/projects/
```

En `src/data/portfolio.js` encontrarás secciones comentadas para completar:

- Datos personales.
- Perfil profesional.
- Habilidades.
- Proyectos y experiencias destacadas.
- Experiencia profesional.
- Educación.
- Certificaciones y cursos.
- Voluntariado y liderazgo.
- Logros.
- Idiomas.
- Contacto.
- Personalización visual.

### Archivos que NO debes modificar

```text
App.jsx
main.jsx
components/
styles/
package.json
vite.config.js
```

Estos archivos contienen la estructura y el diseño de la plantilla. Si solo quieres personalizar tu portafolio, no necesitas tocarlos.

---

## 🖼️ Paso 3: Imágenes y proyectos

### Cómo cambiar tu fotografía

Reemplaza este archivo:

```text
public/profile.jpg
```

por tu propia fotografía y mantén el mismo nombre. Si el archivo no existe o la imagen no carga, el portafolio mostrará tus iniciales como respaldo.

### Cómo agregar imágenes de proyectos

Guarda tus imágenes en:

```text
public/projects/
```

Luego usa la ruta en `portfolio.js`:

```js
image: '/projects/mi-proyecto.jpg'
```

Si no quieres mostrar imagen en un proyecto, deja:

```js
image: ''
```

### Cómo agregar o quitar secciones

Las secciones vacías se ocultan automáticamente. Por ejemplo, si no tienes voluntariado:

```js
volunteering: []
```

También puedes dejar vacíos campos opcionales como teléfono, GitHub, web personal, enlaces o tecnologías. El portafolio está preparado para no mostrar `undefined`, `null` ni espacios vacíos visuales.

---

## 🗂️ Paso 4: Proyectos y experiencia

### Cómo agregar proyectos

Agrega objetos dentro de `projects`:

```js
{
  title: 'Nombre del proyecto',
  type: 'Proyecto universitario',
  description: 'Descripción breve del proyecto.',
  date: '2026',
  role: 'Rol desempeñado',
  technologies: ['Python', 'SQL'],
  skills: ['Análisis de datos', 'Trabajo en equipo'],
  image: '',
  link: ''
}
```

No todos los proyectos necesitan tecnologías. Puedes usar:

```js
technologies: []
```

### Cómo agregar experiencia profesional

Agrega objetos dentro de `experience`:

```js
{
  company: 'Empresa',
  position: 'Practicante',
  period: '2025 - 2026',
  description: 'Descripción de tus responsabilidades.',
  achievements: [
    'Logro o responsabilidad',
    'Logro o responsabilidad'
  ],
  certificate: '/projects/certificado-laboral.pdf',
  certificateImage: '/projects/certificado-laboral.jpg'
}
```

Si aún no tienes experiencia laboral, usa:

```js
experience: []
```

### Mostrar un certificado laboral

Guarda el PDF en `public/projects/certificado-laboral.pdf`. En la experiencia correspondiente, completa `certificate: '/projects/certificado-laboral.pdf'`: aparecerá **Ver certificado laboral**, que abre el documento en otra pestaña.

Para mostrarlo también como imagen dentro de la experiencia, guarda una versión JPG, PNG o WebP y completa `certificateImage: '/projects/certificado-laboral.jpg'`. La imagen se muestra completa y se puede pulsar para abrir el PDF. Puedes usar solo uno de los dos campos o dejar ambos en `''` para ocultarlos. Un PDF se enlaza con `certificate`; no se coloca en `certificateImage`.

| Archivo que guardas | Campo en portfolio.js | Ruta que escribes |
| --- | --- | --- |
| `public/projects/certificado-laboral.pdf` | `experience[].certificate` | `'/projects/certificado-laboral.pdf'` |
| `public/projects/certificado-laboral.jpg` | `experience[].certificateImage` | `'/projects/certificado-laboral.jpg'` |
| `public/projects/curso-power-bi.pdf` | `certifications[].credential` | `'/projects/curso-power-bi.pdf'` |
| `public/projects/dashboard.png` | `projects[].image` | `'/projects/dashboard.png'` |
| `public/projects/informe.pdf` | `projects[].link` | `'/projects/informe.pdf'` |

Las rutas empiezan con `/projects/`, sin `public/` ni rutas de Windows como `C:\\...`. Usa nombres sin espacios ni tildes y respeta la extensión y las mayúsculas del archivo. Los campos del ejemplo están vacíos porque debes añadir tus propios archivos antes de enlazarlos.

---

## 🎨 Paso 5: Cambiar colores y estilo

Edita la sección `theme` en `src/data/portfolio.js`:

```js
theme: {
  colorTheme: 'blue',
  primaryColor: '',
  backgroundColor: '',
  textColor: '',
  mode: 'light',
  fontSize: 'medium',
  headingSize: '',
  heroSize: '',
  lineHeight: 1.6,
  borderRadius: 8,
  borderWidth: 1,
  fontFamily: 'Inter',
  profileImageShape: 'circle',
  buttonStyle: 'rounded',
  sectionSpacing: 'comfortable'
}
```

Opciones disponibles:

- `colorTheme`: `blue`, `purple`, `green`, `orange`, `red`, `pink`, `teal`.
- `mode`: `light`, `dark`.
- `fontSize`: `small` (14px), `medium` (16px), `large` (20px), o un número entre 12 y 24, como `18`. Escala el texto, botones, etiquetas y títulos.
- `headingSize`: `''` para escalar con `fontSize`, o un número entre 24 y 64 para los títulos de sección.
- `heroSize`: `''` para escalar con `fontSize`, o un número entre 32 y 100 para tu nombre. En móvil los títulos se limitan para que quepan.
- `lineHeight`: número entre 1.2 y 2 para separar las líneas de texto.
- `borderRadius`: número entre 0 y 8 para las esquinas de tarjetas y menús; `0` las hace rectas. La foto y los botones tienen sus propias opciones.
- `borderWidth`: número entre 0 y 4 para el grosor de los bordes; `0` los oculta.
- `fontFamily`: `Inter`, `Roboto`, `Poppins`, `Montserrat`, `Open Sans`.
- `profileImageShape`: `circle`, `rounded`, `square`.
- `buttonStyle`: `rounded`, `pill`, `square`.
- `sectionSpacing`: `compact`, `comfortable`, `spacious`.

Deja `primaryColor`, `backgroundColor` y `textColor` en `''` para que `colorTheme` y `mode` apliquen sus colores automáticamente. `colorTheme` cambia botones, enlaces, etiquetas y acentos; `mode` cambia el fondo, tarjetas, navegación y texto.

También puedes cambiar directamente los colores HEX, que tienen prioridad sobre los colores automáticos:

```js
primaryColor: '#0D9488',
backgroundColor: '#FFFFFF',
textColor: '#1E293B'
```

Estos valores se convierten automáticamente en variables CSS. Si dejas un fondo blanco personalizado, se mantendrá blanco incluso en modo oscuro. Para volver al tema automático, usa `''`.

### Cómo activar modo oscuro

En `theme`, cambia:

```js
mode: 'dark'
```

Con `backgroundColor: ''` y `textColor: ''`, solo cambiar `mode` oscurece toda la página. No necesitas elegir colores adicionales.

Por ejemplo, para un estilo verde oscuro, letras más grandes y bordes rectos:

```js
colorTheme: 'green',
mode: 'dark',
primaryColor: '',
backgroundColor: '',
textColor: '',
fontSize: 18,
headingSize: 36,
heroSize: 64,
lineHeight: 1.7,
borderRadius: 0,
borderWidth: 2,
buttonStyle: 'square'
```

---

## 📦 Paso 6: Generar la versión final

Cuando termines tu portafolio, ejecuta:

```bash
npm run build
```

Vite generará una carpeta `dist/` con la versión lista para publicar:

```text
dist/
├── index.html
├── assets/
└── ...
```

> 📁 Esta es la carpeta que subiremos a AWS en el siguiente workshop.

---

## 🔍 Verificación

Antes de continuar con el despliegue en AWS, verifica que:

- [ ] Tu portafolio muestra tu nombre e información correcta
- [ ] La foto de perfil se ve bien
- [ ] Los enlaces de redes sociales son correctos
- [ ] La carpeta `dist/` se generó correctamente

---

## 💡 Consejos

- Escribe las URLs completas incluyendo `https://`.
- Para el correo solo cambia el campo `email`; la plantilla crea el enlace `mailto:` automáticamente.
- Puedes agregar o quitar elementos de cualquier lista (`projects`, `skills`, `experience`, etc.).
- Si algo no se ve bien, revisa que no falten comas ni llaves en el código JavaScript.

---

**¿Tu portafolio está listo?** → Continúa con [`aws-workshop.md`](aws-workshop.md) para desplegarlo en la nube ☁️
