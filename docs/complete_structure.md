# Odyssey Project - Complete File Structure

```
odyssey/
│
├── odyssey-frontend/
│   ├── node_modules/
│   ├── public/
│   │   ├── images/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── RegisterForm.tsx
│   │   │   ├── home/
│   │   │   │   ├── FeaturedJournals.tsx
│   │   │   │   └── Hero.tsx
│   │   │   ├── journals/
│   │   │   │   ├── JournalCard.tsx
│   │   │   │   ├── JournalForm.tsx
│   │   │   │   └── JournalList.tsx
│   │   │   ├── layout/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   └── Sidebar.tsx
│   │   │   ├── map/
│   │   │   │   ├── MapComponent.tsx
│   │   │   │   └── MapMarker.tsx
│   │   │   ├── shared/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   └── Input.tsx
│   │   │   ├── timeline/
│   │   │   │   ├── TimelineItem.tsx
│   │   │   │   └── TimelineView.tsx
│   │   │   ├── ui/
│   │   │   │   ├── Alert.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   └── Spinner.tsx
│   │   │   └── sharing/
│   │   │       ├── ShareButton.tsx
│   │   │       └── ShareModal.tsx
│   │   ├── contexts/
│   │   │   ├── AuthContext.tsx
│   │   │   └── JournalContext.tsx
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── useJournal.ts
│   │   │   └── useMap.ts
│   │   ├── lib/
│   │   │   ├── api.ts
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── CreateJournal.tsx
│   │   │   ├── Explore.tsx
│   │   │   ├── Index.tsx
│   │   │   ├── JournalEdit.tsx
│   │   │   ├── JournalView.tsx
│   │   │   ├── Journals.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── MapView.tsx
│   │   │   ├── NotFound.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Settings.tsx
│   │   │   └── Timeline.tsx
│   │   ├── services/
│   │   │   ├── authService.ts
│   │   │   ├── journalService.ts
│   │   │   └── userService.ts
│   │   ├── types/
│   │   │   ├── journal.ts
│   │   │   └── user.ts
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
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
│   │   │   │           ├── config/
│   │   │   │           │   ├── SecurityConfig.java
│   │   │   │           │   └── WebConfig.java
│   │   │   │           ├── controller/
│   │   │   │           │   ├── AuthController.java
│   │   │   │           │   ├── JournalController.java
│   │   │   │           │   └── UserController.java
│   │   │   │           ├── dto/
│   │   │   │           │   ├── JournalDTO.java
│   │   │   │           │   └── UserDTO.java
│   │   │   │           ├── entity/
│   │   │   │           │   ├── Journal.java
│   │   │   │           │   ├── Location.java
│   │   │   │           │   └── User.java
│   │   │   │           ├── exception/
│   │   │   │           │   ├── GlobalExceptionHandler.java
│   │   │   │           │   └── ResourceNotFoundException.java
│   │   │   │           ├── repository/
│   │   │   │           │   ├── JournalRepository.java
│   │   │   │           │   └── UserRepository.java
│   │   │   │           ├── security/
│   │   │   │           │   ├── JwtTokenProvider.java
│   │   │   │           │   └── UserDetailsServiceImpl.java
│   │   │   │           ├── service/
│   │   │   │           │   ├── JournalService.java
│   │   │   │           │   ├── JournalServiceImpl.java
│   │   │   │           │   ├── UserService.java
│   │   │   │           │   └── UserServiceImpl.java
│   │   │   │           └── OdysseyApplication.java
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── application-dev.properties
│   │   └── test/
│   │       └── java/
│   │           └── com/
│   │               └── odyssey/
│   │                   ├── JournalServiceTest.java
│   │                   └── UserServiceTest.java
│   ├── target/
│   ├── uploads/
│   └── pom.xml
│
├── docs/
│   ├── navigation_flowchart.md
│   ├── odyssey_structure.md
│   ├── complete_structure.md
│   └── README.md
│
├── uploads/
├── .vscode/
└── README.md
```

## Directory Structure Explanation

### Frontend (odyssey-frontend/)
- **components/**: Reusable UI components organized by feature
  - **auth/**: Authentication-related components
  - **home/**: Homepage components
  - **journals/**: Journal-related components
  - **layout/**: Layout components (header, footer, sidebar)
  - **map/**: Map visualization components
  - **shared/**: Common UI components
  - **timeline/**: Timeline visualization components
  - **ui/**: UI utility components
  - **sharing/**: Social sharing components
- **contexts/**: React context providers
- **hooks/**: Custom React hooks
- **lib/**: Utility libraries
- **pages/**: Main application pages/routes
- **services/**: API service clients
- **types/**: TypeScript type definitions

### Backend (odyssey-backend/)
- **controller/**: REST API endpoints
- **service/**: Business logic implementation
- **repository/**: Data access layer
- **entity/**: Database entity models
- **dto/**: Data Transfer Objects
- **security/**: Authentication and authorization
- **config/**: Application configuration
- **exception/**: Custom exception handling

### Documentation (docs/)
- Project documentation
- Navigation flowcharts
- API documentation

### Root Directory
- Contains project-wide configuration
- Shared resources and uploads
- VS Code configuration 