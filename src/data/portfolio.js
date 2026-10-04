// Plantilla de portafolio profesional
// Edita este archivo para personalizar tu portafolio.
// No necesitas modificar componentes, CSS ni configuración del proyecto.

const portfolio = {
  // ==========================================
  // PERSONALIZA EL DISEÑO
  // Cambia estos valores para darle tu propio
  // estilo al portafolio.
  // ==========================================
  theme: {
    // Opciones: blue, purple, green, orange, red, pink, teal
    colorTheme: 'blue',

    // Deja '' para usar colorTheme y los colores automaticos de mode.
    // Un HEX aqui tiene prioridad: primaryColor: '#0D9488', por ejemplo.
    primaryColor: '',
    backgroundColor: '',
    textColor: '',

    // Opciones: light, dark
    mode: 'light',

    // Opciones: small (14px), medium (16px), large (20px), o numero: 18.
    // Cambia todo el texto, incluidos botones y titulos.
    fontSize: 'medium',

    // '' escala los titulos con fontSize. O usa un numero en pixeles.
    headingSize: '', // Ejemplo: 36 (titulos de seccion, entre 24 y 64).
    heroSize: '', // Ejemplo: 64 (tu nombre, entre 32 y 100).
    lineHeight: 1.6, // Separacion entre lineas: de 1.2 a 2.
    borderRadius: 8, // Esquinas de tarjetas y menus: de 0 a 8px.
    borderWidth: 1, // Grosor de bordes: de 0 a 4px; 0 los oculta.

    // Opciones: Inter, Roboto, Poppins, Montserrat, Open Sans
    fontFamily: 'Inter',

    // Opciones: circle, rounded, square
    profileImageShape: 'circle',

    // Opciones: rounded, pill, square
    buttonStyle: 'rounded',

    // Opciones: compact, comfortable, spacious
    sectionSpacing: 'compact',
  },

  // ==========================================
  // DATOS PERSONALES
  // Completa esta sección con tu información.
  // Para cambiar tu foto, reemplaza public/profile.jpg
  // por tu propia imagen manteniendo el mismo nombre.
  // ==========================================
  personal: {
    name: 'Nombres y Apellidos',
    title: 'Ingeniera Industrial y de Sistemas',
    university: 'Universidad de Piura',
    career: 'Ingeniería Industrial y de Sistemas', 
    cycle: '10.º ciclo', 
    location: 'Piura, Perú',
    photo: '/profile.png', // Cambia la foto en public/profile.png
    email: 'tucorreo@gmail.com',
    phone: '',
    linkedin: 'https://linkedin.com/in/tu-usuario',
    github: 'https://github.com/tu-usuario',
    website: '',
  },

  // ==========================================
  // PERFIL PROFESIONAL
  // Escribe un resumen propio. Evita copiar un
  // texto genérico: este espacio debe sonar a ti.
  // ==========================================
  about: {
    headline: 'Perfil orientado a resolver problemas con tecnología, procesos y gestión.',
    description:
      'Soy estudiante de último ciclo con interés en análisis de datos, mejora de procesos y gestión de proyectos. Me motiva trabajar en iniciativas donde pueda combinar pensamiento analítico, herramientas digitales y colaboración con equipos multidisciplinarios para generar mejoras medibles.',
    interests: ['Análisis de datos', 'Optimización de procesos', 'Gestión de proyectos', 'Innovación'],
  },

  // ==========================================
  // HABILIDADES
  // Puedes agregar, eliminar o cambiar categorías.
  // ==========================================
  skills: [
    {
      category: 'Tecnología',
      items: ['Python', 'SQL', 'Power BI', 'React'],
    },
    {
      category: 'Ingeniería',
      items: ['Lean Manufacturing', 'Gestión de procesos', 'Investigación de operaciones'],
    },
    {
      category: 'Gestión',
      items: ['Liderazgo', 'Trabajo en equipo', 'Planificación', 'Comunicación efectiva'],
    },
  ],

  // ==========================================
  // PROYECTOS Y EXPERIENCIAS DESTACADAS
  // Usa esta sección para proyectos universitarios,
  // investigación, emprendimientos, hackathons,
  // casos empresariales o proyectos técnicos.
  // Las imágenes pueden ir en public/projects/
  // ==========================================
  projects: [
    {
      title: 'Dashboard de indicadores operativos',
      type: 'Proyecto universitario',
      description:
        'Diseño de un tablero para visualizar KPIs de producción, detectar cuellos de botella y apoyar decisiones de mejora continua.',
      date: '2026',
      role: 'Analista de datos y procesos',
      technologies: ['Power BI', 'Excel', 'SQL'],
      skills: ['Análisis de datos', 'Visualización', 'Mejora continua'],
      image: '', // Ejemplo: '/projects/dashboard.jpg' (JPG, PNG o WebP).
      link: '', // Ejemplo: '/projects/informe-dashboard.pdf' o una URL.
    },
    {
      title: 'Propuesta de mejora logística',
      type: 'Caso empresarial',
      description:
        'Evaluación de tiempos, costos y rutas para reducir retrasos en un proceso de distribución local.',
      date: '2025',
      role: 'Coordinación y análisis',
      technologies: [],
      skills: ['Logística', 'Modelamiento de procesos', 'Trabajo en equipo'],
      image: '',
      link: '',
    },
  ],

  // ==========================================
  // EXPERIENCIA PROFESIONAL
  // Incluye prácticas, trabajo, freelance o consultoría.
  // Si no tienes experiencia aún, deja el array vacío: []
  // ==========================================
  experience: [
    {
      company: 'Empresa de ejemplo',
      position: 'Practicante de mejora de procesos',
      period: '2025 - 2026',
      description:
        'Apoyo en el levantamiento de información, análisis de indicadores y documentación de procesos internos.',
      achievements: [
        'Automatización de reportes semanales en hojas de cálculo.',
        'Identificación de oportunidades de mejora en tiempos de atención.',
      ],
      // Guarda public/projects/certificado-laboral.pdf y usa la ruta sin public.
      certificate: '', // Ejemplo: '/projects/certificado-laboral.pdf'. Muestra un enlace.
      // Para verlo dentro del portafolio, guarda una imagen del certificado.
      certificateImage: '', // Ejemplo: '/projects/certificado-laboral.jpg'. No usar PDF aqui.
    },
  ],

  // ==========================================
  // EDUCACIÓN
  // Agrega tu universidad, carrera, periodo y
  // cursos relevantes si deseas mostrarlos.
  // ==========================================
  education: [
    {
      institution: 'Universidad de Piura',
      degree: 'Ingeniería Industrial y de Sistemas',
      period: '2021 - 2026',
      description: 'Formación en ingeniería, gestión, analítica, operaciones y sistemas de información.',
      courses: ['Gestión de proyectos', 'Investigación de operaciones', 'Bases de datos', 'Simulación'],
    },
  ],

  // ==========================================
  // CERTIFICACIONES Y CURSOS
  // Puedes incluir certificaciones, cursos,
  // diplomados o especializaciones.
  // ==========================================
  certifications: [
    {
      name: 'Fundamentos de Power BI',
      institution: 'Institución de ejemplo',
      year: '2026',
      credential: '', // Ejemplo: '/projects/curso-power-bi.pdf' o URL de la credencial.
    },
  ],

  // ==========================================
  // VOLUNTARIADO Y LIDERAZGO
  // Incluye organizaciones estudiantiles,
  // comunidades, eventos o iniciativas sociales.
  // ==========================================
  volunteering: [
    {
      organization: 'Organización estudiantil',
      role: 'Coordinador de actividades',
      period: '2025',
      description:
        'Planificación de actividades académicas y coordinación con equipos de estudiantes para eventos universitarios.',
    },
  ],

  
  // ==========================================
  // LOGROS Y RECONOCIMIENTOS
  // Premios, becas, concursos, hackathons,
  // publicaciones o participaciones destacadas.
  // ==========================================
  achievements: [
    {
      title: 'Finalista en concurso de innovación',
      organization: 'Universidad de Piura',
      year: '2025',
      description: 'Presentación de una solución para mejorar la trazabilidad en procesos operativos.',
    },
  ],

  // ==========================================
  // IDIOMAS
  // Usa niveles como A1, A2, B1, B2, C1, C2
  // o descripciones como Básico, Intermedio, Avanzado.
  // ==========================================
  languages: [
    {
      name: 'Español',
      level: 'Nativo',
    },
    {
      name: 'Inglés',
      level: 'B2',
    },
  ],

  // ==========================================
  // CONTACTO
  // Puedes agregar otros enlaces profesionales.
  // Los campos vacíos no se mostrarán.
  // ==========================================
  contact: {
    message: 'Estoy abierto a oportunidades de prácticas, proyectos, investigación y colaboración profesional.',
    links: [
      // Ejemplos adicionales de correo, linkedin y github:
      // { label: 'ORCID', value: 'https://orcid.org/0000-0000-0000-0000', href: 'https://orcid.org/0000-0000-0000-0000' },
    ],
  },
}

export default portfolio
