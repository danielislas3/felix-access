// Device interface
export interface Device {
  id: string;
  name: string;
  type: string;
}

// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// MQTTMessage interface
export interface MqttMessage {
  topic: string;
  payload: string;
}