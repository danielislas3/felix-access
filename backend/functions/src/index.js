const { onRequest } = require('firebase-functions/v2/https');
const { openPuerta, closePuerta, openPorton, closePorton, getPuertaState, getPortonState } = require('./controllers/deviceController');
const mqttService = require('./services/mqttService');

mqttService.connect();

exports.mqttServiceStatus = onRequest(async (req, res) => {
  const staus = mqttService.getStatus();
  res.status(200).send(staus);
});

exports.openPuerta = onRequest(async (req, res) => {
  // const userId = req.user.uid;
  try {
    await openPuerta(userId);
    res.status(200).send('Puerta abierta');
  } catch (error) {
    res.status(403).send(error.message);
  }
});

exports.closePuerta = onRequest(async (req, res) => {
  const userId = req.user.uid;
  try {
    await closePuerta(userId);
    res.status(200).send('Puerta cerrada');
  } catch (error) {
    res.status(403).send(error.message);
  }
});

// Función para abrir el portón
exports.openPorton = onRequest(async (req, res) => {
  const userId = req.user.uid;
  try {
    await openPorton(userId);
    res.status(200).send('Portón abierto');
  } catch (error) {
    res.status(403).send(error.message);
  }
});

// Función para cerrar el portón
exports.closePorton = onRequest(async (req, res) => {
  const userId = req.user.uid;
  try {
    await closePorton(userId);
    res.status(200).send('Portón cerrado');
  } catch (error) {
    res.status(403).send(error.message);
  }
});

// Obtener el estado de la puerta
exports.getPuertaState = onRequest(async (req, res) => {
  try {
    const state = await getPuertaState();
    res.status(200).json({ state });
  } catch (error) {
    res.status(500).send('Error al obtener el estado de la puerta');
  }
});

// Obtener el estado del portón
exports.getPortonState = onRequest(async (req, res) => {
  try {
    const state = await getPortonState();
    res.status(200).json({ state });
  } catch (error) {
    res.status(500).send('Error al obtener el estado del portón');
  }
});
