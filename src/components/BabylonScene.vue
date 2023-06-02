<template>
  <div class="q-pa-md q-gutter-y-md column items-start">
    <q-btn-group push>
      <q-btn push label="Cursor" icon="near_me" />
      <q-btn push label="Offset" icon="multiple_stop" />
      <q-btn push label="Rotation" icon="360" />
      <q-btn push label="Scaling" icon="aspect_ratio" />
    </q-btn-group>
  </div>
  <canvas ref="bjsCanvas" width="1300" height="500" />
</template>

<script>
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "../scenes/MyFirstScene";

export default {
  name: "BabylonScene",
  setup() {
    const bjsCanvas = ref(null);

    onMounted(() => {
      if (bjsCanvas.value) {
        createScene(bjsCanvas.value);
      }
    });

    return {
      bjsCanvas,
    };
  },
};
</script>