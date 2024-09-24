import { sendOpenAccessDoorCommand, sendOpenGateCommand } from '../services/mqttService';

export const openAccessDoor = async (): Promise<void> => {
  console.log('Access door is being opened');
  await sendOpenAccessDoorCommand();
};

export const openGate = async (): Promise<void> => {
  console.log('Gate is being opened');
  await sendOpenGateCommand();
};
