# IoT Project

This project consists of a backend and a frontend for controlling two Shelly relays via MQTT. The relays are used to control the access door and the gate of a private property. The backend provides APIs for device control and user registration, while the frontend is a Vue single-page application that can be used as a Progressive Web App (PWA).

## Backend

The backend is built using Firebase and consists of Firebase Cloud Functions and Firestore.

### Firebase Cloud Functions

The backend functions are implemented in TypeScript and are located in the `backend/functions/src` directory. The entry point of the functions is `index.ts`, which sets up the Firebase admin SDK and exports the functions.

The device control functionality is implemented in the `controllers/deviceController.ts` file. It exports a class `DeviceController` with methods to control the devices, such as `openAccessDoor` and `openGate`.

The routes for device control are defined in the `routes/deviceRoutes.ts` file. It exports a function `setDeviceRoutes` which sets up the routes using the `DeviceController`.

The MQTT communication with the Shelly relays is handled by the `services/mqttService.ts` file. It exports a class `MqttService` which handles the MQTT communication.

The `types/index.ts` file exports interfaces and types used in the backend, such as `Device`, `User`, and `MqttMessage`.

The dependencies and scripts for the Firebase Cloud Functions are listed in the `backend/functions/package.json` file.

### Firestore

The security rules for the Firestore database are defined in the `backend/firestore.rules` file. It specifies the access rules for the collections and documents.

The indexes configuration for the Firestore database is defined in the `backend/firestore.indexes.json` file. It specifies the fields to index for efficient querying.

The `backend/firebase.json` file is the configuration file for Firebase. It specifies the hosting and function deployment settings.

## Frontend

The frontend is a Vue single-page application located in the `frontend` directory.

The HTML template for the application is defined in the `frontend/public/index.html` file. It includes the necessary scripts and stylesheets.

The static assets such as images or fonts are located in the `frontend/src/assets` directory.

The main Vue component of the application is defined in the `frontend/src/App.vue` file. It defines the overall layout and includes the router view.

The `frontend/src/components/DeviceControl.vue` file exports a Vue component `DeviceControl` which displays the controls for the devices and communicates with the backend.

The main view of the application is defined in the `frontend/src/views/Home.vue` file. It includes the `DeviceControl` component.

The entry point of the Vue application is the `frontend/src/main.ts` file. It initializes the Vue app and mounts it to the DOM.

The Vue router configuration is defined in the `frontend/src/router/index.ts` file. It defines the routes for the application.

The dependencies and scripts for the Vue application are listed in the `frontend/package.json` file.

The TypeScript configuration for the Vue application is defined in the `frontend/tsconfig.json` file.

The Vue CLI configuration is defined in the `frontend/vue.config.js` file. It specifies the build and development settings.

## Other

The `.gitignore` file specifies the files and directories to be ignored by Git.

The `README.md` file contains the documentation for the project.

```

Please note that the above contents are just a template and you may need to modify them according to your specific project requirements.