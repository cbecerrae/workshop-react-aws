# Portafolio profesional en React + Vite

Plantilla para que estudiantes de 10.º ciclo de Ingeniería Industrial y de Sistemas creen un portafolio profesional sin modificar componentes, CSS ni configuración del proyecto.

La filosofía es simple: **edita tus datos y personaliza tu estilo, pero no necesitas tocar el código de la aplicación**.

## Requisitos

- Node.js instalado.
- VS Code o cualquier editor de código.
- Conocimientos básicos para editar un archivo JavaScript.

## Instalación

1. Clona o descarga este repositorio.
2. Abre la carpeta en VS Code.
3. Instala las dependencias:

```bash
npm install
```

4. Ejecuta el proyecto:

```bash
npm run dev
```

5. Abre el enlace local que muestra Vite en la terminal.

## Qué debes modificar

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

## Archivos que NO debes modificar

```text
App.jsx
main.jsx
components/
styles/
package.json
vite.config.js
```

Estos archivos contienen la estructura y el diseño de la plantilla. Si solo quieres personalizar tu portafolio, no necesitas tocarlos.

## Cómo cambiar tu fotografía

Reemplaza este archivo:

```text
public/profile.jpg
```

por tu propia fotografía y mantén el mismo nombre. Si el archivo no existe o la imagen no carga, el portafolio mostrará tus iniciales como respaldo.

## Cómo agregar imágenes de proyectos

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

## Cómo agregar o quitar secciones

Las secciones vacías se ocultan automáticamente. Por ejemplo, si no tienes voluntariado:

```js
volunteering: []
```

También puedes dejar vacíos campos opcionales como teléfono, GitHub, web personal, enlaces o tecnologías.

El portafolio está preparado para no mostrar `undefined`, `null` ni espacios vacíos visuales.

## Cómo agregar proyectos o experiencias

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

## Cómo agregar experiencia profesional

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

Guarda el PDF en `public/projects/certificado-laboral.pdf`. En la experiencia correspondiente, completa `certificate: '/projects/certificado-laboral.pdf'`: aparecera **Ver certificado laboral**, que abre el documento en otra pestaña.

Para mostrarlo tambien como imagen dentro de la experiencia, guarda una version JPG, PNG o WebP y completa `certificateImage: '/projects/certificado-laboral.jpg'`. La imagen se muestra completa y se puede pulsar para abrir el PDF. Puedes usar solo uno de los dos campos o dejar ambos en `''` para ocultarlos. Un PDF se enlaza con `certificate`; no se coloca en `certificateImage`.

| Archivo que guardas | Campo en portfolio.js | Ruta que escribes |
| --- | --- | --- |
| `public/projects/certificado-laboral.pdf` | `experience[].certificate` | `'/projects/certificado-laboral.pdf'` |
| `public/projects/certificado-laboral.jpg` | `experience[].certificateImage` | `'/projects/certificado-laboral.jpg'` |
| `public/projects/curso-power-bi.pdf` | `certifications[].credential` | `'/projects/curso-power-bi.pdf'` |
| `public/projects/dashboard.png` | `projects[].image` | `'/projects/dashboard.png'` |
| `public/projects/informe.pdf` | `projects[].link` | `'/projects/informe.pdf'` |

Las rutas empiezan con `/projects/`, sin `public/` ni rutas de Windows como `C:\\...`. Usa nombres sin espacios ni tildes y respeta la extension y las mayusculas del archivo. Los campos del ejemplo estan vacios porque debes añadir tus propios archivos antes de enlazarlos.

## Cómo cambiar colores y estilo

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
- `fontSize`: `small` (14px), `medium` (16px), `large` (20px), o un numero entre 12 y 24, como `18`. Escala el texto, botones, etiquetas y titulos.
- `headingSize`: `''` para escalar con `fontSize`, o un numero entre 24 y 64 para los titulos de seccion.
- `heroSize`: `''` para escalar con `fontSize`, o un numero entre 32 y 100 para tu nombre. En movil los titulos se limitan para que quepan.
- `lineHeight`: numero entre 1.2 y 2 para separar las lineas de texto.
- `borderRadius`: numero entre 0 y 8 para las esquinas de tarjetas y menus; `0` las hace rectas. La foto y los botones tienen sus propias opciones.
- `borderWidth`: numero entre 0 y 4 para el grosor de los bordes; `0` los oculta.
- `fontFamily`: `Inter`, `Roboto`, `Poppins`, `Montserrat`, `Open Sans`.
- `profileImageShape`: `circle`, `rounded`, `square`.
- `buttonStyle`: `rounded`, `pill`, `square`.
- `sectionSpacing`: `compact`, `comfortable`, `spacious`.

Deja `primaryColor`, `backgroundColor` y `textColor` en `''` para que `colorTheme` y `mode` apliquen sus colores automaticamente. `colorTheme` cambia botones, enlaces, etiquetas y acentos; `mode` cambia el fondo, tarjetas, navegacion y texto.

Tambien puedes cambiar directamente los colores HEX, que tienen prioridad sobre los colores automaticos:

```js
primaryColor: '#0D9488',
backgroundColor: '#FFFFFF',
textColor: '#1E293B'
```

Estos valores se convierten automáticamente en variables CSS. Si dejas un fondo blanco personalizado, se mantendra blanco incluso en modo oscuro. Para volver al tema automatico, usa `''`.

## Cómo activar modo oscuro

En `theme`, cambia:

```js
mode: 'dark'
```

Con `backgroundColor: ''` y `textColor: ''`, solo cambiar `mode` oscurece toda la pagina. No necesitas elegir colores adicionales.

Por ejemplo, para un estilo verde oscuro, letras mas grandes y bordes rectos:

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

## Generar la versión final

Cuando termines tu portafolio, ejecuta:

```bash
npm run build
```

Vite generará una carpeta `dist/` con la versión lista para publicar.
