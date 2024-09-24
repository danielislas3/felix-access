<template>
  <div class="device-control">
    <h1>Device Control</h1>
    <div class="device">
      <h2>Access Door</h2>
      <button @click="openAccessDoor">Open</button>
    </div>
    <div class="device">
      <h2>Gate</h2>
      <button @click="openGate">Open</button>
    </div>
  </div>
</template>

<script>
import { openAccessDoor, openGate } from '@/api/p';

export default {
  methods: {
    openAccessDoor() {
      openAccessDoor()
        .then(() => {
          console.log('Access door opened');
        })
        .catch((error) => {
          console.error('Failed to open access door:', error);
        });
    },
    openGate() {
      openGate()
        .then(() => {
          console.log('Gate opened');
        })
        .catch((error) => {
          console.error('Failed to open gate:', error);
        });
    },
  },
};
</script>

<style scoped>
.device-control {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.device {
  margin-top: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>