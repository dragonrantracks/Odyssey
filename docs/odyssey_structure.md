# Odyssey Project Structure

```
odyssey/
│
├── odyssey-frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .gitignore
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
│
├── odyssey-backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── odyssey/
│   │   │   │           ├── controllers/
│   │   │   │           ├── models/
│   │   │   │           ├── repositories/
│   │   │   │           ├── services/
│   │   │   │           └── utils/
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── target/
│   ├── uploads/
│   └── pom.xml
│
├── docs/
│   ├── navigation_flowchart.md
│   ├── odyssey_structure.md
│   └── README.md
│
├── uploads/
├── .vscode/
└── README.md
```

## Directory Structure Explanation

### Frontend (odyssey-frontend/)
- Built with React + TypeScript + Vite
- Uses Tailwind CSS for styling
- Key files:
  - `package.json`: Dependencies and scripts
  - `tailwind.config.ts`: Tailwind CSS configuration
  - `vite.config.ts`: Vite build configuration
  - `tsconfig.json`: TypeScript configuration

### Backend (odyssey-backend/)
- Built with Spring Boot (Java)
- Maven project structure
- Key directories:
  - `src/main/java`: Java source code
  - `src/main/resources`: Configuration files
  - `src/test`: Test files
  - `uploads/`: File upload directory

### Documentation (docs/)
- Project documentation
- Navigation flowcharts
- API documentation

### Root Directory
- Contains project-wide configuration
- Shared resources and uploads
- VS Code configuration 