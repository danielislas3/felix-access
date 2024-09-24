import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { setDeviceRoutes } from './routes/deviceRoutes';

admin.initializeApp();

// Initialize the device routes
const deviceRoutes = setDeviceRoutes();

// Export the device control functions
export const openAccessDoor = functions.https.onRequest(deviceRoutes.openAccessDoor);
export const openGate = functions.https.onRequest(deviceRoutes.openGate);

// Export the user registration function
export const registerUser = functions.auth.user().onCreate(async (user) => {
  // Perform user registration logic here
});