
# Task Management App

Aplicación de gestión de tareas construida con React. Permite a los usuarios registrar, iniciar sesión, crear, editar, eliminar y listar tareas de manera eficiente.

## Características

- Registro e inicio de sesión de usuarios.
- Gestión de tareas (crear, actualizar, eliminar, listar).
- Filtros y ordenación de tareas.
- Notificaciones en tiempo real para operaciones de tareas.
- Utiliza `tailwindcss` para el diseño y `flowbite` para componentes UI.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

Sigue los pasos a continuación para instalar y ejecutar la aplicación en tu máquina local.

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/task-management-app.git
cd task-management-app
```

### 2. Instalar dependencias

Puedes instalar las dependencias utilizando el script de instalación rápida, que se adapta tanto a **Linux** como **Windows**.

### 3. Ejecutar el script de instalación

Dependiendo de tu sistema operativo, utiliza uno de los siguientes scripts para instalar las dependencias:

#### En Linux

1. Abre una terminal y asegúrate de que el archivo de script tenga permisos de ejecución:

   ```bash
   chmod +x install_dependencies.sh
   ```

2. Ejecuta el script para instalar las dependencias:

   ```bash
   ./install_dependencies.sh
   ```

#### En Windows

1. Abre PowerShell o CMD como administrador.

2. Ejecuta el siguiente comando para instalar las dependencias:

   ```powershell
   .\install_dependencies.ps1
   ```

### 4. Iniciar el servidor de desarrollo

Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo ejecutando el siguiente comando:

```bash
npm start
```

Esto iniciará la aplicación en `http://localhost:3000`.

### 5. Ejecutar en producción

Para crear una versión optimizada para producción, ejecuta el siguiente comando:

```bash
npm run build
```

Esto generará una carpeta `build` con los archivos optimizados para producción.

## Desarrollado con

- **React**
- **Tailwind CSS**
- **Flowbite**
- **Axios**
- **JWT**
- **react-router-dom**

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## Scripts de Instalación

### **Linux: `install_dependencies.sh`**

Crea un archivo llamado `install_dependencies.sh` en la raíz del proyecto con el siguiente contenido:

```bash
#!/bin/bash

# Verifica si npm está instalado
if ! command -v npm &> /dev/null
then
    echo "npm no está instalado. Por favor, instala Node.js y npm primero."
    exit
fi

# Instalación de dependencias
echo "Instalando dependencias..."
npm install axios react-router-dom jwt-decode flowbite-react tailwindcss @heroicons/react react-hot-toast

# Configuración de TailwindCSS
npx tailwindcss init

echo "Dependencias instaladas con éxito."
```

**Instrucciones para Linux:**

1. Asegúrate de que el archivo `install_dependencies.sh` tenga permisos de ejecución. Ejecuta el siguiente comando:

   ```bash
   chmod +x install_dependencies.sh
   ```

2. Luego, ejecuta el script con:

   ```bash
   ./install_dependencies.sh
   ```

---

### **Windows: `install_dependencies.ps1`**

Crea un archivo llamado `install_dependencies.ps1` en la raíz del proyecto con el siguiente contenido:

```powershell
# Verifica si npm está instalado
$npm = Get-Command npm -ErrorAction SilentlyContinue
if (-not $npm) {
    Write-Host "npm no está instalado. Por favor, instala Node.js y npm primero."
    exit
}

# Instalación de dependencias
Write-Host "Instalando dependencias..."
npm install axios react-router-dom jwt-decode flowbite-react tailwindcss @heroicons/react react-hot-toast

# Configuración de TailwindCSS
npx tailwindcss init

Write-Host "Dependencias instaladas con éxito."
```

**Instrucciones para Windows:**

1. Ejecuta PowerShell como administrador (haz clic derecho y selecciona "Ejecutar como administrador").

2. Navega al directorio del proyecto con el siguiente comando:

   ```powershell
   cd C:\ruta\a\tu\proyecto
   ```

3. Luego, ejecuta el script con:

   ```powershell
   .\install_dependencies.ps1
   ```

