require('dotenv').config()

const config= {
  mqttHost: process.env.MQTT_HOST,
  mqttUsername: process.env.MQTT_USERNAME,
  mqttPassword: process.env.MQTT_PASSWORD,
  mqttClientId: process.env.MQTT_CLIENT_ID
};
module.exports = config;
