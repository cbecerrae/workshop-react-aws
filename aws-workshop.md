# ☁️ Workshop #2 — Tu primer despliegue en AWS Cloud

🎤 Instructor: [Cristhian Becerra](https://www.linkedin.com/in/cristhian-becerra/)

En este workshop vas a desplegar tu portafolio React en AWS Cloud usando dos enfoques:

1. **Amazon S3** — Como sitio web estático (SPA)
2. **Amazon EC2** — Con un web server en una instancia virtual

---

## 📋 Requisitos previos

- Haber completado el [Workshop #1 (React)](react-workshop.md)
- Tener la carpeta `dist/` generada con `npm run build`
- Credenciales de acceso a la consola AWS (se proporcionarán en el evento)

---

## 🏗️ Recursos ya creados (contexto)

> **Nota:** Los siguientes recursos ya fueron pre-configurados para el workshop. No necesitas crearlos, pero es importante que sepas que existen:
>
> - **IAM Policy**: Permite a cada usuario crear un bucket S3 con su propio nombre de usuario y una instancia EC2 con un tag de su nombre
> - **IAM Instance Profile**: Permite acceso vía AWS Systems Manager (SSM) y permisos S3 limitados al bucket del usuario
> - **VPC**: Con 1 subred pública y un Internet Gateway (IGW)
> - **Security Group**: Permite tráfico de entrada en el puerto 80 (HTTP) y salida en el puerto 443 (HTTPS)

---

## 🪣 Parte 1: Despliegue en Amazon S3

Amazon S3 (Simple Storage Service) te permite alojar sitios web estáticos directamente desde un bucket.

### Paso 1: Acceder a la consola de AWS

1. Abre la URL de inicio de sesión del workshop:
   👉 [https://564102503701.signin.aws.amazon.com/console?region=us-east-1](https://564102503701.signin.aws.amazon.com/console?region=us-east-1)
2. Ingresa las credenciales proporcionadas por el instructor:
   - **IAM user name**: tu nombre de usuario asignado
   - **Password**: `Workshop2!`
4. Verifica que estás en la región **EE.UU. Este (Norte de Virginia) — us-east-1** (esquina superior derecha)

### Paso 2: Crear un bucket S3

1. Ve al servicio **S3** (búscalo en la barra de búsqueda)
2. Clic en **Crear bucket**
3. Configura:
   - **Nombre del bucket**: `tu-nombre-de-usuario-workshop-react-aws` (ejemplo: `abuscal-workshop-react-aws`)
   - **Propiedad de objetos**: ACL deshabilitadas
   - ❌ **Desmarca** "Bloquear todo el acceso público" (necesitamos acceso público)
   - ✅ Marca la casilla: *"Reconozco que la configuración actual puede provocar que este bucket y los objetos que contiene se vuelvan públicos."*
4. Clic en **Crear bucket**

### Paso 3: Habilitar alojamiento de sitio web estático

1. Entra a tu bucket recién creado
2. Ve a la pestaña **Propiedades**
3. Baja hasta **Alojamiento de sitios webs estáticos** y clic en **Editar**
4. Configura:
   - **Alojamiento de sitios webs estáticos**: Habilitar
   - **Tipo de alojamiento**: Alojar un sitio web estático
   - **Documento de índice**: `index.html`
5. Clic en **Guardar cambios**
6. Anota el **Punto de enlace de sitio web del bucket** que aparece (lo usarás después)

### Paso 4: Configurar política del bucket (acceso público de lectura)

1. Ve a la pestaña **Permisos**
2. En **Política del bucket**, clic en **Editar**
3. Pega la siguiente política (reemplaza `ARN-DEL-BUCKET` con el ARN de tu bucket que aparece justo arriba del editor de política):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "ARN-DEL-BUCKET/*"
    }
  ]
}
```

4. Clic en **Guardar cambios**

### Paso 5: Subir los archivos

1. Ve a la pestaña **Objetos**
2. Clic en **Cargar**
3. Primero sube los **archivos sueltos**: clic en **Agregar archivos** y selecciona todos los archivos que están directamente dentro de `dist/` (como `index.html`, `vite.svg`, etc.)
4. Luego sube las **carpetas**: clic en **Agregar carpeta** y sube cada carpeta que esté dentro de `dist/` (como `assets/`, etc.)
5. Asegúrate de no omitir nada — sube **todo** el contenido de `dist/`
6. Clic en **Cargar**

> ⚠️ **Importante:** Sube el *contenido* de `dist/`, no la carpeta `dist` en sí. El `index.html` debe quedar en la raíz del bucket.

### Paso 6: Acceder a tu sitio web

Abre el Punto de enlace de sitio web del bucket que anotaste en el Paso 3. Tiene el formato:

```
http://TU-USUARIO-workshop-react-aws.s3-website-us-east-1.amazonaws.com
```

🎉 **¡Tu portafolio está en internet!**

---

## 🖥️ Parte 2: Despliegue en Amazon EC2

Ahora vas a levantar un servidor virtual, copiar tu app desde S3, y servirla con un web server.

### Paso 1: Lanzar una instancia EC2

1. Ve al servicio **EC2**
2. En el menú izquierdo, clic en **Instancias**
3. Clic en **Lanzar instancias**
4. Configura:
   - **Nombre**: `tu-nombre-de-usuario`
   - **AMI**: Amazon Linux
   - **Tipo de instancia**: `t3.micro`
   - **Par de claves**: Continuar sin un par de claves
   - **Configuración de red**: Clic en **Editar**
     - **VPC**: Selecciona `workshop-vpc`
     - **Subred**: Selecciona `workshop-public-subnet`
     - **Asignar IP pública automáticamente**: Habilitar
     - **Grupos de seguridad**: Selecciona **Seleccionar un grupo de seguridad existente**, luego elige `workshop-ec2-sg`
   - **Detalles avanzados**:
     - **Perfil de instancia de IAM**: Selecciona `workshop-ec2-instance-profile`
4. Clic en **Lanzar instancia**

### Paso 2: Conectarse a la instancia via Session Manager

1. Espera 1-2 minutos a que la instancia esté en estado **En ejecución**
2. Selecciona tu instancia y clic en **Conectar**
3. Ve a la pestaña **Administrador de sesiones de SSM**
4. Clic en **Conectar**

> 💡 Session Manager te permite conectarte a la instancia sin necesidad de SSH ni key pairs. Funciona gracias al IAM Instance Profile pre-configurado.

### Paso 3: Copiar archivos desde S3

Una vez dentro de la terminal de Session Manager, ejecuta:

```bash
# Cambiar a usuario ec2-user
sudo su - ec2-user

# Crear directorio para la app
mkdir -p ~/app

# Copiar archivos desde tu bucket S3
aws s3 cp s3://TU-USUARIO-workshop-react-aws/ ~/app/ --recursive
```

Verifica que los archivos se copiaron:

```bash
ls ~/app/
# Deberías ver: index.html, assets/, etc.
```

### Paso 4: Levantar un web server

Usaremos el módulo HTTP integrado en Python para servir los archivos en el puerto 80:

```bash
cd ~/app
sudo python3 -m http.server 80
```

> 💡 **¿Por qué Python?** Viene preinstalado en Amazon Linux, no requiere instalar dependencias adicionales y con un solo comando levanta un servidor HTTP funcional. Perfecto para un workshop.

### Paso 5: Acceder a tu aplicación

1. Vuelve a la consola de EC2
2. Selecciona tu instancia
3. Copia la **Dirección IPv4 pública**
4. Abre en tu navegador:

```
http://TU-IP-PUBLICA
```

🎉 **¡Tu portafolio ahora está corriendo en un servidor EC2!**

---

## 🆚 Comparación: S3 vs EC2

| Aspecto | S3 Static Website | EC2 Web Server |
|---|---|---|
| **Tipo** | Hosting estático (serverless) | Servidor virtual (IaaS) |
| **Costo** | Muy bajo (pay per request) | Por hora de instancia |
| **Escalabilidad** | Automática | Manual (o con Auto Scaling) |
| **Mantenimiento** | Ninguno | Actualizaciones de OS, parches |
| **Ideal para** | SPAs, sitios estáticos | Apps dinámicas, APIs, backends |
| **Complejidad** | Baja | Media |

---

## 🧹 Limpieza (al finalizar el workshop)

> **Importante:** Al terminar el workshop, por favor elimina los recursos que creaste. Esto nos ayuda a mantener la cuenta limpia y evitar costos innecesarios.

### Terminar la instancia EC2

1. Ve al servicio **EC2** → **Instancias**
2. Selecciona tu instancia (la que tiene tu nombre de usuario)
3. Clic en **Estado de la instancia** → **Terminar (eliminar) instancia**
4. Confirma con **Terminar (eliminar)**

### Vaciar y eliminar el bucket S3

1. Ve al servicio **S3**
2. Selecciona tu bucket (`tu-usuario-workshop-react-aws`)
3. Clic en **Vaciar** (primero hay que vaciarlo antes de eliminarlo)
4. Escribe `eliminar de forma permanente` en el campo de confirmación y clic en **Vaciar**
5. Una vez vacío, vuelve a la lista de buckets
6. Selecciona tu bucket nuevamente y clic en **Eliminar**
7. Escribe el nombre del bucket para confirmar y clic en **Eliminar bucket**

---

## 🏆 ¡Felicidades!

Has completado tu primer despliegue en AWS Cloud usando dos servicios fundamentales. Ahora conoces:

- Cómo funciona S3 como hosting de sitios estáticos
- Cómo lanzar y conectarte a una instancia EC2
- Cómo transferir archivos entre servicios AWS
- La diferencia entre hosting estático y un servidor virtual

---

## 💡 ¿Qué sigue?

- Explora **CloudFront** para agregar HTTPS y CDN a tu sitio en S3
- Aprende sobre **Route 53** para usar un dominio personalizado
- Investiga **Elastic Beanstalk** o **ECS** para despliegues más robustos
- Únete al [AWS User Group Piura](https://www.meetup.com/aws-user-group-piura/) para más workshops

---

**← Volver al** [`README.md`](README.md)
