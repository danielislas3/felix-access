import { Request, Response } from 'firebase-functions';
import { openAccessDoor, openGate } from '../controllers/deviceController';

export const handleOpenAccessDoor = async (req: Request, res: Response): Promise<void> => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed, use POST' });
  }

  try {
    await openAccessDoor();
    res.status(200).json({ message: 'Access door opened successfully' });
  } catch (error) {
    console.error('Error opening access door:', error);
    res.status(500).json({ error: 'Failed to open access door' });
  }
};

export const handleOpenGate = async (req: Request, res: Response): Promise<void> => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed, use POST' });
  }

  try {
    await openGate();
    res.status(200).json({ message: 'Gate opened successfully' });
  } catch (error) {
    console.error('Error opening gate:', error);
    res.status(500).json({ error: 'Failed to open gate' });
  }
};
