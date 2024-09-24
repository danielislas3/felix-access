import { Request, Response } from 'express';
import { MqttService } from '../services/mqttService';

class DeviceController {
  private mqttService: MqttService;

  constructor() {
    this.mqttService = new MqttService();
  }

  public openAccessDoor(req: Request, res: Response): void {
    this.mqttService.publish('access-door', 'open');
    res.status(200).json({ message: 'Access door opened' });
  }

  public openGate(req: Request, res: Response): void {
    this.mqttService.publish('gate', 'open');
    res.status(200).json({ message: 'Gate opened' });
  }
}

export default DeviceController;