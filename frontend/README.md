# Frontend

This directory contains the frontend code for the IoT project.

## Project Structure

- `public/index.html`: The HTML template for the Vue single-page application.
- `src/assets/`: Directory for static assets such as images or fonts.
- `src/components/DeviceControl.vue`: Vue component for displaying and controlling the devices.
- `src/views/Home.vue`: Vue component for the main view of the application.
- `src/App.vue`: Root Vue component of the application.
- `src/main.ts`: Entry point of the Vue application.
- `src/router/index.ts`: Vue router configuration.
- `package.json`: Dependencies and scripts for the Vue application.
- `tsconfig.json`: TypeScript configuration for the Vue application.
- `vue.config.js`: Configuration file for Vue CLI.
- `README.md`: Documentation for the Vue application.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run serve
   ```

3. Open the application in your browser:
   ```
   http://localhost:8080
   ```

## Build

To build the application for production, run:
```bash
npm run build
```

The built files will be located in the `dist/` directory.

## Deployment

To deploy the application, follow the deployment instructions in the project's backend documentation.

```

This file provides an overview of the frontend directory structure, instructions for getting started, building the application, and deploying it.