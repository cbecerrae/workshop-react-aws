# Meetup #4 - Tu primer despliegue en AWS Cloud

![Banner del evento](https://secure.meetupstatic.com/photos/event/4/d/b/f/highres_536179903.webp)

---

## 👋 Bienvenida

¡Bienvenido/a al workshop más práctico del AWS User Group Piura!

En esta sesión vas a crear tu propia aplicación web con React y desplegarla en AWS Cloud usando dos enfoques diferentes. La idea es que no solo escuches conceptos, sino que puedas ponerlos en práctica directamente desde tu laptop.

---

## 📚 Estructura del Workshop

El workshop se divide en **dos partes**:

### 1. 💻 Workshop #1: React — [`react-workshop.md`](react-workshop.md)

Personaliza tu portafolio profesional con React + Vite, visualízalo localmente y genera la versión final para publicar.

🎤 Instructora: [Agnes Buscal Chang](https://www.linkedin.com/in/agnes-buscal-chang/)

### 2. ☁️ Workshop #2: AWS Cloud — [`aws-workshop.md`](aws-workshop.md)

Despliega tu aplicación en AWS usando dos enfoques:
- **Amazon S3** como sitio web estático (SPA)
- **Amazon EC2** con un web server levantado manualmente

🎤 Instructor: [Cristhian Becerra](https://www.linkedin.com/in/cristhian-becerra/)

> ℹ️ **Prerequisitos:** este workshop no incluye una guía de instalación aparte porque ya nos aseguramos de que todas las PCs tengan **Node.js** y **npm** instalados. Solo necesitas eso, un editor de código (como VS Code) y conocimientos básicos para editar un archivo JavaScript.

---

## 📁 Estructura del proyecto

```text
workshop-react-aws/
├── public/
│   ├── profile.jpg              # 👈 Tu foto de perfil
│   └── projects/                # Imágenes y documentos de tus proyectos
├── src/
│   ├── data/
│   │   └── portfolio.js         # 👈 Tu información editable
│   ├── components/              # Componentes de la plantilla (no editar)
│   ├── styles/                  # Estilos globales (no editar)
│   ├── utils/                   # Utilidades (no editar)
│   ├── App.jsx                  # Estructura de la app (no editar)
│   └── main.jsx                 # Punto de entrada (no editar)
├── index.html
├── package.json
├── vite.config.js
├── react-workshop.md            # Workshop React
├── aws-workshop.md              # Workshop AWS
└── README.md                    # Este archivo
```

---

## 🎯 ¿Qué lograrás hoy?

Al terminar el workshop tendrás:
- ✅ Tu portafolio profesional personalizado con React + Vite
- ✅ Tu app desplegada en un bucket S3 como sitio web estático
- ✅ Tu app corriendo en una instancia EC2 accesible desde internet

---

## 🔗 Links útiles

- 🌐 [Evento en Meetup](https://www.meetup.com/aws-user-group-piura/events/316592549/)
- 💬 Comunidad: **#AWSUserGroupPiura**

---

## 📄 Licencia

Este proyecto se distribuye bajo la [Licencia MIT](LICENSE).
