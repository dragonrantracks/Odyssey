# Odyssey Travel Journal

A full-stack web application for creating and managing travel journals, built with modern technologies and best practices.

## Project Structure

The project is divided into two main parts:
- `odyssey-frontend/`: React-based frontend application
- `odyssey-backend/`: Spring Boot backend application

## Frontend (odyssey-frontend)

### Technologies
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
- React Router DOM
- React Query
- Leaflet (for maps)
- Various UI components and utilities

### Getting Started

1. Navigate to the frontend directory:
```bash
cd odyssey-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Backend (odyssey-backend)

### Technologies
- Spring Boot 3.2.0
- Java 17
- Spring Security
- Spring Data JPA
- MySQL
- JWT Authentication

### Getting Started

1. Navigate to the backend directory:
```bash
cd odyssey-backend
```

2. Build the project:
```bash
./mvnw clean install
```

3. Run the application:
```bash
./mvnw spring-boot:run
```

## Features

- User authentication and authorization
- Travel journal creation and management
- Interactive maps integration
- Modern and responsive UI
- Secure API endpoints
- Data persistence with MySQL

## Development

### Prerequisites
- Node.js (Latest LTS version)
- Java 17 or higher
- MySQL
- Maven

### Environment Setup
1. Clone the repository
2. Set up the frontend and backend as described above
3. Configure your database connection in the backend
4. Set up any required environment variables

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Spring Boot team for the excellent backend framework
- React team for the frontend library
- All other open-source contributors whose work made this project possible
