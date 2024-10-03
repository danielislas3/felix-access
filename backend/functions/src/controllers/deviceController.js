const mqttService = require('../services/mqttService');
const firebaseService = require('../services/firebaseService');

exports.openPuerta = async (userId) => {
  // const hasPermission = await firebaseService.checkUserPermissions(userId, 'puerta');
  // if (!hasPermission) {
  //   throw new Error('No tienes permiso para abrir la puerta');
  // }
  mqttService.publish('felix/puerta', 'open');
  await firebaseService.updateDeviceState('puerta', 'open');
};

exports.closePuerta = async (userId) => {
  const hasPermission = await firebaseService.checkUserPermissions(userId, 'puerta');
  if (!hasPermission) {
    throw new Error('No tienes permiso para cerrar la puerta');
  }
  mqttService.publish('felix/puerta', 'close');
  await firebaseService.updateDeviceState('puerta', 'closed');
};

exports.openPorton = async (userId) => {
  const hasPermission = await firebaseService.checkUserPermissions(userId, 'porton');
  if (!hasPermission) {
    throw new Error('No tienes permiso para abrir el portón');
  }
  mqttService.publish('felix/porton', 'open');
  await firebaseService.updateDeviceState('porton', 'open');
};

exports.closePorton = async (userId) => {
  const hasPermission = await firebaseService.checkUserPermissions(userId, 'porton');
  if (!hasPermission) {
    throw new Error('No tienes permiso para cerrar el portón');
  }
  mqttService.publish('felix/porton', 'close');
  await firebaseService.updateDeviceState('porton', 'closed');
};

exports.getPuertaState = async () => {
  return await firebaseService.getDeviceState('puerta');
};

exports.getPortonState = async () => {
  return await firebaseService.getDeviceState('porton');
};
