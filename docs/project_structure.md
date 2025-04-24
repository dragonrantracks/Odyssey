# Travel Journal App Project Structure

```
travel-journal/
│
├── api/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── journal.controller.js
│   │   ├── profile.controller.js
│   │   └── upload.controller.js
│   ├── models/
│   │   ├── journal.model.js
│   │   ├── user.model.js
│   │   └── location.model.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── journal.route.js
│   │   ├── profile.route.js
│   │   └── upload.route.js
│   ├── utils/
│   │   ├── error.js
│   │   ├── auth.js
│   │   └── cloudinary.js
│   ├── index.js
│   └── vercel.json
│
├── client/
│   ├── node_modules/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Loading.jsx
│   │   │   │   └── ErrorBoundary.jsx
│   │   │   ├── journal/
│   │   │   │   ├── JournalCard.jsx
│   │   │   │   ├── JournalForm.jsx
│   │   │   │   ├── PhotoUpload.jsx
│   │   │   │   └── LocationPicker.jsx
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   └── RegisterForm.jsx
│   │   │   └── profile/
│   │   │       ├── ProfileForm.jsx
│   │   │       └── NotificationSettings.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── CreateJournal.jsx
│   │   │   ├── EditJournal.jsx
│   │   │   ├── ViewJournal.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── NotFound.jsx
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.js
│   │   │   │   ├── journalSlice.js
│   │   │   │   └── profileSlice.js
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   └── components.css
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   ├── validation.js
│   │   │   └── helpers.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   │   ├── images/
│   │   │   └── logo.png
│   │   └── index.html
│   ├── .env
│   ├── .eslintrc.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── docs/
│   ├── navigation_flowchart.md
│   ├── api_documentation.md
│   └── README.md
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Directory Structure Explanation

### API Directory
- **controllers/**: Contains business logic for different features
- **models/**: Database schemas and models
- **routes/**: API endpoint definitions
- **utils/**: Helper functions and middleware

### Client Directory
- **components/**: Reusable UI components organized by feature
- **pages/**: Main application pages/routes
- **redux/**: State management configuration and slices
- **styles/**: Global styles and CSS modules
- **utils/**: Client-side utility functions

### Docs Directory
- Contains project documentation, flowcharts, and API documentation

### Root Directory
- Configuration files and project setup 