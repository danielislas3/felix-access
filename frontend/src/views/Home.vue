<template>
  <div class="home">
    <h1>Welcome to the IoT Project</h1>
    <DeviceControl />
  </div>
</template>

<script>
import DeviceControl from "@/components/DeviceControl.vue";

export default {
  name: "Home",
  components: {
    DeviceControl,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>