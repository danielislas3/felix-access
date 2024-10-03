const mqtt = require('mqtt');
const { mqttHost, mqttUsername, mqttPassword, mqttClientId } = require('../config/mqttConfig');


class MqttService {
  constructor() {
    this.client = null;
    this.messageCallback = null;
  }

  // Configurar el callback para manejar los mensajes
  onMessage(callback) {
    this.messageCallback = callback;
  }

  // Conectar al broker MQTT con opciones
  connect() {
    // Configurar la URL del broker MQTT
    const urlStr = `mqtts://${mqttHost}`
    console.log('urlStr: ', urlStr);


    console.log('Conectando al broker MQTT:', urlStr.toString());

    // Configurar las opciones del cliente MQTT
    this.client = mqtt.connect(urlStr, {
      port: 8883,
      username: mqttUsername,
      password: mqttPassword,
      clientId: mqttClientId,
      rejectUnauthorized: false,
      tls: true,
      certValidation: false,
    });

    // Manejar la conexión exitosa
    this.client.on('connect', () => {
      console.log('Conectado al broker MQTT');
    });

    // Manejar errores
    this.client.on('error', (err) => {
      console.error('Error en la conexión MQTT:', err);
      this.client.end();
    });

    // Manejar la recepción de mensajes
    this.client.on('message', (topic, message, packet) => {
      if (this.messageCallback) {
        this.messageCallback(topic, message, packet);
      }
    });
    this.client.on('close', () => {
      console.log('Desconectado del broker MQTT');
    });
  }

  // Publicar un mensaje en un topic
  publish(topic, message, qos = 0) {
    if (this.client) {
      this.client.publish(topic, message, { qos }, (err) => {
        if (err) {
          console.error(`Error al publicar mensaje en el topic ${topic}:`, err);
        } else {
          console.log(`Mensaje publicado en el topic ${topic}`);
        }
      });
    }
  }

  // Suscribir a un topic
  subscribe(topic, qos = 0) {
    if (this.client) {
      this.client.subscribe(topic, { qos }, (err) => {
        if (err) {
          console.error(`Error al suscribirse al topic ${topic}: ${err.message}`);
        } else {
          console.log(`Suscrito al topic ${topic}`);
        }
      });
    }
  }

  // Desconectar del broker
  disconnect() {
    if (this.client) {
      this.client.end();
      console.log('Desconectado del broker MQTT');
    }
  }

  getStatus() {
    return{
      status: this.client ? 'Conectado' : 'Desconectado',
      client: this.client.options
    }
  }
}

module.exports = new MqttService();
