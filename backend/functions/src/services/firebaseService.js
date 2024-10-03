const admin = require('../config/firebaseConfig');
const db = admin.database();

class FirebaseService {
  updateDeviceState(device, state) {
    return db.ref(`devices/${device}`).set({
      state,
      timestamp: admin.database.ServerValue.TIMESTAMP,
    });
  }

  async getDeviceState(device) {
    const snapshot = await db.ref(`devices/${device}`).once('value');
    return snapshot.val();
  }

  async checkUserPermissions(userId, device) {
    const snapshot = await db.ref(`users/${userId}/devices`).once('value');
    const devices = snapshot.val() || [];
    return devices.includes(device);
  }

  async getUserRole(userId) {
    const snapshot = await db.ref(`users/${userId}/role`).once('value');
    return snapshot.val() || 'user';  // Por defecto 'user' si no hay rol asignado
  }
}

module.exports = new FirebaseService();
