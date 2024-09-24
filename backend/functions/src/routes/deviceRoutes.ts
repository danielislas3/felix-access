import express, { Request, Response } from 'express';
import { DeviceController } from '../controllers/deviceController';

export function setDeviceRoutes(app: express.Application, deviceController: DeviceController): void {
  const router = express.Router();

  // Route to open the access door
  router.post('/access-door/open', async (req: Request, res: Response) => {
    try {
      await deviceController.openAccessDoor();
      res.status(200).json({ message: 'Access door opened successfully' });
    } catch (error) {
      console.error('Error opening access door:', error);
      res.status(500).json({ error: 'Failed to open access door' });
    }
  });

  // Route to open the gate
  router.post('/gate/open', async (req: Request, res: Response) => {
    try {
      await deviceController.openGate();
      res.status(200).json({ message: 'Gate opened successfully' });
    } catch (error) {
      console.error('Error opening gate:', error);
      res.status(500).json({ error: 'Failed to open gate' });
    }
  });

  app.use('/api/devices', router);
}