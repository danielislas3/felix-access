import mqtt from 'mqtt';

class MqttService {
  private client: mqtt.MqttClient;

  constructor() {
    this.client = mqtt.connect('mqtt://mqtt.example.com'); // Replace with your MQTT broker URL
    this.client.on('connect', () => {
      console.log('Connected to MQTT broker');
      this.subscribeToTopics();
    });
    this.client.on('message', (topic, message) => {
      this.handleMessage(topic, message.toString());
    });
  }

  private subscribeToTopics() {
    this.client.subscribe('access-door');
    this.client.subscribe('gate');
  }

  private handleMessage(topic: string, message: string) {
    switch (topic) {
      case 'access-door':
        this.handleAccessDoorMessage(message);
        break;
      case 'gate':
        this.handleGateMessage(message);
        break;
      default:
        console.log(`Received message on unknown topic: ${topic}`);
    }
  }

  private handleAccessDoorMessage(message: string) {
    // Handle the message for the access door relay
    console.log(`Received message for access door: ${message}`);
    // Add your logic here to control the access door relay
  }

  private handleGateMessage(message: string) {
    // Handle the message for the gate relay
    console.log(`Received message for gate: ${message}`);
    // Add your logic here to control the gate relay
  }
}

export default MqttService;