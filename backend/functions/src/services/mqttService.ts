import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://broker-url');

export const sendOpenAccessDoorCommand = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    client.publish('access-door/open', 'open', (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

export const sendOpenGateCommand = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    client.publish('gate/open', 'open', (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};
