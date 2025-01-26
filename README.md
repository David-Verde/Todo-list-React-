
# Task Management App

Task management application built with React. It allows users to register, log in, create, edit, delete, and list tasks efficiently.

## Features

- User registration and login.
- Task management (create, update, delete, list).
- Filters and sorting of tasks.
- Real-time notifications for task operations.
- Uses `tailwindcss` for design and `flowbite` for UI components.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node.js package manager)

## Installation

Follow the steps below to install and run the application on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
```

### 2. Install dependencies

You can install the dependencies using the quick installation script, which works for both **Linux** and **Windows**.

### 3. Run the installation script

Depending on your operating system, use one of the following scripts to install the dependencies:

#### On Linux

1. Open a terminal and make sure the script file has execution permissions:

   ```bash
   chmod +x install_dependencies.sh
   ```

2. Run the script to install the dependencies:

   ```bash
   ./install_dependencies.sh
   ```

#### On Windows

1. Open PowerShell or CMD as administrator.

2. Run the following command to install the dependencies:

   ```powershell
   .\install_dependencies.ps1
   ```

### 4. Start the development server

Once the dependencies are installed, you can start the development server by running the following command:

```bash
npm start
```

This will start the application at `http://localhost:3000`.

### 5. Run in production

To create an optimized production build, run the following command:

```bash
npm run build
```

This will generate a `build` folder with optimized files for production.

## Built with

- **React**
- **Tailwind CSS**
- **Flowbite**
- **Axios**
- **JWT**
- **react-router-dom**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Installation Scripts

### **Linux: `install_dependencies.sh`**

Create a file named `install_dependencies.sh` in the root of the project with the following content:

```bash
#!/bin/bash

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "npm is not installed. Please install Node.js and npm first."
    exit
fi

# Install dependencies
echo "Installing dependencies..."
npm install axios react-router-dom jwt-decode flowbite-react tailwindcss @heroicons/react react-hot-toast

# Configure TailwindCSS
npx tailwindcss init

echo "Dependencies installed successfully."
```

**Instructions for Linux:**

1. Make sure the `install_dependencies.sh` file has execution permissions. Run the following command:

   ```bash
   chmod +x install_dependencies.sh
   ```

2. Then, run the script with:

   ```bash
   ./install_dependencies.sh
   ```

---

### **Windows: `install_dependencies.ps1`**

Create a file named `install_dependencies.ps1` in the root of the project with the following content:

```powershell
# Check if npm is installed
$npm = Get-Command npm -ErrorAction SilentlyContinue
if (-not $npm) {
    Write-Host "npm is not installed. Please install Node.js and npm first."
    exit
}

# Install dependencies
Write-Host "Installing dependencies..."
npm install axios react-router-dom jwt-decode flowbite-react tailwindcss @heroicons/react react-hot-toast

# Configure TailwindCSS
npx tailwindcss init

Write-Host "Dependencies installed successfully."
```

**Instructions for Windows:**

1. Run PowerShell as administrator (right-click and select "Run as administrator").

2. Navigate to the project directory with the following command:

   ```powershell
   cd C:\path	o\your\project
   ```

3. Then, run the script with:

   ```powershell
   .\install_dependencies.ps1
   ```
