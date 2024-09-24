import * as functions from 'firebase-functions';
import { handleOpenAccessDoor, handleOpenGate } from './routes/deviceRoutes';

export const accessDoorOpen = functions.https.onRequest(handleOpenAccessDoor);
export const gateOpen = functions.https.onRequest(handleOpenGate);
