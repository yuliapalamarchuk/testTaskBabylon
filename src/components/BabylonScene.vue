<template>
  <div class="flex justify-center">
    <div class="q-pa-md q-gutter-y-md column items-start">
      <q-btn-group push>
        <q-btn
          push
          label="Cursor"
          icon="near_me"
          id="cursor_btn"
          style="background-color: #423189"
        />
        <q-btn
          push
          label="Offset"
          icon="multiple_stop"
          id="offset_btn"
          style="background-color: #ffffff"
        />
        <q-btn
          push
          label="Rotation"
          icon="360"
          id="rotation_btn"
          style="background-color: #ffffff"
        />
        <q-btn
          push
          label="Scaling"
          icon="aspect_ratio"
          id="scale_btn"
          style="background-color: #ffffff"
        />
      </q-btn-group>
    </div>

    <div class="q-pa-md">
      <div class="q-gutter-sm">
        <q-radio v-model="shape" val="sphere" label="Sphere" id="sphere_btn" />
        <q-radio v-model="shape" val="box" label="Box" id="box_btn" />
        <q-radio
          v-model="shape"
          val="cylinder"
          label="Cylinder"
          id="cylinder_btn"
        />
        <q-radio v-model="shape" val="torus" label="Torus" id="torus_btn" />
      </div>
    </div>
  </div>
<div class="flex justify-center">
<canvas ref="bjsCanvas" style="height: 65vh; width: 70%" class="q-pa-md flex justify-center" />
</div>
  
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
      shape: ref("sphere"),
    };
  },
};
</script>